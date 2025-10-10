import { useState } from "react";
import toast from "react-hot-toast";
import NavBar from "../components/NavBar";
import { runIDP } from "../lib/api";

const Form = () => {
  const [startSequence, setStartSequence] = useState("");
  const [scaling_exponent, setScalingExponent] = useState(true);
  const [target_scaling_exp, setTargetScalingExp] = useState(0.3);
  const [scaling_rg, setScalingRg] = useState(true);
  const [target_rg, setTargetRg] = useState(0.3);
  const [asphericity, setAsphericity] = useState(true);
  const [target_asphericity, setTargetAsphericity] = useState(0.3);
  const [bufferSize, setBufferSize] = useState(2);
  const [penalty, setPenalty] = useState(0);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await runIDP({
        start_seq: startSequence,
        ...(scaling_exponent && { target_scaling_exp }),
        ...(scaling_rg && { target_rg }),
        ...(asphericity && { target_asphericity }),
        bufferSize,
        penalty,
      });
      setResult(data);
      toast.success("Backend run completed!");
    } catch (err) {
      setError(err.message || "Request failed");
      toast.error("Backend request failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <section className="bg-black min-h-screen flex items-start justify-center px-6 py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-black bg-opacity-70 p-10  w-full max-w-5xl rounded-2xl flex flex-col gap-6"
        >
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-3xl font-extrabold text-green-400 mb-2">
              Protein Sequence Optimizer
            </h1>
            <p className="text-gray-400 text-sm">
              Configure your parameters to generate the optimal protein design.
            </p>
          </div>

          {/* Start Sequence */}
          <div className="flex flex-col gap-2">
            <label htmlFor="start_seq" className="text-gray-200 font-medium">
              Start Sequence
            </label>
            <input
              id="start_seq"
              type="text"
              value={startSequence}
              onKeyDown={(e) => {
                const allowedChars = [
                  "A","C","D","E","F","G","H","I","K","L",
                  "M","N","P","Q","R","S","T","V","W","Y"
                ];
                const specialKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Shift", "CapsLock"];
                if (!specialKeys.includes(e.key)) {
                  if (!allowedChars.includes(e.key.toUpperCase())) {
                    e.preventDefault();
                    toast.error("That character is not allowed!");
                  }
                }
              }}
              onChange={(e) => setStartSequence(e.target.value.toUpperCase())}
              placeholder="e.g. ACDEFGHIK"
              className="px-4 py-3 rounded-xl bg-black border border-green-400/30 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/40 transition"
            />
          </div>

          {/* Parameters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {/* Scaling Exponent */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3 text-white">
                  <input
                    type="checkbox"
                    checked={scaling_exponent}
                    onChange={(e) => setScalingExponent(e.target.checked)}
                    className="w-4 h-4 accent-green-500 cursor-pointer"
                  />
                  Enable Scaling Exponent
                </label>
                {scaling_exponent && (
                  <input
                    type="number"
                    value={target_scaling_exp}
                    onChange={(e) => setTargetScalingExp(Number(e.target.value))}
                    className="w-28 px-3 py-2 rounded bg-black text-white border border-green-400/30 focus:outline-none focus:border-green-400"
                    placeholder="0.3"
                  />
                )}
              </div>

              {/* Buffer Size */}
              <label className="flex flex-col text-white">
                Buffer Size
                <input
                  type="number"
                  value={bufferSize}
                  onChange={(e) => setBufferSize(Number(e.target.value))}
                  className="mt-1 px-3 py-2 rounded-xl bg-black border border-green-400/30 text-white focus:outline-none focus:border-green-400"
                />
              </label>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {/* Radius of Gyration */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3 text-white">
                  <input
                    type="checkbox"
                    checked={scaling_rg}
                    onChange={(e) => setScalingRg(e.target.checked)}
                    className="w-4 h-4 accent-green-500 cursor-pointer"
                  />
                  Enable Radius of Gyration
                </label>
                {scaling_rg && (
                  <input
                    type="number"
                    value={target_rg}
                    onChange={(e) => setTargetRg(Number(e.target.value))}
                    className="w-28 px-3 py-2 rounded bg-black text-white border border-green-400/30 focus:outline-none focus:border-green-400"
                    placeholder="0.3"
                  />
                )}
              </div>

              {/* Asphericity */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3 text-white">
                  <input
                    type="checkbox"
                    checked={asphericity}
                    onChange={(e) => setAsphericity(e.target.checked)}
                    className="w-4 h-4 accent-green-500 cursor-pointer"
                  />
                  Enable Asphericity
                </label>
                {asphericity && (
                  <input
                    type="number"
                    value={target_asphericity}
                    onChange={(e) =>
                      setTargetAsphericity(Number(e.target.value))
                    }
                    className="w-28 px-3 py-2 rounded bg-black text-white border border-green-400/30 focus:outline-none focus:border-green-400"
                    placeholder="0.3"
                  />
                )}
              </div>

              {/* Likelihood Penalty */}
              <label className="flex flex-col text-white">
                Likelihood Penalty (ESM-2)
                <input
                  type="number"
                  value={penalty}
                  onChange={(e) => setPenalty(Number(e.target.value))}
                  className="mt-1 px-3 py-2 rounded-xl bg-black border border-green-400/30 text-white focus:outline-none focus:border-green-400"
                />
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-black shadow-lg shadow-green-500/40 transition"
          >
            {loading ? "Running…" : "Submit"}
          </button>

          {/* Results */}
          <div className="mt-8 text-center">
            {error && (
              <div className="mt-4 bg-red-100 text-red-700 rounded-xl p-3">{error}</div>
            )}
            {result && (
              <div className="mt-6 rounded-xl border border-green-400/30 p-5 bg-black text-green-100 max-w-3xl mx-auto">
                <div className="text-sm text-gray-400 mb-2">Best sequence:</div>
                <div className="font-mono text-lg break-words text-green-300">
                  {result.best_sequence}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                  <div><span className="text-gray-400">ν:</span> {result.nu.toFixed(5)}</div>
                  <div><span className="text-gray-400">Distance:</span> {result.distance.toFixed(6)}</div>
                  <div><span className="text-gray-400">Fitness:</span> {result.fitness.toFixed(6)}</div>
                </div>
              </div>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
