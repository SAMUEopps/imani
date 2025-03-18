import { Twitter, Facebook, Dribbble, Instagram, Youtube } from 'react-feather';

const Footer = () => {
  const socialIcons = [
    { Icon: Twitter, name: 'Twitter' },
    { Icon: Facebook, name: 'Facebook' },
    { Icon: Dribbble, name: 'Dribbble' },
    { Icon: Instagram, name: 'Instagram' },
    { Icon: Youtube, name: 'Youtube' },
  ];

  return (
    <footer className="bg-raisin-black py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-white mb-4 md:mb-0">
          © {new Date().getFullYear()} codewithsadee. All rights reserved.
        </p>

        <ul className="flex gap-6">
          {socialIcons.map(({ Icon, name }) => (
            <li key={name}>
              <a 
                href="#" 
                className="text-charcoal hover:text-cinnamon-satin transition-colors"
                aria-label={name}
              >
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;