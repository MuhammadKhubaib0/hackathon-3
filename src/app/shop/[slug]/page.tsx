"use client";

import { useState, useEffect,  } from "react";
import { useParams, useRouter } from "next/navigation";
import { client } from "@/sanity/lib/sanityClient";
import { urlFor } from "@/sanity/lib/imageUrl";
import Image from "next/image";
import Swal from "sweetalert2";


interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  tags: string[];
  productImage: {
    asset: {
      _ref: string;
    };
  };
}

// Fetch Product Function
const getProduct = async (slug: string): Promise<Product | null> => {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    description,
    price,
    tags,
    productImage { asset { _ref } }
  }`;

  try {
    const product: Product = await client.fetch(query, { slug });
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams(); // ✅ Correctly accessing the slug parameter
  const router = useRouter();

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      const data = await getProduct(slug as string);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [slug]); // ✅ Updated dependency array

  function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>, product: Product) {
      e.preventDefault(); // Prevents navigation when clicking inside Link
      Swal.fire({
            position : "top-right",
            icon : "success",
            title : `${product.title} has been added to cart`,
            showConfirmButton : false,
            timer : 1500
          })
      console.log("Added to Cart:", product);}

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!product) return <div className="text-center py-10">Product Not Found</div>;

  const imageUrl = product.productImage?.asset?._ref ? urlFor(product.productImage.asset) : "";



  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={product.title}
            width={600}
            height={400}
            className="rounded-lg w-full h-96 object-cover"
          />
        )}
        <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-gray-900 font-bold text-xl mt-4">${product.price}</p>
        
        {/* Product Tags */}
        <div className="flex flex-wrap mt-3">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
          <button
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
          hover:scale-110 transition-transform duration-300 ease-in-out mt-2 w-full"
          onClick={(e) => handleAddToCart(e, product)}
        >
          Add to Cart
        </button>
         *
          
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mt-4 bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-900 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
