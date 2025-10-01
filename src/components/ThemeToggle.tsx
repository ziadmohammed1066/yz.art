import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export default function ThemeToggle({ isDark, setIsDark }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 left-6 z-50 p-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-2xl hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-300 group"
      aria-label="تبديل الوضع"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-black group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-6 h-6 text-black group-hover:-rotate-180 transition-transform duration-500" />
      )}
    </button>
  );
}