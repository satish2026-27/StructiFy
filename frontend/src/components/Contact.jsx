import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
const Contact = () => {
  return (
    <section id="contact" className="relative bg-black text-white px-6 md:px-10 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Text + Info */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-8">
            Have questions, ideas, or collaboration opportunities? 
            We’d love to hear from you. Reach out and let’s build 
            the future of protein design together.
          </p>

          <div className="space-y-3 text-gray-400">
            <p className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-white" />
              <span className="text-green-400 font-semibold">Address:</span>
              <span>123 Innovation Drive, BioTech City</span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-white" />
              <span className="text-green-400 font-semibold">Email:</span>
              <span>contact@structify.ai</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-green-400 font-semibold">Phone:</span>
              <span>+1 (555) 123-4567</span>
            </p>
          </div>

        </div>

        {/* Right: Contact Form */}
        <div className="bg-black bg-opacity-70 border border-white/10 rounded-2xl p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold shadow-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
