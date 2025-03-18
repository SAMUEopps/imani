// pages/index.tsx
"use client"
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import HeadNavigation from '@/components/HeadNavigation';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Projects from '@/components/Project';
import Contact from '@/components/Contact';
import Topics from '@/components/Topics';
import FeaturedPosts from '@/components/FeaturedPosts';
import PopularTags from '@/components/PopularTags';
import Testimonials from '@/components/TestimonialModal';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <HeadNavigation />
      <HeroSection /> 
      <About />
      <Topics />
      <Projects />
      <FeaturedPosts />
      <PopularTags />
      <Contact />
      <Testimonials />

      <Footer />
    </div>
  );
};

export default HomePage;
