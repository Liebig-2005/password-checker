export default function IntelligenceCard({ title, value, sub }) {
  return (
    <div className="p-4 bg-[#121212] border border-neutral-800 rounded-xl">
      <p className="text-xs text-neutral-500">{title}</p>
      <h2 className="text-lg mt-1">{value}</h2>
      {sub && <p className="text-xs text-neutral-600 mt-1">{sub}</p>}
    </div>
  );
}