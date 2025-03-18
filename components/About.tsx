import Image from 'next/image';

const About = () => {
  const progressItems = [
    { title: 'Web Design', percentage: '100%', color: 'bg-[#c7b1dd]' },
    { title: 'Mobile Design', percentage: '80%', color: 'bg-[#8caeec]' },
    { title: 'Development', percentage: '85%', color: 'bg-[#b0d4c1]' },
    { title: 'SEO', percentage: '90%', color: 'bg-[#e3a6b6]' },
  ];

  const aboutCards = [
    { 
      icon: '/assets/images/icon-1.svg',
      title: 'Web Design',
      text: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.'
    },
    { 
      icon: '/assets/images/icon-2.svg',
      title: 'Mobile Design',
      text: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.'
    },
    { 
      icon: '/assets/images/icon-3.svg',
      title: 'Development',
      text: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.'
    },
    { 
      icon: '/assets/images/icon-4.svg',
      title: 'SEO',
      text: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.'
    },
  ];

  return (
    <section className="py-20" aria-label="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">What I Do?</h2>
            <p className="text-gray-600 mb-8">
              Duis mollis est commodo luctus nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis
              risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus
              magna, vel scelerisque nisl.
            </p>
          </div>

          <div className="space-y-6">
            {progressItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-gray-600">{item.percentage}</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color}`}
                    style={{ width: item.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm transition-all hover:shadow-md">
              <div className="inline-block p-4 mb-4">
                <Image
                  src={card.icon}
                  alt={`${card.title} icon`}
                  width={52}
                  height={52}
                  className="w-13 h-13"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;