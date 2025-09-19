const Features = () => {
  return (
    <section id = "features" className="relative bg-black text-white px-6 md:px-10 py-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Why Choose Structify?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
          Unlock next-level protein engineering with AI-driven optimization tools. 
          Structify makes it seamless to design, analyze, and refine sequences with precision.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-black bg-opacity-70 border border-white/10 rounded-2xl p-8 hover:border-green-400 transition shadow-md">
          <div className="text-green-400 text-3xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-3">AI-Powered Optimization</h3>
          <p className="text-gray-400">
            Leverage machine learning algorithms to enhance protein sequence stability 
            and functionality with speed and accuracy.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-black bg-opacity-70 border border-white/10 rounded-2xl p-8 hover:border-green-400 transition shadow-md">
          <div className="text-green-400 text-3xl mb-4">🔬</div>
          <h3 className="text-xl font-semibold mb-3">High-Resolution Insights</h3>
          <p className="text-gray-400">
            Get detailed structure predictions and sequence analytics to guide your 
            research decisions with confidence.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-black bg-opacity-70 border border-white/10 rounded-2xl p-8 hover:border-green-400 transition shadow-md">
          <div className="text-green-400 text-3xl mb-4">🌍</div>
          <h3 className="text-xl font-semibold mb-3">Collaborative Platform</h3>
          <p className="text-gray-400">
            Share models, compare results, and accelerate discoveries 
            with team-based workflows built for scientists.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
