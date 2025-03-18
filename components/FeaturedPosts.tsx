import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

const FeaturedPosts = () => {
  const posts = [
    {
      image: '/assets/images/featured-1.png',
      tags: ['#Travel', '#Lifestyle'],
      title: 'Self-observation is the first step of inner unfolding',
      author: {
        name: 'Joseph',
        avatar: '/assets/images/author-1.png',
        date: '25 Nov 2022'
      },
      readTime: '3 mins read'
    },
    // Add other post objects here...
  ];

  return (
    <section className="py-20 bg-gray-50 relative" id="featured">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-cinnamon-satin">Editor's picked</span>
          </h2>
          <p className="text-gray-600">Featured and highly rated articles</p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl p-4 shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Post Image */}
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Post Content */}
              <div className="space-y-4">
                {/* Tags and Read Time */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <a 
                        key={tagIndex}
                        href="#"
                        className="text-sm text-cinnamon-satin hover:text-opacity-80 transition-colors"
                      >
                        {tag}
                      </a>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                   {/*} <TimeOutline height="16px" width="16px" />*/}
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                </div>

                {/* Post Title */}
                <h3 className="text-xl font-semibold">
                  <a href="#" className="hover:text-cinnamon-satin transition-colors">
                    {post.title}
                  </a>
                </h3>

                {/* Author Info */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{post.author.name}</p>
                      <p className="text-sm text-gray-500">{post.author.date}</p>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="relative text-cinnamon-satin hover:text-opacity-80 transition-colors"
                  >
                    <span className="z-10 relative">Read more</span>
                    <span className="absolute -top-3 -left-4 w-12 h-12 bg-oxford-blue-2 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
          >
            <span>Show More Posts</span>
            <IoArrowForward height="20px" width="20px" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;