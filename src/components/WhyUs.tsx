import { Award, Users, Zap, DollarSign, Clock, Shield } from 'lucide-react';

interface WhyUsProps {
  isDark: boolean;
}

const reasons = [
  {
    icon: Award,
    title: 'خبرة واسعة',
    description: 'سنوات من الخبرة في مختلف المجالات الإبداعية والتقنية',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    icon: Users,
    title: 'فريق متعدد التخصصات',
    description: 'نخبة من المحترفين في التصميم والبرمجة والديكور',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'جودة عالية',
    description: 'نلتزم بأعلى معايير الجودة في كل مشروع',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: DollarSign,
    title: 'أسعار تنافسية',
    description: 'أفضل قيمة مقابل المال مع باقات مرنة',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Clock,
    title: 'تسليم سريع',
    description: 'نلتزم بالمواعيد ونسلم مشاريعك في الوقت المحدد',
    color: 'from-orange-400 to-red-500',
  },
  {
    icon: Shield,
    title: 'دعم مستمر',
    description: 'دعم فني على مدار الساعة بعد التسليم',
    color: 'from-indigo-400 to-violet-500',
  },
];

export default function WhyUs({ isDark }: WhyUsProps) {
  return (
    <section className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className={`absolute inset-0 ${isDark ? 'opacity-5' : 'opacity-10'}`} style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23fbbf24' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            لماذا تختار <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">YZ ART</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            نتميز بما يجعلنا الخيار الأفضل لمشروعك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'} hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 mx-auto`}>
                  <reason.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className={`text-2xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {reason.title}
                </h3>

                <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {reason.description}
                </p>
              </div>

              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}