// frontend/src/lib/api.ts
const API = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5031";

export async function getHealth() {
  const res = await fetch(`${API}/health`);
  if (!res.ok) throw new Error("Health check failed");
  return res.json();
}

export async function getWeather() {
  const res = await fetch(`${API}/weatherforecast`);
  if (!res.ok) throw new Error("Weather API failed");
  return res.json();
}
