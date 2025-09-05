import { useEffect, useState } from "react";
import { getHealth, getWeather } from "./lib/api";

export default function App() {
  const [health, setHealth] = useState("loading...");
  const [weather, setWeather] = useState<any[]>([]);

  useEffect(() => {
    getHealth()
      .then((j) => setHealth(`✅ ${j.status} @ ${j.time}`))
      .catch((e) => setHealth(`❌ ${e.message}`));
  }, []);

  const loadWeather = () => {
    getWeather()
      .then((list) => setWeather(list))
      .catch((e) => alert("Error: " + e.message));
  };

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>SkillLink Frontend</h1>
      <p>Health: {health}</p>
      <button onClick={loadWeather}>Load Weather</button>
      {weather.length > 0 && (
        <ul>
          {weather.map((w, i) => (
            <li key={i}>
              {w.date}: {w.temperatureC}°C ({w.summary})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
