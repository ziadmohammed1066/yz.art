import { Code, Palette, Box, Briefcase } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const teams = [
  {
    icon: Code,
    title: 'فريق التطوير والبرمجة',
    description: 'مواقع، تطبيقات، استضافة، وحلول تقنية متكاملة',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'فريق التصميم',
    description: 'جرافيكس، شعارات، لوحات، دعوات، وهوية بصرية',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Box,
    title: 'فريق الديكور والثري دي',
    description: 'تصميم داخلي، معماري، وثلاثي الأبعاد',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Briefcase,
    title: 'فريق المشاريع',
    description: 'إدارة وتنفيذ المشاريع بإحترافية عالية',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function About({ isDark }: AboutProps) {
  return (
    <section className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className={`absolute inset-0 opacity-5 ${isDark ? '' : 'opacity-10'}`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            من <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">نحن</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            مؤسسة متكاملة تضم نخبة من المحترفين في مجالات الإبداع والتقنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teams.map((team, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl ${isDark ? 'bg-gray-900/50 backdrop-blur-xl border border-gray-800' : 'bg-white/80 backdrop-blur-xl border border-gray-200'} hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${team.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <team.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className={`text-2xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {team.title}
                </h3>

                <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {team.description}
                </p>
              </div>

              <div className={`absolute inset-0 border-2 border-yellow-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{
                boxShadow: '0 0 30px rgba(234, 179, 8, 0.3)',
              }} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className={`text-3xl font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} italic`}>
            "الإبداع بلا حدود"
          </p>
        </div>
      </div>
    </section>
  );
}