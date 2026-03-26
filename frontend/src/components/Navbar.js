import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const link = (path) =>
    `px-4 py-1 rounded-full text-sm transition ${
      location.pathname === path
        ? "bg-black text-white"
        : "text-gray-600 hover:text-black"
    }`;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 px-6 py-2 rounded-full
        bg-white/80 backdrop-blur border border-gray-200 shadow-sm">

        <Link to="/" className="text-sm font-medium text-black">
          Security
        </Link>

        <Link to="/checker" className={link("/checker")}>
          Checker
        </Link>

        <Link to="/leaks" className={link("/leaks")}>
          Leaks
        </Link>
      </div>
    </div>
  );
}