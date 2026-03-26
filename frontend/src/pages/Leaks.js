import data from "../data/leaks.json";

export default function Leaks() {
  return (
    <div className="max-w-5xl mx-auto pt-32 px-4 space-y-6">

      <h1 className="text-2xl font-semibold text-black">
        Leaked Password Insights
      </h1>

      <p className="text-gray-600 text-sm">
        Frequently exposed passwords in breaches
      </p>

      <div className="space-y-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm"
          >
            <div className="flex justify-between">

              <div>
                <h2 className="text-lg font-medium text-black">
                  {item.password}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Weak / commonly used password
                </p>
              </div>

              <div className="text-right">
                <p className="text-xl font-semibold text-black">
                  {(item.count / 1000000).toFixed(1)}M
                </p>
                <p className="text-xs text-gray-500">
                  exposures
                </p>
              </div>

            </div>

            <div className="mt-4 flex gap-6 text-sm text-gray-500">
              <p>Length: {item.password.length}</p>
              <p>Type: simple</p>
              <p className="text-red-500">High Risk</p>
            </div>
          </div>
        ))}
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