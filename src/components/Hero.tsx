import { ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-white to-yellow-50'}`}>
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${isDark ? 'bg-yellow-500' : 'bg-yellow-600'} animate-pulse`}
              style={{
                width: Math.random() * 300 + 50 + 'px',
                height: Math.random() * 300 + 50 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 3 + 's',
                animationDuration: Math.random() * 4 + 3 + 's',
                filter: 'blur(60px)',
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke={isDark ? 'rgba(250, 204, 21, 0.1)' : 'rgba(250, 204, 21, 0.2)'}
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img
            src="https://i.ibb.co/vCYdXf9q/13718601-5336557.png"
            alt="YZ ART Logo"
            className="h-32 md:h-48 w-auto animate-float drop-shadow-2xl"
            style={{
              filter: isDark ? 'drop-shadow(0 0 30px rgba(250, 204, 21, 0.6))' : 'drop-shadow(0 0 20px rgba(250, 204, 21, 0.4))'
            }}
          />
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
            YZ ART
          </span>
        </h1>

        <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
          حيث يلتقي الإبداع مع التقنية
        </h2>

        <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          من التصميم إلى البرمجة والديكور، نقدم لك كل ما تحتاجه لإنجاح فكرتك
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#about" className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              ابدأ الآن
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Sparkles className="absolute top-1 right-1 w-5 h-5 text-white opacity-0 group-hover:opacity-100 animate-ping" />
          </a>

          <a href="#services" className={`group px-10 py-5 border-2 ${isDark ? 'border-yellow-500 text-yellow-400 hover:bg-yellow-500/10' : 'border-yellow-600 text-yellow-600 hover:bg-yellow-600/10'} font-bold text-xl rounded-full shadow-xl hover:shadow-yellow-500/30 hover:scale-105 transition-all duration-300`}>
            <span className="flex items-center gap-3">
              استكشف خدماتنا
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 ${isDark ? 'border-yellow-500' : 'border-yellow-600'} rounded-full flex justify-center p-2`}>
          <div className={`w-1.5 h-3 ${isDark ? 'bg-yellow-500' : 'bg-yellow-600'} rounded-full animate-pulse`} />
        </div>
      </div>
    </section>
  );
}