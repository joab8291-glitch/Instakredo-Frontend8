import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", !isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 z-[200] flex items-center gap-2 bg-[#121810] border border-amber-400/20 px-4 py-2 rounded-full text-sm font-semibold text-white hover:border-amber-400/50 transition"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};
