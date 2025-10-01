import { useState, useEffect } from 'react';
import { Moon, Sun, Code, Palette, Cuboid as Cube, Briefcase, Mail, MessageCircle, Phone, ChevronRight, Check, Star, ArrowUp } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Offers from './components/Offers';
import WhyUs from './components/WhyUs';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-950 dark:via-black dark:to-gray-950 transition-colors duration-500">
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />

        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Services isDark={isDark} />
        <Portfolio isDark={isDark} />
        <Offers isDark={isDark} />
        <WhyUs isDark={isDark} />
        <Stats isDark={isDark} />
        <Testimonials isDark={isDark} />
        <Contact isDark={isDark} />

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-2xl hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-300 group"
            aria-label="العودة للأعلى"
          >
            <ArrowUp className="w-6 h-6 text-black group-hover:animate-bounce" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
