// pages/index.tsx

import React from 'react';
import Header from '@/components/Header'; // Adjust the path as needed
import CategoriesList from '@/components/CategoriesList';
import HeroSection from '@/components/HeroSection';
import Products from '@/components/Products';
import HeadNavigation from '@/components/HeadNavigation';
import Footer from '@/components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="px-4 py-0"> {/* Padding added here for the whole page */}
      <Header />
      <HeadNavigation />
      <div className="hidden lg:block">
        <CategoriesList />
      </div>
    
      <HeroSection
        title="Welcome to Our Website"
        subtitle="We offer the best products for you."
        imageUrl="https://i.pinimg.com/736x/30/80/d8/3080d8d5f2c890c4f3fde3e9b1645449.jpg" // Replace with your image path
        buttonText="Shop Now"
        buttonLink="/shop" // Replace with your shop link
      /> 
      
      <div className="block lg:hidden">
        <CategoriesList />
      </div>
      <Products/>
      {/*<Shop />*/}
      <Footer />
    </div>
  );
};

export default HomePage;
