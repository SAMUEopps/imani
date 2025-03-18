import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-cultured pt-[140px] pb-[90px]">
      <div className="container mx-auto px-4 grid gap-12 md:grid-cols-2 md:items-center">
        {/* Hero Banner */}
        <div className="relative max-w-max mx-auto">
          <div 
            className="relative"
            style={{
              maskImage: "url('/assets/images/blob.svg')",
              WebkitMaskImage: "url('/assets/images/blob.svg')",
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
            }}
          >
            <Image
              src="/assets/images/heroo.jpeg"
              alt="Julia"
              width={560}
              height={540}
              className="w-full h-auto"
            />
          </div>
          
          {/* Shape */}
          <Image
            src="/assets/images/hero-shape.svg"
            alt="250+ Projects Done"
            width={203}
            height={91}
            className="absolute bottom-[10%] right-[2%] filter drop-shadow-xl"
          />
        </div>

           {/* Hero Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            I'm User Interface Designer & Developer.
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
            Hello! I'm Julia, a freelance user interface designer & developer based in London. 
            I’m very passionate about the work that I do.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#work" 
              className="bg-[#efa110] text-white px-8 py-4 rounded-full hover:bg-[#d20ac3] transition-colors"
            >
              See My Works
            </a>
            <a 
              href="#contact" 
              className="border-2 border-[#d20ac3] text-[#d20ac3] px-8 py-4 rounded-full hover:bg-[#0f0c44] hover:text-white transition-colors"
            >
              Contact Me
            </a>
          </div>
          </div>
        
      </div>
    </section>
  ); }
