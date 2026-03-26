import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Leaks from "./pages/Leaks";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[600px] h-[600px] bg-white/5 blur-3xl rounded-full top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <Navbar />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/checker" element={<Home />} />
          <Route path="/leaks" element={<Leaks />} />
        </Routes>
      </div>
    </div>
  );
}