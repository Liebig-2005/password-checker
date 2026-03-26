import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0); // ✅ restored score state

  const [options, setOptions] = useState({
    length: 12,
    upper: true,
    lower: true,
    number: true,
    symbol: false,
  });

  // strength analyzer
  const analyze = (pwd) => {
    let s = 0;
    if (pwd.length >= 12) s++;
    if (/[A-Z]/.test(pwd)) s++;
    if (/[a-z]/.test(pwd)) s++;
    if (/[0-9]/.test(pwd)) s++;
    if (/[^A-Za-z0-9]/.test(pwd)) s++;
    setScore(s);
  };

  // generator
  const generate = () => {
    let chars = "";
    if (options.lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (options.upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.number) chars += "0123456789";
    if (options.symbol) chars += "!@#$%^&*";

    let pwd = "";
    for (let i = 0; i < options.length; i++) {
      pwd += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(pwd);
    analyze(pwd);
  };

  // breach check
  const check = async () => {
    if (!password) return;

    analyze(password);

    try {
      const API_URL = import.meta.env.VITE_API_URL; // ✅ use env variable
      const res = await fetch(`${API_URL}/check-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Error checking password:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pt-32 px-4 space-y-8">
      {/* INPUT */}
      <div className="bg-white border border-gray-200 p-6 rounded-xl space-y-4">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full text-lg outline-none text-black"
        />

        <div className="flex gap-3">
          <button
            onClick={check}
            className="px-6 py-2 bg-black text-white rounded-full text-sm"
          >
            Analyze
          </button>

          <button
            onClick={generate}
            className="px-6 py-2 border border-gray-300 text-black rounded-full text-sm hover:bg-gray-100"
          >
            Generate
          </button>
        </div>
      </div>

      {/* GENERATOR OPTIONS */}
      <div className="flex gap-4 text-sm text-gray-600 flex-wrap">
        <input
          type="number"
          value={options.length}
          onChange={(e) => setOptions({ ...options, length: e.target.value })}
          className="w-16 border rounded px-2 py-1 text-black"
        />

        {["upper", "lower", "number", "symbol"].map((key) => (
          <label key={key} className="flex gap-1 items-center">
            <input
              type="checkbox"
              checked={options[key]}
              onChange={() => setOptions({ ...options, [key]: !options[key] })}
            />
            {key}
          </label>
        ))}
      </div>

      {/* STRENGTH SCORE */}
      <div className="text-gray-700 text-sm">Strength: {score}/5</div>

      {/* RESULT */}
      {result && (
        <div className="text-gray-700 text-sm">
          {result.breached
            ? `Exposed ${result.count} times`
            : "No known breaches"}
        </div>
      )}

      {/* FOOTER */}
      <div className="pt-20 border-t border-gray-200 text-center text-xs text-gray-400">
        <p>
          Made with <span className="text-red-500">♥</span> · NizaMudeen & Co.
        </p>
      </div>
    </div>
  );
}
