import { useEffect, useState } from "react";
export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) setDark(true);
  }, []);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <button
      className="px-4 py-2 rounded-xl border text-sm"
      onClick={() => setDark((v) => !v)}
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
      }
