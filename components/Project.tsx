import Image from 'next/image';
import { ArrowRight } from 'react-feather';

const Projects = () => {
  const projects = [
    {
      bgColor: 'bg-[#f8f5fb]',
      tagColor: 'text-[#a07cc5]',
      tag: 'Web Design',
      title: 'Snowlake Theme',
      text: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.',
      image: '/assets/images/project-1.png',
      imageSize: { width: 650, height: 370 },
      reverse: false
    },
    {
      bgColor: 'bg-[#f1f5fd]',
      tagColor: 'text-[#3f78e0]',
      tag: 'Mobile Design',
      title: 'Budget App',
      text: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.',
      image: '/assets/images/project-2.png',
      imageSize: { width: 600, height: 367 },
      reverse: true
    },
    {
      bgColor: 'bg-[#f5faf7]',
      tagColor: 'text-[#7cb798]',
      tag: 'Web Design',
      title: 'Missio Theme',
      text: 'Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque id ligula felis.',
      image: '/assets/images/project-3.png',
      imageSize: { width: 600, height: 367 },
      reverse: false
    },
    {
      bgColor: 'bg-[#fcf4f6]',
      tagColor: 'text-[#d16b86]',
      tag: 'Mobile Design',
      title: 'Storage App',
      text: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper.',
      image: '/assets/images/project-4.png',
      imageSize: { width: 620, height: 370 },
      reverse: true
    }
  ];

  return (
    <section className="py-20 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Latest Projects</h2>
            <p className="text-gray-600">Check out some of my latest projects with creative ideas.</p>
          </div>
          <a 
            href="#" 
            className="px-6 py-3 border-2 border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
          >
            See All Projects
          </a>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`${project.bgColor} rounded-xl flex flex-col ${
                project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Content */}
              <div className="p-6 md:p-8 md:w-1/2">
                <span className={`${project.tagColor} font-bold text-sm uppercase`}>
                  {project.tag}
                </span>
                <h3 className="text-2xl font-bold my-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.text}</p>
                <a 
                  href="#" 
                  className={`${project.tagColor} font-bold flex items-center gap-2 hover:gap-4 transition-all`}
                >
                  <span>See Project</span>
                  <ArrowRight size={20} />
                </a>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.tag}
                  width={project.imageSize.width}
                  height={project.imageSize.height}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;