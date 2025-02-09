"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/app/types/product";
import { getCartItems, removeFromCart, updateCartQuantity } from "@/app/actions/action";
import swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/imageUrl";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
    updateTotal(items);
  }, []);

  const updateTotal = (items: Product[]) => {
    setTotal(items.reduce((total, item) => total + item.price * item.inventory, 0));
  };

  const handleRemove = (id: string) => {
    swal
      .fire({
        title: "Are you sure?",
        text: "You will not be able to recover this item!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          removeFromCart(id);
          const updatedCart = getCartItems();
          setCartItems(updatedCart);
          updateTotal(updatedCart);
          swal.fire("Removed!", "Your item has been removed.", "success");
        }
      });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    const updatedCart = getCartItems();
    setCartItems(updatedCart);
    updateTotal(updatedCart);
  };
  
const router = useRouter();


  const handleProceed = () => {
    swal.fire({
      title: "Proceed to Checkout",
      text: "Are you sure you want to proceed to checkout?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Add your checkout logic here
        swal.fire("Success!", "You are being redirected to the checkout page.", "success");
        router.push("/checkout")
        setCartItems([]);
      }
    });

  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="text-lg">Your cart is empty.</p>
          <Link href="/shop">
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center bg-white shadow-md p-4 rounded-lg">
                {item.image && (
                  <Image 
                    src={urlFor(item.image)}
                    className="w-16 h-16 object-cover rounded-lg" 
                    alt={item.title}   
                    width={500}
                    height={500}
                  />
                )}                  
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleQuantityChange(item._id, item.inventory - 1)}
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                      disabled={item.inventory <= 1}
                    >
                      ➖
                    </button>
                    <span className="mx-2 text-lg font-semibold">{item.inventory}</span>
                    <button
                      onClick={() => handleQuantityChange(item._id, item.inventory + 1)}
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                    >
                      ➕
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="ml-auto px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6 h-fit sticky top-20">
            <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center">
                  {item.image && (
                    <Image 
                      src={urlFor(item.image)}
                      className="w-12 h-12 object-cover rounded-md mr-3" 
                      alt={item.title}   
                      width={500}
                      height={500}
                    />
                  )} 
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-gray-500 text-sm">${item.price} x {item.inventory}</p>
                  </div>
                </div>
              ))}
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleProceed}
              className="mt-4 w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
