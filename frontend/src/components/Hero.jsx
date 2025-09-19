import ModelViewer from "./ModelViewer";
import {Link} from "react-router"

const Hero = () => {
  return (
    <section id = "hero" className="relative min-h-screen bg-black text-white px-6 md:px-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
      {/* Left: Text + Buttons */}
      <div className="flex-1 bg-black lg:bg-transparent relative z-10 p-4 sm:p-6 rounded-lg lg:rounded-none">
        {/* Optional semi-transparent background on small screens */}
        <div className="bg-black bg-opacity-70 lg:bg-opacity-0 p-4 rounded-lg lg:rounded-none">
            <h5 className="inline-block bg-black text-white text-sm md:text-sm font-semibold tracking-wide px-5 py-2 mb-8 rounded-2xl border border-white/20 shadow-sm">
            ✨ AI-Powered Protein Tuning
            </h5>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Design Smarter Proteins
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mb-8">
            Structify leverages cutting-edge algorithms and machine learning to revolutionize protein sequence optimization. Accelerate your research with unprecedented accuracy and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to ="/form" className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-2xl font-semibold shadow-lg transition">
              Get Started
            </Link>
            <button className="px-6 py-3 border border-gray-400 hover:border-green-400 rounded-2xl font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Right / Top: 3D Model */}
      <div className="flex-1 w-full max-w-4xl lg:max-w-none">
        <div className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]">
          <ModelViewer />
        </div>
      </div>
    </section>
  );
};

export default Hero;
