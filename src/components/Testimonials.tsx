import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
  isDark: boolean;
}

const testimonials = [
  {
    name: 'أحمد محمد',
    role: 'مدير شركة تقنية',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'تجربة رائعة مع YZ ART، فريق محترف وتسليم في الوقت المحدد. الموقع الذي صمموه لنا تجاوز كل التوقعات.',
  },
  {
    name: 'فاطمة السيد',
    role: 'مالكة متجر إلكتروني',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'التصميم الجرافيكي والهوية البصرية كانت أكثر من رائعة. أبدعوا في كل تفصيلة وكانوا متعاونين جداً.',
  },
  {
    name: 'خالد عبدالله',
    role: 'صاحب مطعم',
    image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'التصميم الداخلي لمطعمي كان فوق الممتاز، خلقوا أجواء فريدة جذبت العملاء. شكراً لفريق YZ ART.',
  },
  {
    name: 'سارة أحمد',
    role: 'مديرة تسويق',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'العمل معهم كان سلس ومريح، فهموا رؤيتنا تماماً ونفذوا كل شيء بإتقان. أنصح الجميع بالتعامل معهم.',
  },
  {
    name: 'محمد علي',
    role: 'مؤسس شركة ناشئة',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'من أفضل القرارات التي اتخذتها هي التعاقد مع YZ ART. حولوا فكرتي إلى واقع مذهل.',
  },
];

export default function Testimonials({ isDark }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${isDark ? 'opacity-5' : 'opacity-10'}`} style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556 15.858 12.14 28 0zm10.142 0L54.627 12.485l-1.414 1.414L42.828 3.515 32.414 13.93 31 12.515 40.828 2.828 39.414 1.414 30 10.828l-9.414-9.414L19.172 0h2.828L32 10zm0 0L54.627 12.485l-1.414 1.414L42.828 3.515 32.414 13.93 31 12.515 40.828 2.828 39.414 1.414 30 10.828l-9.414-9.414L19.172 0h2.828L32 10z' fill='%23fbbf24' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">آراء عملائنا</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            ثقة العملاء هي أكبر إنجاز لنا
          </p>
        </div>

        <div className="relative">
          <div className={`p-12 rounded-3xl ${isDark ? 'bg-gray-900/50 backdrop-blur-xl border border-gray-800' : 'bg-white/80 backdrop-blur-xl border border-gray-200'} shadow-2xl overflow-hidden`}>
            <div className={`absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-10 blur-3xl`} />
            <div className={`absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-10 blur-3xl`} />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500 shadow-xl"
                />

                <div className="text-center md:text-right flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex gap-1 justify-center md:justify-start">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>

              <p className={`text-xl md:text-2xl text-center leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                "{testimonials[currentIndex].text}"
              </p>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className={`absolute top-1/2 -left-6 transform -translate-y-1/2 p-4 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-xl hover:scale-110 transition-all duration-300 border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
            aria-label="السابق"
          >
            <ChevronRight className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
          </button>

          <button
            onClick={handleNext}
            className={`absolute top-1/2 -right-6 transform -translate-y-1/2 p-4 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-xl hover:scale-110 transition-all duration-300 border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
            aria-label="التالي"
          >
            <ChevronLeft className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 bg-gradient-to-r from-yellow-400 to-yellow-600'
                    : isDark
                    ? 'w-2 bg-gray-700 hover:bg-gray-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`عميل ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}