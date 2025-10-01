import { Globe, Smartphone, Server, Image, FileText, Award, Home, Building, Box, Layers, Cog, Zap } from 'lucide-react';

interface ServicesProps {
  isDark: boolean;
}

const services = [
  {
    icon: Globe,
    title: 'تطوير المواقع',
    description: 'مواقع ويب حديثة وسريعة بتصاميم احترافية وتجربة مستخدم متميزة',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'تطبيقات الجوال',
    description: 'تطبيقات iOS و Android بأداء عالي وواجهات سلسة',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Server,
    title: 'الاستضافة والخوادم',
    description: 'حلول استضافة آمنة وسريعة مع دعم فني على مدار الساعة',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Image,
    title: 'التصميم الجرافيكي',
    description: 'تصاميم إبداعية تعكس هوية علامتك التجارية بشكل مميز',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Award,
    title: 'الشعارات والهوية',
    description: 'شعارات فريدة وهوية بصرية متكاملة لعلامتك التجارية',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: FileText,
    title: 'التصاميم المطبوعة',
    description: 'دعوات، بروشورات، كروت عمل، ومواد تسويقية احترافية',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Home,
    title: 'التصميم الداخلي',
    description: 'تصاميم داخلية عصرية تجمع بين الجمال والوظيفية',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Building,
    title: 'التصميم المعماري',
    description: 'تصاميم معمارية مبتكرة للمباني السكنية والتجارية',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Box,
    title: 'التصميم ثلاثي الأبعاد',
    description: 'نماذج 3D واقعية للمنتجات والمساحات',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Layers,
    title: 'الإظهار المعماري',
    description: 'عروض مرئية احترافية للمشاريع المعمارية',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Cog,
    title: 'إدارة المشاريع',
    description: 'متابعة وتنفيذ المشاريع بدقة واحترافية عالية',
    color: 'from-gray-500 to-slate-500',
  },
  {
    icon: Zap,
    title: 'الحلول المتكاملة',
    description: 'باقات شاملة تجمع كل ما تحتاجه لمشروعك',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function Services({ isDark }: ServicesProps) {
  return (
    <section className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${isDark ? 'opacity-10' : 'opacity-5'}`} style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">خدماتنا</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            كل ما تحتاجه في مكان واحد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl ${isDark ? 'bg-gray-900/50 backdrop-blur-xl border border-gray-800' : 'bg-gray-50/80 backdrop-blur-xl border border-gray-200'} hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>

                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://wa.me/967773849974" target="_blank" rel="noopener noreferrer" className="inline-block group px-10 py-5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-yellow-500/50 hover:scale-110 transition-all duration-300">
            <span className="flex items-center gap-3">
              اطلب خدمتك الآن
              <Zap className="w-6 h-6 group-hover:scale-125 transition-transform" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}