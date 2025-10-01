import { Check, Sparkles } from 'lucide-react';

interface OffersProps {
  isDark: boolean;
}

const offers = [
  {
    title: 'باقة الهوية البصرية',
    price: 'ابتداءً من 500$',
    features: [
      'تصميم شعار احترافي',
      'بطاقات عمل',
      'ورق رسمي',
      'ملف هوية متكامل',
      'تنسيقات متعددة',
      'مراجعات غير محدودة',
    ],
    color: 'from-blue-500 to-cyan-500',
    popular: false,
  },
  {
    title: 'باقة الموقع الكامل',
    price: 'ابتداءً من 1500$',
    features: [
      'تصميم موقع حديث',
      'برمجة متقدمة',
      'لوحة تحكم',
      'استضافة لمدة عام',
      'دعم فني مستمر',
      'تحسين محركات البحث',
      'تطبيق جوال مجاني',
    ],
    color: 'from-yellow-400 to-yellow-600',
    popular: true,
  },
  {
    title: 'باقة الديكور الشامل',
    price: 'ابتداءً من 2000$',
    features: [
      'تصميم معماري',
      'تصميم داخلي',
      'إظهار ثلاثي الأبعاد',
      'رسومات تنفيذية',
      'إشراف على التنفيذ',
      'مراجعات متعددة',
    ],
    color: 'from-purple-500 to-pink-500',
    popular: false,
  },
];

export default function Offers({ isDark }: OffersProps) {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-black via-gray-950 to-yellow-950/20' : 'bg-gradient-to-br from-gray-50 via-yellow-50 to-white'}`} />

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-500/10 animate-pulse"
            style={{
              width: Math.random() * 200 + 50 + 'px',
              height: Math.random() * 200 + 50 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
              filter: 'blur(40px)',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">عروضنا الخاصة</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            باقات متكاملة بأسعار تنافسية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl ${isDark ? 'bg-gray-900/70 backdrop-blur-xl border border-gray-800' : 'bg-white/90 backdrop-blur-xl border border-gray-200'} hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ${
                offer.popular ? 'scale-105 md:scale-110' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full shadow-xl">
                    <Sparkles className="w-4 h-4" />
                    الأكثر طلباً
                  </span>
                </div>
              )}

              <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

              <div className="relative z-10">
                <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {offer.title}
                </h3>

                <div className="mb-6">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${offer.color} bg-clip-text text-transparent`}>
                    {offer.price}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${offer.color} flex items-center justify-center mt-0.5`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/967773849974"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-full font-bold text-lg transition-all duration-300 text-center ${
                    offer.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-xl hover:shadow-yellow-500/50 hover:scale-105'
                      : isDark
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  احجز الآن
                </a>
              </div>

              {offer.popular && (
                <div className={`absolute inset-0 border-2 border-yellow-500 rounded-3xl pointer-events-none`} style={{
                  boxShadow: '0 0 40px rgba(234, 179, 8, 0.4)',
                }} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className={`text-2xl font-bold mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            باقات مخصصة حسب احتياجاتك
          </p>
          <a href="https://wa.me/967773849974" target="_blank" rel="noopener noreferrer" className="inline-block group px-10 py-5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-300">
            تواصل معنا فوراً
          </a>
        </div>
      </div>
    </section>
  );
}