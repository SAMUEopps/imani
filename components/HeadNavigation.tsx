"use client";

import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaSearch,
  FaCompass,
  FaHeart,
  FaEnvelope,
  FaBell,
  FaTimes,
  FaBalanceScale,
  FaLifeRing,
  FaSignOutAlt,
  FaUserAlt,
  FaCogs,
  FaTruck, // Import the "X" icon for closing the drawer
} from "react-icons/fa";
import { useRouter } from 'next/navigation'
import { FaCartShopping } from "react-icons/fa6";
import Link from 'next/link';

const HeadNavigation: React.FC = () => {
  const [ ] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer open/close

  useEffect(() => {
    // Check localStorage for a token to set the login state
  //setIsLoggedIn(!!token); // If token exists, user is logged in
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 10); // Detect if the user has scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle the drawer visibility
  };

  const router = useRouter();
  
  const handleClick = () => {
    // Navigate to the Delivery Page
    router.push('/delivery');
  };

 


  return (
    <header className="bg-white shadow-md sticky top-0 z-50 px-4 py-2">
      {/* Responsive Container */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Top Row (Small Screens: Nav and Logo on left, Msg and Notification on right) */}
        <div className="flex items-center justify-between lg:w-auto">
          {/* Nav and Logo */}
          <div className="flex items-center space-x-4">
            <button
              className="text-2xl p-2 hover:bg-gray-100 rounded-full lg:block" // Keep on large screens
              onClick={toggleDrawer} // Open the drawer when the hamburger menu is clicked
            >
              {isDrawerOpen ? (
                <FaTimes /> // Show "X" when the drawer is open
              ) : (
                <FaBars /> // Show hamburger menu when the drawer is closed
              )}
            </button>
            <div className="text-xl font-bold">
            

            <Link href="/">
              <img 
                src="/imani.jpeg" 
                alt="YourLogo" 
                className="h-12 w-auto rounded-full"
              />
            </Link>
          </div>
          </div>
          {/* Message and Notification Icons */}
          {/*{isLoggedIn ? (*/}
          <div className="flex items-center space-x-4 lg:hidden">
            <button className="text-2xl p-2 hover:bg-gray-100 rounded-full">
              <FaCartShopping />
            </button>
            <button className="text-2xl p-2 hover:bg-gray-100 rounded-full">
              <FaEnvelope />
            </button>
            <button className="text-2xl p-2 hover:bg-gray-100 rounded-full">
              <FaBell />
            </button>
          </div>
          {/*}) : (
            <button
            className="block lg:hidden text-sm font-medium text-blue-600"
            onClick={handleLoginClick}
          >
            Login/Register
          </button>
          
          )}*/}
        </div>

        {/* Discover, Shops, and Favourites */}
        <div
          className={`flex flex-row items-center justify-center space-x-4 transition-all duration-300 ${
            isScrolling ? "hidden sm:flex" : "hidden sm:flex"
          }`}
        >
          <button className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-full">
            <FaCompass className="mr-2" />
            Discover
          </button>
          {/*<button className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-full">
            <FaShoppingBag className="mr-2" />
            Shops
          </button>*/}
          <button className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-full">
            <FaHeart className="mr-2" />
            Wishlist
          </button>
        </div>


        {/* Search */}
<div
  className={`w-full lg:max-w-md transition-all duration-300 ${
    isScrolling ? "hidden sm:block" : "hidden sm:block"
  }`}
>
  <div className="relative">
    <input
      type="text"
      className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Search..."
    />
    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
  </div>
</div>


        {/* Message and Notification Icons (Visible only on large screens) */}
        {/*{isLoggedIn ? (*/}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-2xl p-2 hover:bg-gray-100 rounded-full">
            <FaCartShopping />
          </button>
          <button className="text-2xl p-2 hover:bg-gray-100 rounded-full">
            <FaEnvelope />
          </button>
          <button className="text-2xl p-2 hover:bg-gray-100 rounded-full">
            <FaBell />
          </button>
        </div>
         {/*}) : (
        <button
        className="hidden lg:block text-sm font-medium text-blue-600"
        onClick={handleLoginClick}
        >
        Login/Register
        </button>
        )}*/}
      </div>

      {/* Navigation Drawer (Visible only when hamburger menu is clicked) */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-all duration-300 ${
          isDrawerOpen ? "block" : "hidden"
        }`}
        onClick={toggleDrawer} // Close drawer when the background is clicked
      >
        <div
          className="bg-white p-4 w-64 h-full flex flex-col space-y-6"
          onClick={(e) => e.stopPropagation()} // Prevent closing the drawer when clicking inside
        >
          <button
            className="text-2xl p-2 hover:bg-gray-100 rounded-full"
            onClick={toggleDrawer}
          >
            <FaTimes />
          </button>

          {/*<button
            className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-full"
            onClick={handleSellClick} // Trigger the navigation on click
          >
            <FaShoppingCart className="mr-2" /> {/* Icon for Start Selling *
            Start selling
          </button>*/}

          {/*<button className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-full">
            <FaBox className="mr-2" /> {/* Icon for My Orders *
            My orders
          </button>*/}

          <button className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-full">
            <FaBalanceScale className="mr-2" /> {/* Icon for Compare */}
            Compare
          </button>

          {/*<button className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-full">
            <FaBlog className="mr-2" /> {/* Icon for Blog *
            Blog
          </button>*/}

          <button
            className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-full"
            onClick={handleClick} // Trigger the navigation on click
          >
            <FaTruck className="mr-2" /> {/* Icon for Delivery */}
            Delivery
          </button>

          <button className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-full">
            <FaCogs className="mr-2" /> {/* Icon for Admin Panel */}
            Admin Panel
          </button>

          <button className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-full">
            <FaUserAlt className="mr-2" /> {/* Icon for My Profile */}
            My Profile
          </button>

          <button className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-full">
            <FaLifeRing className="mr-2" /> {/* Icon for Help */}
            Help?
          </button>

          {/*{isLoggedIn ? (*/}
          <button className="flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-full">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
          {/*}) : (
            <button
            className="hidden lg:block text-sm font-medium text-blue-600"
            onClick={handleLoginClick}
            >
            Login/Register
            </button>
            )}*/}
        </div>
      </div>
    </header>
  );
};

export default HeadNavigation;
