// src/lib/api.js
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export async function runIDP({
  start_seq,
  target,
  tolerance,
  scalingMethod,
  bufferSize,
  penalty,
}) {
  const res = await fetch(`${API_BASE}/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ start_seq, target, tolerance, scalingMethod, bufferSize, penalty }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `HTTP ${res.status}`);
  }
  return await res.json(); // { distance, nu, best_sequence, fitness }
}
