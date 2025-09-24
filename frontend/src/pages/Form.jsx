import { useState } from "react";
import toast from "react-hot-toast";
import NavBar from "../components/NavBar";
import { runIDP } from "../lib/api";

const Form = () => {
  const [target, setTarget] = useState(0);
  const [startSequence, setStartSequence] = useState("");
  const [tolerance, setTolerance] = useState(0);
  const [scalingMethod, setScalingMethod] = useState("exp");
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
      // only sending required params now; extend later if backend supports more
      const data = await runIDP({
        start_seq: startSequence,
        target,
        tolerance,
        scalingMethod,
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
    
    
      
    

  #const handleSubmit = (e) => {
   # e.preventDefault();
    #console.log({ target, startSequence, tolerance, scalingMethod, bufferSize, penalty });
  #};

  
  return (
    <>
    <NavBar />
    <section className="bg-black min-h-screen flex items-center justify-center px-6 py-16">
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-70 border border-white/10 rounded-2xl p-8 shadow-lg shadow-green-500/30 w-full max-w-xl flex flex-col gap-6"
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-extrabold text-white mb-2">
            Protein Sequence Form
          </h1>
          <p className="text-gray-400 text-sm">
            Enter your parameters to optimize your protein design
          </p>
        </div>

        {/* Target */}
        <label htmlFor="target" className="flex flex-col text-white">
          Target Disorder Score
          <input
            id="target"
            type="number"
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
            className="mt-2 px-4 py-3 rounded-xl bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/40 transition"
          />
        </label>

        {/* Start Sequence */}
        <label htmlFor="start_seq" className="flex flex-col text-white">
          Start Sequence
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
                  toast.error("That character is not allowed!")
                  console.log("That character is not allowed!");
                }
              }
            }}
            onChange={(e) => setStartSequence(e.target.value.toUpperCase())}
            placeholder="e.g. ACDEFGHIK"
            className="mt-2 px-4 py-3 rounded-xl bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/40 transition"
          />
        </label>

        {/* Scaling Method */}
        <fieldset className="flex flex-col gap-2 text-white">
          <legend className="mb-1">Scaling Method</legend>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="scaling"
            value="exp"
            checked={scalingMethod === "exp"}
            onChange={() => setScalingMethod("exp")}
            className="accent-green-500 w-5 h-5"
          />
          Exponential Scaling (0.01 – 0.05)
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="scaling"
            value="rg"
            checked={scalingMethod === "rg"}
            onChange={() => setScalingMethod("rg")}
            className="accent-green-500 w-5 h-5"
          />
          Rg Scaling (0.1 – 0.5)
        </label>
      </fieldset>


        {/* Tolerance */}
        <label htmlFor="tolerance" className="flex flex-col text-white">
          Tolerance
          <input
            id="tolerance"
            type="number"
            step="0.01"
            max="0.1"
            value={tolerance}
            onChange={(e) => setTolerance(Number(e.target.value))}
            className="mt-2 px-4 py-3 rounded-xl bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/40 transition"
          />
        </label>

        <div className="flex flex-col gap-3">

          <label htmlFor="buffer_size" className="flex items-center gap-3 text-white">
            Buffer size
            <input
              id="buffer_size"
              type="number"
              value = {bufferSize}
              onChange={(e) => setBufferSize(Number(e.target.value))}
              className="mt-2 px-4 py-3 rounded-xl bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/40 transition"
            />
            
          </label>

          <label htmlFor="esm2_likelihood_penalty" className="flex items-center gap-3 text-white">
            Likelihood Penalty (ESM-2)
            <input
              id="penalty"
              type="number"
              value={penalty}
              onChange={(e) => setPenalty(Number(e.target.value))}
              className="mt-2 px-4 py-3 rounded-xl bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/40 transition"
            />
            
          </label>
            

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-black shadow-lg shadow-green-500/40 transition"
        >
          Submit
        </button>
        {loading && (
  <div className="text-green-400">Running… please wait</div>
)}
{error && (
  <div className="bg-red-100 text-red-700 rounded-xl p-3 mt-2">{error}</div>
)}
{result && (
  <div className="mt-4 rounded-xl border p-4 bg-white text-black">
    <div className="text-sm text-gray-500 mb-1">Best sequence</div>
    <div className="font-mono break-words">{result.best_sequence}</div>
    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
      <div><span className="text-gray-500">ν:</span> {Number(result.nu).toFixed(5)}</div>
      <div><span className="text-gray-500">distance:</span> {Number(result.distance).toFixed(6)}</div>
      <div><span className="text-gray-500">fitness:</span> {Number(result.fitness).toFixed(6)}</div>
    </div>
  </div>
)}

      </form>
      {loading && (
  <div className="text-green-400 mt-4">Running… please wait</div>
)}

{error && (
  <div className="mt-4 bg-red-100 text-red-700 rounded-xl p-3">{error}</div>
)}

{result && (
  <div className="mt-6 rounded-xl border p-4 bg-white text-black">
    <div className="text-sm text-gray-500 mb-1">Best sequence</div>
    <div className="font-mono break-words">{result.best_sequence}</div>

    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
      <div><span className="text-gray-500">ν:</span> {result.nu.toFixed(5)}</div>
      <div><span className="text-gray-500">distance:</span> {result.distance.toFixed(6)}</div>
      <div><span className="text-gray-500">fitness:</span> {result.fitness.toFixed(6)}</div>
    </div>
  </div>
)}

    </section>
    </>
  );
};

export default Form;

