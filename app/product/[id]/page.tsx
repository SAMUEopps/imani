"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeadNavigation from "@/components/HeadNavigation";
import React, { useState } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineLink, AiOutlineMessage, AiOutlineShareAlt, AiOutlineStar } from "react-icons/ai";

// Example product data, you would typically fetch this from an API
const productData =[
    {
      "id": 1,
      "name": "Stylish Sneakers",
      "price": 4999,
      "image": "https://i.pinimg.com/236x/fa/c5/71/fac571b9e25da30a89669e8848bb41db.jpg",
      "rating": 4.5,
      "description": "A pair of stylish sneakers for every occasion.",
      "colors": ["Black", "White", "Red"],
      "sizes": ["6", "7", "8", "9", "10"],
      "inStock": true,
      "reviews": [
        { "user": "John Doe", "rating": 5, "comment": "Amazing shoes, love the comfort!" },
        { "user": "Jane Smith", "rating": 4, "comment": "Great quality, but runs slightly small." }
      ],
      "additionalImages": [
        "https://i.pinimg.com/236x/fa/c5/71/fac571b9e25da30a89669e8848bb41db.jpg",
        "https://i.pinimg.com/236x/43/15/ae/4315ae69df9daa2550203db798b0d77f.jpg"
      ],
      "seller": "Stylish Footwear Co."
    },
    {
      "id": 2,
      "name": "Elegant Watch",
      "price": 8999,
      "image": "https://i.pinimg.com/236x/3d/bd/88/3dbd885b326e461ae2cdc39f0e610edf.jpg",
      "rating": 4,
      "description": "A stylish watch to complement any outfit.",
      "colors": ["Silver", "Gold", "Black"],
      "sizes": ["N/A"],
      "inStock": true,
      "reviews": [
        { "user": "Alice", "rating": 5, "comment": "Beautiful watch, great quality!" },
        { "user": "Bob", "rating": 4, "comment": "Very elegant but a bit heavy." }
      ],
      "additionalImages": [
        "https://i.pinimg.com/236x/3d/bd/88/3dbd885b326e461ae2cdc39f0e610edf.jpg",
        "https://i.pinimg.com/236x/52/46/d6/5246d62865736d91905f64d32556ba0f.jpg"
      ],
      "category": "Accessories",
      "seller": "Luxury Timepieces"
    },
    {
      "id": 3,
      "name": "Casual Shirt",
      "price": 1999,
      "image": "https://i.pinimg.com/236x/52/46/d6/5246d62865736d91905f64d32556ba0f.jpg",
      "rating": 5,
      "description": "A comfortable casual shirt for everyday wear.",
      "colors": ["Blue", "White", "Gray"],
      "sizes": ["S", "M", "L", "XL"],
      "inStock": true,
      "reviews": [
        { "user": "Emma", "rating": 5, "comment": "Fits perfectly and feels soft." },
        { "user": "Liam", "rating": 5, "comment": "Perfect for casual days out!" }
      ],
      "additionalImages": [
        "https://i.pinimg.com/236x/52/46/d6/5246d62865736d91905f64d32556ba0f.jpg",
        "https://i.pinimg.com/236x/57/62/e7/5762e7b853030df4ed346844b99e3f62.jpg"
      ],
      "category": "Clothing",
      "seller": "Casual Wear Inc."
    },
    {
      "id": 4,
      "name": "Leather Jacket",
      "price": 11999,
      "image": "https://i.pinimg.com/236x/57/62/e7/5762e7b853030df4ed346844b99e3f62.jpg",
      "rating": 4.8,
      "description": "A premium leather jacket that adds a rugged style.",
      "colors": ["Black", "Brown"],
      "sizes": ["M", "L", "XL"],
      "inStock": true,
      "reviews": [
        { "user": "Sophia", "rating": 5, "comment": "Gorgeous jacket, feels high quality." },
        { "user": "James", "rating": 4, "comment": "A bit tight around the shoulders." }
      ],
      "additionalImages": [
        "https://i.pinimg.com/236x/57/62/e7/5762e7b853030df4ed346844b99e3f62.jpg",
        "https://i.pinimg.com/236x/cb/56/ee/cb56eee0d3371d221cd3c5253a75c2f1.jpg"
      ],
      "category": "Clothing",
      "seller": "Urban Leather Co."
    },
    {
      "id": 5,
      "name": "Classic Sunglasses",
      "price": 2999,
      "image": "https://i.pinimg.com/236x/4c/93/fb/4c93fb1339089d235e39407f6de2bff7.jpg",
      "rating": 4.2,
      "description": "A pair of stylish sunglasses for sunny days.",
      "colors": ["Black", "Brown", "Gray"],
      "sizes": ["N/A"],
      "inStock": true,
      "reviews": [
        { "user": "Oliver", "rating": 4, "comment": "Good sunglasses but could use a better frame." },
        { "user": "Isabella", "rating": 5, "comment": "These are perfect for beach trips!" }
      ],
      "additionalImages": [
        "https://i.pinimg.com/236x/4c/93/fb/4c93fb1339089d235e39407f6de2bff7.jpg",
        "https://i.pinimg.com/236x/60/10/1a/60101a7295810edc817856322407cb21.jpg"
      ],
      "category": "Accessories",
      "seller": "Sunglasses World"
    },
  
  {
    "id": 6,
    "name": "Backpack",
    "price": 3999,
    "image": "https://i.pinimg.com/236x/60/10/1a/60101a7295810edc817856322407cb21.jpg",
    "rating": 3.9,
    "description": "A spacious backpack for all your essentials.",
    "colors": ["Black", "Gray", "Blue"],
    "sizes": ["N/A"],
    "inStock": true,
    "reviews": [
      { "user": "Ethan", "rating": 4, "comment": "Perfect size for daily use!" },
      { "user": "Ava", "rating": 3, "comment": "Quality is good, but the zippers feel flimsy." }
    ],
    "additionalImages": [
      "https://i.pinimg.com/236x/60/10/1a/60101a7295810edc817856322407cb21.jpg",
      "https://i.pinimg.com/236x/43/15/ae/4315ae69df9daa2550203db798b0d77f.jpg"
    ],
    "category": "Accessories"
  },
  {
    "id": 7,
    "name": "Bluetooth Headphones",
    "price": 7499,
    "image": "https://i.pinimg.com/236x/43/15/ae/4315ae69df9daa2550203db798b0d77f.jpg",
    "rating": 4.7,
    "description": "Wireless Bluetooth headphones for superior sound quality.",
    "colors": ["Black", "White", "Blue"],
    "sizes": ["N/A"],
    "inStock": true,
    "reviews": [
      { "user": "Zoe", "rating": 5, "comment": "Best sound quality, love these headphones!" },
      { "user": "Liam", "rating": 4, "comment": "Good quality but a bit heavy." }
    ],
    "additionalImages": [
      "https://i.pinimg.com/236x/43/15/ae/4315ae69df9daa2550203db798b0d77f.jpg",
      "https://i.pinimg.com/236x/cb/56/ee/cb56eee0d3371d221cd3c5253a75c2f1.jpg"
    ],
    "category": "Electronics"
  },
  {
    "id": 8,
    "name": "Sports Shoes",
    "price": 5999,
    "image": "https://i.pinimg.com/236x/cb/56/ee/cb56eee0d3371d221cd3c5253a75c2f1.jpg",
    "rating": 4.3,
    "description": "Comfortable sports shoes for all your activities.",
    "colors": ["Red", "Black", "Blue"],
    "sizes": ["6", "7", "8", "9", "10"],
    "inStock": true,
    "reviews": [
      { "user": "Mason", "rating": 4, "comment": "Perfect fit and really comfortable!" },
      { "user": "Ava", "rating": 5, "comment": "Great shoes for running!" }
    ],
    "additionalImages": [
      "https://i.pinimg.com/236x/cb/56/ee/cb56eee0d3371d221cd3c5253a75c2f1.jpg",
      "https://i.pinimg.com/236x/4b/1e/09/4b1e0960bad176c1e6cd6d297771cff9.jpg"
    ],
    "category": "Footwear"
  },
  {
    "id": 9,
    "name": "Wireless Mouse",
    "price": 999,
    "image": "https://i.pinimg.com/736x/ac/65/a5/ac65a581cb5b83062b9f3af05bf068fd.jpg",
    "rating": 3.8,
    "description": "A reliable wireless mouse for smooth navigation.",
    "colors": ["Black", "Gray", "White"],
    "sizes": ["N/A"],
    "inStock": true,
    "reviews": [
      { "user": "Jack", "rating": 4, "comment": "Good mouse for the price." },
      { "user": "Olivia", "rating": 3, "comment": "Battery drains quickly." }
    ],
    "additionalImages": [
      "https://i.pinimg.com/736x/ac/65/a5/ac65a581cb5b83062b9f3af05bf068fd.jpg",
      "https://i.pinimg.com/236x/e2/d1/00/e2d100210bcffaf0d816f01d4ff81027.jpg"
    ],
    "category": "Electronics"
  },
  {
    "id": 10,
    "name": "Gaming Keyboard",
    "price": 4999,
    "image": "https://i.pinimg.com/736x/4b/1e/09/4b1e0960bad176c1e6cd6d297771cff9.jpg",
    "rating": 4.6,
    "description": "A high-performance gaming keyboard with customizable keys.",
    "colors": ["Black", "Red", "RGB"],
    "sizes": ["N/A"],
    "inStock": true,
    "reviews": [
      { "user": "John", "rating": 5, "comment": "Perfect for gaming, responsive keys!" },
      { "user": "Diana", "rating": 4, "comment": "Great keyboard, but a little noisy." }
    ],
    "additionalImages": [
      "https://i.pinimg.com/736x/4b/1e/09/4b1e0960bad176c1e6cd6d297771cff9.jpg",
      "https://i.pinimg.com/736x/c5/b1/33/c5b133d8f05f359e1d6c792bea023285.jpg"
    ],
    "category": "Electronics"
  },
    {
      id: 11,
      name: "Smartphone Case",
      price: 799,
      image: "https://i.pinimg.com/236x/9b/a4/be/9ba4be5d0fab6eedd2c83d55de4910b6.jpg",
      rating: 4.1,
      description: "A sleek smartphone case to protect your phone in style.",
      colors: ["Black", "Blue", "Red"],
      sizes: ["Small", "Medium", "Large"],
      inStock: true,
      reviews: [
        { user: "Michael Johnson", rating: 5, comment: "Great case, fits perfectly!" },
        { user: "Emily Davis", rating: 4, comment: "Good quality, but I wish it had more color options." },
      ],
      additionalImages: [
        "https://i.pinimg.com/236x/9b/a4/be/9ba4be5d0fab6eedd2c83d55de4910b6.jpg",
        "https://i.pinimg.com/236x/7e/a3/e0/7ea3e0fbee59f275a86300be0425bdbe.jpg",
      ],
      category: "Accessories",
    },
    {
      id: 12,
      name: "Portable Speaker",
      price: 2599,
      image: "https://i.pinimg.com/236x/c5/b1/33/c5b133d8f05f359e1d6c792bea023285.jpg",
      rating: 4.4,
      description: "A compact, portable speaker with excellent sound quality.",
      colors: ["Black", "Silver", "Blue"],
      sizes: ["Compact"],
      inStock: true,
      reviews: [
        { user: "Chris Taylor", rating: 5, comment: "Perfect sound quality, very portable." },
        { user: "Sarah Wilson", rating: 4, comment: "Sound is great, but battery life could be better." },
      ],
      additionalImages: [
        "https://i.pinimg.com/236x/c5/b1/33/c5b133d8f05f359e1d6c792bea023285.jpg",
        "https://i.pinimg.com/236x/7d/41/70/7d417027c43ea19281a2baba18d14946.jpg",
      ],
      category: "Electronics",
    },
    {
      id: 13,
      name: "Digital Camera",
      price: 24999,
      image: "https://i.pinimg.com/236x/e2/d1/00/e2d100210bcffaf0d816f01d4ff81027.jpg",
      rating: 4.9,
      description: "A high-resolution digital camera for professional photography.",
      colors: ["Black", "White"],
      sizes: ["Compact", "Standard"],
      inStock: true,
      reviews: [
        { user: "David Lee", rating: 5, comment: "Incredible camera, perfect for all my shoots!" },
        { user: "Laura Adams", rating: 4.8, comment: "Excellent quality, but a bit heavy for travel." },
      ],
      additionalImages: [
        "https://i.pinimg.com/236x/e2/d1/00/e2d100210bcffaf0d816f01d4ff81027.jpg",
        "https://i.pinimg.com/236x/c5/b1/33/c5b133d8f05f359e1d6c792bea023285.jpg",
      ],
      category: "Electronics",
    },
    {
      id: 14,
      name: "Elegant Bracelet",
      price: 1999,
      image: "https://i.pinimg.com/236x/62/0c/ba/620cba00e19f5546e4b087b7c9783999.jpg",
      rating: 4,
      description: "A stylish bracelet to complement any outfit.",
      colors: ["Gold", "Silver", "Rose Gold"],
      sizes: ["Small", "Medium", "Large"],
      inStock: true,
      reviews: [
        { user: "Olivia Harris", rating: 5, comment: "Beautiful bracelet, love the design!" },
        { user: "Liam Walker", rating: 3.5, comment: "Nice, but the clasp is a bit fragile." },
      ],
      additionalImages: [
        "https://i.pinimg.com/236x/62/0c/ba/620cba00e19f5546e4b087b7c9783999.jpg",
        "https://i.pinimg.com/236x/7d/41/70/7d417027c43ea19281a2baba18d14946.jpg",
      ],
      category: "Accessories",
    },
    {
      id: 15,
      name: "Travel Suitcase",
      price: 8999,
      image: "https://i.pinimg.com/474x/92/bb/f7/92bbf7aa1daf6bec66e887f20c5dc6c1.jpg",
      rating: 3.7,
      description: "A spacious and durable suitcase for all your travel needs.",
      colors: ["Black", "Blue", "Red"],
      sizes: ["Medium", "Large"],
      inStock: true,
      reviews: [
        { user: "James White", rating: 4, comment: "Great suitcase, but a bit bulky." },
        { user: "Sophia Green", rating: 3, comment: "Decent quality, but one of the wheels broke after a few trips." },
      ],
      additionalImages: [
        "https://i.pinimg.com/474x/92/bb/f7/92bbf7aa1daf6bec66e887f20c5dc6c1.jpg",
        "https://i.pinimg.com/236x/e2/d1/00/e2d100210bcffaf0d816f01d4ff81027.jpg",
      ],
      category: "Luggage",
    },
    {
      id: 16,
      name: "Running Shorts",
      price: 1299,
      image: "https://i.pinimg.com/736x/3a/2b/68/3a2b68815d82d2aa2d5c8b668ec2dbce.jpg",
      rating: 4.3,
      description: "Comfortable and breathable shorts for your runs.",
      colors: ["Black", "Gray", "Blue"],
      sizes: ["Small", "Medium", "Large"],
      inStock: true,
      reviews: [
        { user: "William King", rating: 5, comment: "Very comfortable, perfect for running!" },
        { user: "Charlotte Scott", rating: 4, comment: "Great shorts, but the waistband could be more flexible." },
      ],
      additionalImages: [
        "https://i.pinimg.com/736x/3a/2b/68/3a2b68815d82d2aa2d5c8b668ec2dbce.jpg",
        "https://i.pinimg.com/236x/9b/a4/be/9ba4be5d0fab6eedd2c83d55de4910b6.jpg",
      ],
      category: "Sportswear",
    },
    {
      id: 17,
      name: "Woolen Scarf",
      price: 1499,
      image: "https://i.pinimg.com/474x/cf/e3/4a/cfe34acc857a8091aadbcf69f3d249ce.jpg",
      rating: 4.1,
      description: "A cozy woolen scarf to keep you warm in the winter.",
      colors: ["Gray", "Black", "Red"],
      sizes: ["Standard"],
      inStock: true,
      reviews: [
        { user: "Isabella Martinez", rating: 5, comment: "Soft and warm, perfect for winter!" },
        { user: "Ethan Thomas", rating: 4, comment: "Good quality, but a bit itchy." },
      ],
      additionalImages: [
        "https://i.pinimg.com/474x/cf/e3/4a/cfe34acc857a8091aadbcf69f3d249ce.jpg",
        "https://i.pinimg.com/236x/c5/b1/33/c5b133d8f05f359e1d6c792bea023285.jpg",
      ],
      category: "Accessories",
    },
    {
      id: 18,
      name: "Water Bottle",
      price: 599,
      image: "https://i.pinimg.com/236x/7e/a3/e0/7ea3e0fbee59f275a86300be0425bdbe.jpg",
      rating: 4.5,
      description: "A durable water bottle to keep you hydrated on the go.",
      colors: ["Blue", "Green", "Pink"],
      sizes: ["500ml", "1L", "1.5L"],
      inStock: true,
      reviews: [
        { user: "Ava Roberts", rating: 5, comment: "Great water bottle, keeps my drinks cold!" },
        { user: "Lucas Walker", rating: 4, comment: "Good size, but the cap is a bit hard to screw on." },
      ],
      additionalImages: [
        "https://i.pinimg.com/236x/7e/a3/e0/7ea3e0fbee59f275a86300be0425bdbe.jpg",
        "https://i.pinimg.com/236x/62/0c/ba/620cba00e19f5546e4b087b7c9783999.jpg",
      ],
      category: "Accessories",
    },
    {
      id: 19,
      name: "Home Coffee Maker",
      price: 7999,
      image: "https://i.pinimg.com/236x/7d/41/70/7d417027c43ea19281a2baba18d14946.jpg",
      rating: 4.8,
      description: "A sleek and efficient coffee maker for your home.",
      colors: ["Black", "Silver"],
      sizes: ["Standard"],
      inStock: true,
      reviews: [
        { user: "Matthew White", rating: 5, comment: "Love this coffee maker, makes great coffee!" },
        { user: "Ella Harris", rating: 4.5, comment: "Works well, but takes a bit long to brew." },
      ],
      additionalImages: [
        "https://i.pinimg.com/236x/7d/41/70/7d417027c43ea19281a2baba18d14946.jpg",
        "https://i.pinimg.com/236x/c5/b1/33/c5b133d8f05f359e1d6c792bea023285.jpg",
      ],
      category: "Home Appliances",
    },
    {
      id: 20,
      name: "Fitness Tracker",
      price: 3499,
      image: "https://i.pinimg.com/236x/3c/01/34/3c01347f7367b604e0281386bcc5aedf.jpg",
      rating: 4.2,
      description: "Track your fitness goals with this advanced fitness tracker.",
      colors: ["Black", "Green", "Blue"],
      sizes: ["One Size"],
      inStock: true,
      reviews: [
        { user: "Lily Young", rating: 5, comment: "Perfect fitness tracker, tracks everything!" },
        { user: "Jack Moore", rating: 4, comment: "Good, but the battery life could be longer." },
      ],
      additionalImages: [
        "https://i.pinimg.com/236x/3c/01/34/3c01347f7367b604e0281386bcc5aedf.jpg",
        "https://i.pinimg.com/236x/c5/b1/33/c5b133d8f05f359e1d6c792bea023285.jpg",
      ],
      category: "Electronics",
    }
  ]


const ProductDetailPage: React.FC = ({ params }: any) => {
  const { id } = params; // Get the id from params (not query)

  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("8");
  const [reviewText, setReviewText] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);

  // Find the product that matches the id from the params
  const product = productData.find((item) => item.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle adding the review (e.g., send it to a backend or state)
    alert("Review submitted!");
    setReviewText("");
  };

  return (
    <div>
      <Header />
      <HeadNavigation />
    <div className="p-6 max-w-7xl mx-auto">
      {/* Product Image and Details */}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <div className="w-full mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex space-x-4">
            {product.additionalImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product additional image ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 pl-0 lg:pl-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-xl text-gray-600 mt-2">Kes {product.price}</p>
          <div className="flex items-center mt-2">
            {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
              <AiFillStar key={i} className="text-yellow-400" />
            ))}
            {product.rating % 1 >= 0.5 && <AiFillStar className="text-yellow-400" />}
            {Array.from({ length: 5 - Math.floor(product.rating) }, (_, i) => (
              <AiOutlineStar key={i} className="text-gray-300" />
            ))}
            <span className="ml-2 text-gray-500">({product.reviews.length} reviews)</span>
          </div>

          {/* Sold By */}
          <div className="mt-6 flex items-center space-x-3">
            <a href={`/seller/${product.seller}`} className="flex items-center space-x-2">
              {/* Seller Profile Image */}
              <img
                src={ "https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg"} // Placeholder if no image is provided
                alt={`${product.seller} Profile`}
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
              />
              {/* Seller Name and Link */}
              <div>
                <p className="text-lg font-semibold text-gray-800 hover:text-gray-600">{product.seller}</p>
                <p className="text-sm text-gray-500">Visit Shop</p>
              </div>
            </a>
          </div>


          {/* Like, Chat, Share, Copy Link Icons */}
          <div className="flex space-x-6 mt-6">
            <button className="text-gray-600 hover:text-yellow-500">
              <AiOutlineHeart size={24} />
            </button>
            <button className="text-gray-600 hover:text-yellow-500">
              <AiOutlineMessage size={24} />
            </button>
            <button className="text-gray-600 hover:text-yellow-500">
              <AiOutlineShareAlt size={24} />
            </button>
            <button className="text-gray-600 hover:text-yellow-500">
              <AiOutlineLink size={24} />
            </button>
          </div>

          {/* Color & Size Selector */}
          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700">Color</label>
            <div className="flex space-x-4 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? "border-yellow-500" : "border-gray-300"}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                ></button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-gray-700">Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="mt-2 p-2 border rounded-md w-20"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Stock & Quantity */}
          <div className="mt-4">
            <span className={`text-sm ${product.inStock ? "text-green-600" : "text-red-600"}`}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
            {product.inStock && (
              <div className="mt-2 flex items-center">
                <button
                  onClick={() => setProductQuantity(Math.max(1, productQuantity - 1))}
                  className="bg-gray-300 text-gray-700 px-3 py-1 rounded-l-md"
                >
                  -
                </button>
                <input
                  type="number"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(Number(e.target.value))}
                  className="text-center border-t border-b w-12 mx-2"
                  min={1}
                />
                <button
                  onClick={() => setProductQuantity(productQuantity + 1)}
                  className="bg-gray-300 text-gray-700 px-3 py-1 rounded-r-md"
                >
                  +
                </button>
              </div>
            )}
          </div>

          {/* Add to Cart Button */}
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-2 px-6 rounded-full font-bold text-md mt-6 hover:from-yellow-500 hover:to-yellow-700 transition-all">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Customer Reviews</h2>
        <div className="mt-4">
          {product.reviews.map((review, index) => (
            <div key={index} className="border-b pb-4 mb-4">
              <div className="flex items-center">
                {Array.from({ length: review.rating }, (_, i) => (
                  <AiFillStar key={i} className="text-yellow-400" />
                ))}
                {Array.from({ length: 5 - review.rating }, (_, i) => (
                  <AiOutlineStar key={i} className="text-gray-300" />
                ))}
              </div>
              <p className="text-gray-800 font-semibold">{review.user}</p>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Review Submission */}
        <h3 className="text-xl font-semibold text-gray-800">Submit Your Review</h3>
        <form onSubmit={handleReviewSubmit} className="mt-4">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review here..."
            className="w-full p-3 border rounded-md text-sm text-gray-700"
            rows={4}
          />
          <button type="submit" className="bg-yellow-600 text-white px-6 py-2 rounded-md mt-4">
            Submit Review
          </button>
        </form>
      </div>

      {/* Related Products */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Related Products</h2>
        <div className="flex space-x-4 mt-4">
          {productData.slice(0, 4).map((relatedProduct) => (
            <div key={relatedProduct.id} className="w-1/4">
              <img
                src={relatedProduct.image}
                alt={relatedProduct.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-md text-gray-800 mt-2">{relatedProduct.name}</h3>
              <p className="text-sm text-gray-600">Kes {relatedProduct.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ProductDetailPage;
