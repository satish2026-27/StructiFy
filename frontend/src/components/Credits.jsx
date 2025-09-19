const Credits = () => {
  return (
    <footer id="credits" className="relative bg-black text-white px-6 md:px-10 py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
          Credits & Acknowledgments
        </h2>

        {/* People */}
        <div className="space-y-2 text-gray-300">
          <p>Built with ❤️ by the Structify Team</p>
          <p className="text-gray-400 text-sm">
            Contributors: Jane Doe, John Smith, Alex Lee
          </p>
        </div>

        {/* Tools / Tech */}
        <div className="mt-6 text-gray-400 text-sm">
          <p>
            Powered by <span className="text-green-400">React</span>,{" "}
            <span className="text-green-400">Tailwind CSS</span>, and{" "}
            <span className="text-green-400">AI-driven algorithms</span>.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/10 my-8"></div>

        {/* Footer bottom */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Structify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Credits;
