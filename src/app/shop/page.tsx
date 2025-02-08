"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/sanityClient";
import { urlFor } from "@/sanity/lib/imageUrl";
import Image from "next/image";
import { addToCart } from "../actions/action";

interface Product {
  _id: string;
  slug: { _type: "slug"; current: string };
  title: string;
  description: string;
  productname: string;
  _type: "product";
  inventory: number;
  price: number;
  tags: string[];
  productImage: {
    asset: {
      _ref: string;
    };
  };
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const query = `*[_type == "product"] {
          _id,
          slug { current },
          title,
          description,
          price,
          tags,
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

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  const handleAddtoCart = (e: React.MouseEvent, product : Product) =>{
    e.preventDefault();
    addToCart(product);
    
    
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const imageUrl = product.productImage?.asset?._ref
            ? urlFor(product.productImage.asset)
            : "";

          return (
            <Link key={product._id} href={`/shop/${product.slug.current}`}>
              <div className="bg-white shadow-lg rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="rounded-lg w-full h-64 object-cover"
                    priority
                  />
                )}
                <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
                <p className="text-gray-600 text-sm mt-2 truncate">
                  {product.description.length > 100
                    ? product.description.slice(0, 100) + "..."
                    : product.description}
                </p>
                <p className="text-gray-900 font-bold text-lg mt-3">
                  ${product.price}
                </p>
                <div className="flex flex-wrap mt-3">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                className="bg-gradient-to-r from-blue-500 to bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg 
                hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={(e) =>  handleAddtoCart(e, product)}>
                  Add to Cart
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
