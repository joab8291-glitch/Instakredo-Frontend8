import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", !isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        zIndex: 9999,
        background: isDark ? "#d4af37" : "#121810",
        color: isDark ? "#0a0f0c" : "#ffffff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "40px",
        fontWeight: 700,
        fontSize: "14px",
        cursor: "pointer",
        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
      }}
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};