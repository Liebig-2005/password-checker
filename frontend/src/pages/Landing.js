import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-32">

      <div className="space-y-6 max-w-2xl">
        <h1 className="text-5xl font-semibold text-black">
          Understand how secure your passwords really are.
        </h1>

        <p className="text-gray-600">
          Analyze strength, detect breaches, and understand real risks.
        </p>

        <div className="flex gap-4">

          {/* FIXED BUTTON */}
          <Link
            to="/checker"
            className="px-6 py-2 bg-black text-white rounded-full text-sm"
          >
            Start Checking
          </Link>

          {/* FIXED BUTTON */}
          <Link
            to="/leaks"
            className="px-6 py-2 border border-gray-300 text-black rounded-full text-sm hover:bg-gray-100"
          >
            View Leaks
          </Link>

        </div>
      </div>

      {/* FOOTER */}
      <div className="pt-20 border-t border-gray-200 text-center text-xs text-gray-400">
        <p>
          Made with <span className="text-red-500">♥</span> · NizaMudeen & Co.
        </p>
      </div>
    </div>
  );
}