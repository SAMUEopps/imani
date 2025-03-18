import Image from 'next/image';

const Contact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-[#f7eef0] p-8 rounded-xl grid md:grid-cols-2 gap-10">
          {/* Contact Content */}
          <div className="space-y-6">
            <div className="inline-block p-3">
              <Image
                src="/assets/images/icon-5.svg"
                alt="Envelope icon"
                width={44}
                height={44}
                className="w-11 h-11"
              />
            </div>
            <h2 className="text-4xl font-bold mt-4">
              If you like what you see, let's work together.
            </h2>
            <p className="text-gray-600">
              I bring rapid solutions to make the life of my clients easier. Have any questions? 
              Reach out to me from this contact form and I will get back to you shortly.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                className="w-full p-3 bg-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cinnamon-satin"
              />
              <input
                type="email"
                name="email_address"
                placeholder="Email *"
                required
                className="w-full p-3 bg-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cinnamon-satin"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message *"
              required
              className="w-full p-3 bg-white rounded-lg placeholder-gray-400 min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-cinnamon-satin"
            ></textarea>

            <button
              type="submit"
              className="bg-cinnamon-satin text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;