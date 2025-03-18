import Image from 'next/image';

const PopularTags = () => {
  const tags = [
    { image: '/assets/images/tag1.png', name: 'Travel' },
    { image: '/assets/images/tag2.png', name: 'Culture' },
    { image: '/assets/images/tag3.png', name: 'Lifestyle' },
    { image: '/assets/images/tag4.png', name: 'Fashion' },
    { image: '/assets/images/tag5.png', name: 'Food' },
    { image: '/assets/images/tag6.png', name: 'Space' },
    { image: '/assets/images/tag7.png', name: 'Animal' },
    { image: '/assets/images/tag8.png', name: 'Minimal' },
    { image: '/assets/images/tag9.png', name: 'Interior' },
    { image: '/assets/images/tag10.png', name: 'Plant' },
    { image: '/assets/images/tag11.png', name: 'Nature' },
    { image: '/assets/images/tag12.png', name: 'Business' },
  ];

  return (
    <section className="py-20 bg-oxford-blue" aria-labelledby="tag-label">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2" id="tag-label">
            <span className="text-carolina-blue">Popular Tags</span>
          </h2>
          <p className="text-gray-300">Most searched keywords</p>
        </div>

        {/* Tags Grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fit,minmax(125px,1fr))] gap-4">
          {tags.map((tag, index) => (
            <li key={index}>
              <button className="w-full flex items-center gap-2 p-4 bg-oxford-blue-2 rounded-xl border border-prussian-blue hover:border-transparent hover:shadow-lg hover:bg-gradient-to-br from-carolina-blue to-cyan-400 hover:-translate-y-0.5 transition-all duration-300">
                <Image
                  src={tag.image}
                  alt={tag.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-white font-medium">{tag.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PopularTags;