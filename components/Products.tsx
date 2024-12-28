// Add the "use client" directive at the top of your file
"use client";

import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number; // Rating out of 5
}

const products: Product[] = [
        {
          id: 1,
          name: "Stylish Sneakers",
          price: 4999,
          image: "https://i.pinimg.com/236x/fa/c5/71/fac571b9e25da30a89669e8848bb41db.jpg",
          rating: 4.5,
        },
        {
          id: 2,
          name: "Elegant Watch",
          price: 8999,
          image: "https://i.pinimg.com/236x/3d/bd/88/3dbd885b326e461ae2cdc39f0e610edf.jpg",
          rating: 4,
        },
        {
          id: 3,
          name: "Casual Shirt",
          price: 1999,
          image: "https://i.pinimg.com/236x/52/46/d6/5246d62865736d91905f64d32556ba0f.jpg",
          rating: 5,
        },
        {
          id: 4,
          name: "Leather Jacket",
          price: 11999,
          image: "https://i.pinimg.com/236x/57/62/e7/5762e7b853030df4ed346844b99e3f62.jpg",
          rating: 4.8,
        },
        {
          id: 5,
          name: "Classic Sunglasses",
          price: 2999,
          image: "https://i.pinimg.com/236x/4c/93/fb/4c93fb1339089d235e39407f6de2bff7.jpg",
          rating: 4.2,
        },
        {
          id: 6,
          name: "Backpack",
          price: 3999,
          image: "https://i.pinimg.com/236x/60/10/1a/60101a7295810edc817856322407cb21.jpg",
          rating: 3.9,
        },
        {
          id: 7,
          name: "Bluetooth Headphones",
          price: 7499,
          image: "https://i.pinimg.com/236x/43/15/ae/4315ae69df9daa2550203db798b0d77f.jpg",
          rating: 4.7,
        },
        {
          id: 8,
          name: "Sports Shoes",
          price: 5999,
          image: "https://i.pinimg.com/236x/cb/56/ee/cb56eee0d3371d221cd3c5253a75c2f1.jpg",
          rating: 4.3,
        },
        {
          id: 9,
          name: "Wireless Mouse",
          price: 999,
          image: "https://i.pinimg.com/736x/ac/65/a5/ac65a581cb5b83062b9f3af05bf068fd.jpg",
          rating: 3.8,
        },
        {
          id: 10,
          name: "Gaming Keyboard",
          price: 4999,
          image: "https://i.pinimg.com/736x/4b/1e/09/4b1e0960bad176c1e6cd6d297771cff9.jpg",
          rating: 4.6,
        },
        {
          id: 11,
          name: "Smartphone Case",
          price: 799,
          image: "https://i.pinimg.com/236x/9b/a4/be/9ba4be5d0fab6eedd2c83d55de4910b6.jpg",
          rating: 4.1,
        },
        {
          id: 12,
          name: "Portable Speaker",
          price: 2599,
          image: "https://i.pinimg.com/236x/c5/b1/33/c5b133d8f05f359e1d6c792bea023285.jpg",
          rating: 4.4,
        },
        {
          id: 13,
          name: "Digital Camera",
          price: 24999,
          image: "https://i.pinimg.com/236x/e2/d1/00/e2d100210bcffaf0d816f01d4ff81027.jpg",
          rating: 4.9,
        },
        {
          id: 14,
          name: "Elegant Bracelet",
          price: 1999,
          image: "https://i.pinimg.com/236x/62/0c/ba/620cba00e19f5546e4b087b7c9783999.jpg",
          rating: 4,
        },
        {
          id: 15,
          name: "Travel Suitcase",
          price: 8999,
          image: "https://i.pinimg.com/474x/92/bb/f7/92bbf7aa1daf6bec66e887f20c5dc6c1.jpg",
          rating: 3.7,
        },
        {
          id: 16,
          name: "Running Shorts",
          price: 1299,
          image: "https://i.pinimg.com/736x/3a/2b/68/3a2b68815d82d2aa2d5c8b668ec2dbce.jpg",
          rating: 4.3,
        },
        {
          id: 17,
          name: "Woolen Scarf",
          price: 1499,
          image: "https://i.pinimg.com/474x/cf/e3/4a/cfe34acc857a8091aadbcf69f3d249ce.jpg",
          rating: 4.1,
        },
        {
          id: 18,
          name: "Water Bottle",
          price: 599,
          image: "https://i.pinimg.com/236x/7e/a3/e0/7ea3e0fbee59f275a86300be0425bdbe.jpg",
          rating: 4.5,
        },
        /*{
          id: 19,
          name: "Home Coffee Maker",
          price: 7999,
          image: "https://i.pinimg.com/236x/7d/41/70/7d417027c43ea19281a2baba18d14946.jpg",
          rating: 4.8,
        },
        {
          id: 20,
          name: "Fitness Tracker",
          price: 3499,
          image: "https://i.pinimg.com/236x/3c/01/34/3c01347f7367b604e0281386bcc5aedf.jpg",
          rating: 4.2,
        },*/
      ];

const Products: React.FC = () => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <AiFillStar key={i} className="text-yellow-400" />
        ))}
        {halfStar && <AiFillStar className="text-yellow-400" />}
        {Array.from({ length: 5 - fullStars - (halfStar ? 1 : 0) }, (_, i) => (
          <AiOutlineStar key={i} className="text-gray-300" />
        ))}
      </>
    );
  };

  const router = useRouter();

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Explore Our Products
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 lg:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 bg-white cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-gray-500 font-medium mt-1">Kes {product.price}</p>
              <div className="flex items-center mt-2">{renderStars(product.rating)}</div>
              <div className="flex justify-between items-center mt-6">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-1.5 px-4 sm:py-2 sm:px-6 rounded-full font-bold text-sm sm:text-md shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition-all transform hover:scale-105 flex items-center gap-2">
                  <FaShoppingCart className="text-base sm:text-lg" />
                  Add to Cart
                </button>
                <button className="text-red-500 hover:text-red-600 transition-transform transform hover:scale-110 sm:hover:scale-125">
                  <FaHeart size={20} className="sm:size-[24px]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  
};

export default Products;
