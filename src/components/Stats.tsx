import { useEffect, useState, useRef } from 'react';
import { Briefcase, Users, Award, Smile } from 'lucide-react';

interface StatsProps {
  isDark: boolean;
}

const stats = [
  {
    icon: Briefcase,
    value: 200,
    suffix: '+',
    label: 'مشروع ناجح',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    value: 100,
    suffix: '+',
    label: 'عميل سعيد',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    value: 50,
    suffix: '+',
    label: 'تصميم مبتكر',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    icon: Smile,
    value: 99,
    suffix: '%',
    label: 'رضا العملاء',
    color: 'from-pink-500 to-rose-500',
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-6xl md:text-7xl font-bold">
      {count}
      {suffix}
    </div>
  );
}

export default function Stats({ isDark }: StatsProps) {
  return (
    <section className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-950 via-black to-gray-950' : 'bg-gradient-to-br from-yellow-50 via-white to-gray-50'}`}>
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-500/20 animate-pulse"
            style={{
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
              filter: 'blur(60px)',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">إنجازاتنا</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            أرقام تتحدث عن نفسها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl ${isDark ? 'bg-gray-900/50 backdrop-blur-xl border border-gray-800' : 'bg-white/80 backdrop-blur-xl border border-gray-200'} hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center overflow-hidden`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>

                <div className={`mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>

                <p className={`text-xl font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {stat.label}
                </p>
              </div>

              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/50 rounded-3xl transition-all duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}