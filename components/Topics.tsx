import Image from 'next/image';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const Topics = () => {
  const topics = [
    { 
      image: '/assets/images/topic-1.png',
      title: 'Sport',
      articles: '38 Articles'
    },
    { 
      image: '/assets/images/topic-2.png',
      title: 'Travel',
      articles: '63 Articles'
    },
    { 
      image: '/assets/images/topic-3.png',
      title: 'Design',
      articles: '78 Articles'
    },
    { 
      image: '/assets/images/topic-4.png',
      title: 'Movie',
      articles: '125 Articles'
    },
    { 
      image: '/assets/images/topic-5.png',
      title: 'Lifestyle',
      articles: '78 Articles'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="topics" aria-labelledby="topic-label">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Header */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4" id="topic-label">Hot topics</h2>
              <p className="text-gray-600">
                Don't miss out on the latest news about Travel tips, Hotels review, Food guide...
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button 
                className="w-8 h-8 rounded-full bg-prussian-blue text-white flex items-center justify-center hover:bg-gradient-1 transition-colors"
                aria-label="Previous"
              >
                <IoArrowBack size={18} />
              </button>
              <button 
                className="w-8 h-8 rounded-full bg-prussian-blue text-white flex items-center justify-center hover:bg-gradient-1 transition-colors"
                aria-label="Next"
              >
                <IoArrowForward size={18} />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-5 w-max">
              {topics.map((topic, index) => (
                <article key={index} className="min-w-[300px]">
                  <a href="#" className="block group relative rounded-xl overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        src={topic.image}
                        alt={topic.title}
                        width={507}
                        height={618}
                        className="object-cover w-full h-full"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1 transition-colors group-hover:text-carolina-blue">
                        {topic.title}
                      </h3>
                      <p className="text-sm">{topic.articles}</p>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;