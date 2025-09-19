const HowItWorks = () => {
  return (
    <section id="howitworks" className="relative bg-black text-white px-6 md:px-10 py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          How Structify Works
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
          Our platform streamlines protein design into a clear, guided workflow.
          From input to optimization, Structify makes complex processes effortless.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Step 1 */}
        <div className="relative bg-black bg-opacity-70 border border-white/10 rounded-2xl p-8 shadow-md hover:border-green-400 transition">
          <div className="absolute -top-5 left-5 bg-green-500 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
            1
          </div>
          <h3 className="text-xl font-semibold mb-3">Upload Your Sequence</h3>
          <p className="text-gray-400">
            Start by submitting your protein sequence or structural data. 
            Our system accepts multiple formats for seamless integration.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative bg-black bg-opacity-70 border border-white/10 rounded-2xl p-8 shadow-md hover:border-green-400 transition">
          <div className="absolute -top-5 left-5 bg-green-500 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
            2
          </div>
          <h3 className="text-xl font-semibold mb-3">AI Optimization</h3>
          <p className="text-gray-400">
            Our algorithms analyze, predict, and suggest modifications to improve 
            stability, binding affinity, and overall performance.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative bg-black bg-opacity-70 border border-white/10 rounded-2xl p-8 shadow-md hover:border-green-400 transition">
          <div className="absolute -top-5 left-5 bg-green-500 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
            3
          </div>
          <h3 className="text-xl font-semibold mb-3">Review & Export</h3>
          <p className="text-gray-400">
            Visualize results, compare options, and export optimized models 
            for experimental testing or collaborative review.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
