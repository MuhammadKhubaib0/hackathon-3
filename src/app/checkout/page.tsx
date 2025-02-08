// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// const page = () => {
//   return (
//     <div>
//       <div className="">
//         <Image  width={1440} height={328} 
//           src="/images/shop-bg.png"
//           alt="banner"
//           className="relative flex justify-center items-center blur-sm"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 -translate-y-20 max-sm:-translate-y-[340px] max-sm:scale-50">
//           <h1 className="font-semibold text-5xl text-black">Checkout</h1>
//           <p className="font-light text-lg text-black flex gap-4">
//             <span className="font-medium">
//               <Link href="/">Home</Link>
//             </span>{" "}
//             / <span className="">Checkout</span>
//           </p>
//         </div>
//       </div>
//       <div className="px-[120px] py-[80px] grid grid-cols-2 max-sm:grid-cols-1 max-sm:px-8 max-sm:py-8">
//         <div>
//           <h1 className="font-bold text-4xl pb-10">Billing Details</h1>
//           <div className="flex flex-col gap-6 max-sm:gap-3">
//             <div className="flex flex-row justify-between  gap-5">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="first-name"
//                   className="text-[16px] text-black font-medium mb-2"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="first-name"
//                   placeholder="  "
//                   className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7 w-full"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="last-name"
//                   className="text-[16px] text-black font-medium mb-2 "
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="last-name"
//                   placeholder=""
//                   className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7 w-full"
//                 />
//               </div>
//             </div>
//             <label
//               htmlFor=""
//               className="text-[16px] text-black font-medium mb-1 mt-4"
//             >
//               Country / Region{" "}
//             </label>
//             <input
//               type="text"
//               id="last-name"
//               placeholder="Sri Lanka"
//               className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
//             />
//             <label
//               htmlFor=""
//               className="text-[16px] text-black font-medium mb-1 mt-4"
//             >
//               Street address
//             </label>
//             <input
//               type="text"
//               id="last-name"
//               placeholder=""
//               className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
//             />
//             <label
//               htmlFor=""
//               className="text-[16px] text-black font-medium mb-1 mt-4"
//             >
//               Town / City
//             </label>
//             <input
//               type="text"
//               id="last-name"
//               placeholder=""
//               className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
//             />
//             <label
//               htmlFor=""
//               className="text-[16px] text-black font-medium mb-1 mt-4"
//             >
//               Province
//             </label>
//             <input
//               type="text"
//               id="last-name"
//               placeholder="#9F9F9F"
//               className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
//             />
//             <label
//               htmlFor=""
//               className="text-[16px] text-black font-medium mb-1 mt-4"
//             >
//               ZIP code
//             </label>
//             <input
//               type="text"
//               id="last-name"
//               placeholder=""
//               className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
//             />
//             <label
//               htmlFor=""
//               className="text-[16px] text-black font-medium mb-1 mt-4"
//             >
//               Phone
//             </label>
//             <input
//               type="text"
//               id="last-name"
//               placeholder=""
//               className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
//             />
//             <label
//               htmlFor=""
//               className="text-[16px] text-black font-medium mb-1 mt-4"
//             >
//               Email address
//             </label>
//             <input
//               type="text"
//               id="last-name"
//               placeholder=""
//               className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
//             />
//             <input
//               type="text"
//               id="last-name"
//               placeholder="Additional Information.."
//               className="h-[75px] max-sm:h-[50px]  border border-[#9F9F9F] rounded-[10px] text-[16px] text-[#9F9F9F] pl-7"
//             />
//           </div>
//         </div>
//         <div className=" flex flex-col gap-3 px-24 max-sm:px-2 pt-28">
//           <div className="flex justify-between">
//             <h1 className="font-medium text-[24px] max-sm:text-[18px]">Product</h1>
//             <h1 className="font-medium text-[24px] max-sm:text-[18px]">Subtotal</h1>
//           </div>
//           <div className="flex justify-between">
//             <h1 className="font-medium text-[16px]  max-sm:text-[14px] text-[#9F9F9F]">
//               Asgaard Sofa <span className="text-[12px] text-black  max-sm:text-[10px]"> X 1</span>
//             </h1>
//             <h1 className=" text-[16px] font-light  max-sm:text-[14px]">Rs. 250,000.00</h1>
//           </div>
//           <div className="flex justify-between">
//             <h1 className="font-medium text-[16px]  max-sm:text-[14px]">Subtotal</h1>
//             <h1 className=" text-[16px] font-light  max-sm:text-[14px]">Rs. 250,000.00</h1>
//           </div>
//           <div className="flex justify-between border-b border-b-gray-200 pb-4">
//             <h1 className="font-medium text-[16px]  max-sm:text-[14px]">Total</h1>
//             <h1 className=" text-[24px]  max-sm:text-[20px] font-bold text-[#B88E2F]">
//               Rs. 250,000.00
//             </h1>
//           </div>
//           <div  className="flex gap-4 items-center">
//             <Image  width={14} height={14}  src="/images/icons/circle.png" alt="dot" className="h-fit w-fit" />
//             <h1>Direct Bank Transfer</h1>
//           </div>
//           <div className="font-light text-[16px] text-[#9F9F9F]  flex flex-col gap-3">
//             <p>
//               Make your payment directly into our bank account. Please use your
//               Order ID as the payment reference. Your order will not be shipped
//               until the funds have cleared in our account.
//             </p>
//             <div className="flex gap-4 items-center">
//               <Image  width={14} height={14}  src="/images/icons/stroke.png" alt="dot"  className="h-fit w-fit"/>
//               <h1>Direct Bank Transfer</h1>
//             </div>
//             <div  className="flex gap-4 items-center">
//               <Image  width={14} height={14}  src="/images/icons/stroke.png" alt="dot"  className="h-fit w-fit"/>
//               <h1>Cash On Delivery</h1>
//             </div>
//           </div>
//           <p className="text-[16px] font-light">
//             Your personal data will be used to support your experience
//             throughout this website, to manage access to your account, and for
//             other purposes described in our{" "}
//             <span className="font-bold">privacy policy</span>.
//           </p>
//           <button className="bg-transparent border border-black py-3 px-6 rounded-xl text-[20px] font-medium">
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

"use client";

import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { getCartItems } from "../actions/action";
import Link from "next/link";
import { Product } from "../types/product";
import { urlFor } from "@/sanity/lib/imageUrl";
import { CgChevronRight } from "react-icons/cg";
import { client } from "@/sanity/lib/sanityClient";
import Swal from "sweetalert2";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems() || []);
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    const isConfirmed = await Swal.fire({
      title: "Processing your order",
      text: "Please wait a moment",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    });

    if (isConfirmed.isConfirmed) {
      if (validateForm()) {
        const orderData = {
          _type: "order",
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          address: formValues.address,
          city: formValues.city,
          zipCode: formValues.zipCode,
          phone: formValues.phone,
          email: formValues.email,
          cartItems: cartItems.map((item) => ({
            _type: "reference",
            _ref: item._id,
          })),
          total: total,
          discount: discount,
          orderDate: new Date().toISOString(),
        };

        try {
          await client.create(orderData);
          localStorage.removeItem("appliedDiscount");
          Swal.fire(
            "Order placed successfully!",
            "Your order has been placed successfully",
            "success"
          );
        } catch (error) {
          console.error("Error placing order:", error);
          Swal.fire(
            "Error",
            "There was a problem placing your order. Please try again.",
            "error"
          );
        }
      } else {
        Swal.fire("Please fill in all the fields", "All fields are required", "error");
      }
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50`}>
      {/* Breadcrumb */}
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/cart"
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image)}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.inventory}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.inventory}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">${subtotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Billing Form */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            {Object.keys(formValues).map((key) => (
              <div key={key}>
                <label htmlFor={key}>{key.replace(/([A-Z])/g, " $1")}</label>
                <input
                  id={key}
                  placeholder={`Enter your ${key}`}
                  value={formValues[key as keyof typeof formValues]}
                  onChange={handleInputChange}
                  className="border"
                />
                {formErrors[key as keyof typeof formErrors] && (
                  <p className="text-sm text-red-500">
                    {key.replace(/([A-Z])/g, " $1")} is required.
                  </p>
                )}
              </div>
            ))}
            <button
              className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

