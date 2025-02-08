"use client";

import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/sanityClient";
import { urlFor } from "@/sanity/lib/imageUrl";
import Image from "next/image";
import Swal from "sweetalert2";

interface Product {
  _id: string;
  slug: { current: string };
  title: string;
  price: number;
  productImage: {
    asset: {
      _ref: string;
    };
  };
}

export default function OurProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const query = `*[_type == "product"] | order(_createdAt desc) [0...8] {
          _id,
          slug { current },
          title,
          price,
          productImage { asset { _ref } }
        }`;

        const data: Product[] = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  function handleAddToCart(e: MouseEvent<HTMLButtonElement>, product: Product) {
    e.preventDefault(); // Prevents navigation when clicking inside Link
    console.log("Added to Cart:", product);
    Swal.fire({
          position : "top-right",
          icon : "success",
          title : `${product.title} has been added to cart`,
          showConfirmButton : false,
          timer : 1500
        })
    // Here, you can integrate it with your cart state or API
    
  }

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const imageUrl = product.productImage?.asset?._ref
            ? urlFor(product.productImage.asset)
            : "";

          return (
            <div key={product._id} className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition">
              <Link href={`/shop/${product.slug.current}`}>
                <div>
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={product.title}
                      width={150}
                      height={150}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  )}
                  <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                  <p className="text-gray-900 font-bold">${product.price}</p>
                </div>
              </Link>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
                hover:scale-110 transition-transform duration-300 ease-in-out mt-2 w-full"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6">
        <Link href="/shop">
          <button className="bg-[#8B5E3C] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#6B4226] transition">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
}
