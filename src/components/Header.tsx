"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Hydration fix: Set initial state after the component mounts
  useEffect(() => {
    // Set to true on the client-side to match the server-rendered HTML
    setIsMenuOpen(false);
    setIsCartOpen(false);
  }, []);

  // Toggle Menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Toggle Cart
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <header className="bg-[#FFFFFF] shadow-md box-border sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:mx-14 py-5 gap-40">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2">
          <Link href="/" onClick={closeMenu}>
            <Image width={50} height={33} src="/images/logo.png" alt="Logo" className="w-8 md:w-10" />
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold font-montserrat">
            <Link href="/" onClick={closeMenu}>Furniro</Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center flex-1 justify-between">
          <ul className="flex gap-6 md:gap-20 font-poppins text-sm md:text-[18px] font-medium">
            {["Home", "Shop", "Blog", "Contact"].map((item, index) => (
              <li key={index} className="cursor-pointer">
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-12">
            {["help", "search", "like"].map((icon, index) => (
              <Link key={index} href={icon === "help" ? "/contact" : "#"}>
                <Image width={24} height={20} src={`/images/icons/${icon}.png`} alt={icon} className="w-5 md:w-6" />
              </Link>
            ))}
            <button onClick={toggleCart}>
              <Image width={26} height={23} src="/images/icons/cart.png" alt="cart" className="w-5 md:w-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="block md:hidden focus:outline-none transition-all">
          <Image width={512} height={512} src="/images/icons/hamburger.png" alt="menu" className="w-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col items-center gap-4 py-4 font-poppins text-sm font-medium">
            {["Home", "Shop", "Blog", "Contact"].map((item, index) => (
              <li key={index} className="cursor-pointer" onClick={closeMenu}>
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-end justify-center sm:items-center">
          <div className="bg-white w-4/5 md:w-1/3 max-sm:w-full max-sm:h-full rounded-lg shadow-lg p-4 relative">
            <button onClick={toggleCart} className="absolute top-2 right-2 text-xl font-bold text-gray-500">✖</button>
            <h3 className="text-xl font-bold mb-4 border-b pb-4">
              <Link href="/cart">Shopping Cart</Link>
            </h3>

            {/* Cart Items */}
            <div className="space-y-4 max-sm:overflow-y-auto max-sm:max-h-[60vh]">
              {/* {[{ img: "/images/cart3.png", price: "Rs. 250,000.00" }, { img: "/images/cart4.png", price: "Rs. 270,000.00" }].map((item, index) => (
                <div key={index} className="flex justify-between max-sm:flex-col max-sm:gap-4"> */}
                  {/* <div className="flex items-center gap-5 max-sm:flex-col">
                    <Image width={108} height={105} src={item.img} alt="" className="max-sm:w-full max-sm:max-w-[200px]" />
                  </div> */}
                  {/* <p className="max-sm:text-right">{item.price}</p>
                </div> */}
              {/* ))} */}
            </div>

            {/* Subtotal */}
            {/* <div className="mt-4 flex justify-between font-bold text-lg">
              <span>Subtotal:</span>
              <span className="text-[#B88E2F]">Rs. 520,000.00</span>
            </div> */}

            {/* Cart Actions */}
            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-2 border-t pt-4">
              {["Cart", "Checkout", "Compare"].map((action, index) => (
                <Link key={index} href={`/${action.toLowerCase()}`} className="text-center">
                  <button className="w-full bg-transparent border border-black py-2 px-4 rounded-full">
                    {action}
                  </button>
                </Link>
              ))}
              <button onClick={toggleCart} className="w-full bg-transparent border border-black py-2 px-4 rounded-full">Close</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
