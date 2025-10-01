import { useState } from 'react';
import { Mail, MessageCircle, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-950 via-black to-gray-950' : 'bg-gradient-to-br from-gray-50 via-white to-yellow-50'}`}>
      <div className={`absolute inset-0 opacity-5 ${isDark ? '' : 'opacity-10'}`} style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">تواصل معنا</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            نحن هنا لتحويل أفكارك إلى واقع
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className={`p-8 rounded-3xl ${isDark ? 'bg-gray-900/50 backdrop-blur-xl border border-gray-800' : 'bg-white/80 backdrop-blur-xl border border-gray-200'} shadow-2xl`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    الاسم
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-6 py-4 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border-2 focus:border-yellow-500 focus:outline-none transition-colors duration-300`}
                    placeholder="أدخل اسمك"
                  />
                </div>

                <div>
                  <label className={`block text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-6 py-4 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border-2 focus:border-yellow-500 focus:outline-none transition-colors duration-300`}
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label className={`block text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    الرسالة
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-6 py-4 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border-2 focus:border-yellow-500 focus:outline-none transition-colors duration-300 resize-none`}
                    placeholder="اكتب رسالتك هنا"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full py-5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  إرسال الرسالة
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`p-8 rounded-3xl ${isDark ? 'bg-gray-900/50 backdrop-blur-xl border border-gray-800' : 'bg-white/80 backdrop-blur-xl border border-gray-200'} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group`}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    البريد الإلكتروني
                  </h3>
                  <a
                    href="mailto:سيتم_توفيره"
                    className={`text-lg ${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'} transition-colors duration-300`}
                  >
                    سيتم توفير البريد الإلكتروني
                  </a>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-3xl ${isDark ? 'bg-gray-900/50 backdrop-blur-xl border border-gray-800' : 'bg-white/80 backdrop-blur-xl border border-gray-200'} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group`}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    واتساب
                  </h3>
                  <a
                    href="https://wa.me/967773849974"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg ${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'} transition-colors duration-300`}
                  >
                    +967 773 849 974
                  </a>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-3xl ${isDark ? 'bg-gray-900/50 backdrop-blur-xl border border-gray-800' : 'bg-white/80 backdrop-blur-xl border border-gray-200'} shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group`}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    الهاتف
                  </h3>
                  <a
                    href="tel:+967773849974"
                    className={`text-lg ${isDark ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'} transition-colors duration-300`}
                  >
                    +967 773 849 974
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <footer className={`mt-24 pt-12 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="https://i.ibb.co/vCYdXf9q/13718601-5336557.png"
                alt="YZ ART"
                className="h-12 w-auto"
              />
              <span className={`text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent`}>
                YZ ART
              </span>
            </div>

            <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 YZ ART. جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}