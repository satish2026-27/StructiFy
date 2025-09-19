const About = () => {
  return (
    <section id="about" className="relative bg-black text-white px-6 md:px-10 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            About Structify
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6">
            Structify was built to bridge the gap between protein design and
            machine learning. Our mission is to empower researchers, biotech
            innovators, and students with accessible tools for advanced
            sequence optimization.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-8">
            By combining cutting-edge algorithms with intuitive interfaces,
            Structify makes complex protein engineering tasks faster, smarter,
            and more collaborative. We believe the future of biotechnology
            lies in the synergy of science and AI.
          </p>
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-2xl font-semibold shadow-lg transition">
            Learn More
          </button>
        </div>

        {/* Right: Placeholder for image or model */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-green-500/20 to-transparent border border-white/10 rounded-2xl flex items-center justify-center">
          <span className="text-gray-400">[Image / 3D Model Placeholder]</span>
        </div>
      </div>
    </section>
  );
};

export default About;
