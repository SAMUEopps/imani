// components/Testimonials.tsx
import { useState } from 'react';
import Image from 'next/image';
import { testimonialsData } from '@/data/testimonialData';

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTestimonialClick = (index: number) => {
    setSelectedTestimonial(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-semibold mb-4 text-white">Testimonials</h3>

      <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        {testimonialsData.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className="flex-shrink-0 w-full px-2"
            onClick={() => handleTestimonialClick(index)}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg relative cursor-pointer transition-transform hover:scale-105">
              <div className="absolute -top-6 left-4 bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-xl shadow-md">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
              </div>
              <h4 className="text-lg font-medium text-white mb-2">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm line-clamp-4">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedTestimonial !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black/80 transition-opacity"
            onClick={closeModal}
          />
          
          <div className="relative bg-gray-900 rounded-xl p-6 max-w-2xl w-full mx-4 border border-gray-700 shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-xl shadow-md">
                <Image
                  src={testimonialsData[selectedTestimonial].avatar}
                  alt={testimonialsData[selectedTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <svg className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-white">
                {testimonialsData[selectedTestimonial].name}
              </h4>
              <time className="text-gray-400 text-sm block">
                {testimonialsData[selectedTestimonial].date}
              </time>
              <p className="text-gray-300 leading-relaxed">
                {testimonialsData[selectedTestimonial].text}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;