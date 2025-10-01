import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface PortfolioProps {
  isDark: boolean;
}

const categories = ['الكل', 'تصميم', 'برمجة', 'ديكور'];

const portfolioItems = [
  {
    id: 1,
    title: 'موقع تجارة إلكترونية',
    category: 'برمجة',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'منصة تسوق متكاملة بتصميم عصري',
  },
  {
    id: 2,
    title: 'هوية بصرية لشركة تقنية',
    category: 'تصميم',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'شعار وهوية متكاملة',
  },
  {
    id: 3,
    title: 'تصميم مكتب حديث',
    category: 'ديكور',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'تصميم داخلي عصري للمكاتب',
  },
  {
    id: 4,
    title: 'تطبيق جوال للتوصيل',
    category: 'برمجة',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'تطبيق iOS و Android',
  },
  {
    id: 5,
    title: 'بوستر إعلاني',
    category: 'تصميم',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'تصميم إعلاني إبداعي',
  },
  {
    id: 6,
    title: 'فيلا سكنية فاخرة',
    category: 'ديكور',
    image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'تصميم معماري وديكور داخلي',
  },
  {
    id: 7,
    title: 'منصة تعليمية',
    category: 'برمجة',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'نظام تعليم إلكتروني متكامل',
  },
  {
    id: 8,
    title: 'تصميم دعوات زفاف',
    category: 'تصميم',
    image: 'https://images.pexels.com/photos/1702341/pexels-photo-1702341.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'دعوات فاخرة مخصصة',
  },
  {
    id: 9,
    title: 'مطعم عصري',
    category: 'ديكور',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'تصميم داخلي لمطعم فاخر',
  },
];

export default function Portfolio({ isDark }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === 'الكل'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">أعمالنا</span>
          </h2>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            شاهد نماذج من إبداعاتنا
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-xl shadow-yellow-500/30 scale-105'
                    : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}
              onClick={() => setSelectedItem(item)}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-12 h-12 text-yellow-400" />
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block px-4 py-1 mb-3 text-sm font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full">
                  {item.category}
                </span>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className={`text-3xl font-bold ${isDark ? 'text-yellow-400' : 'text-yellow-600'} italic`}>
            "من الفكرة إلى التنفيذ... نحن شريكك"
          </p>
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className={`relative max-w-4xl w-full rounded-3xl overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
            style={{
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(250, 204, 21, 0.3)',
            }}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors duration-300"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-96 object-cover"
            />

            <div className="p-8">
              <span className="inline-block px-4 py-1 mb-4 text-sm font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full">
                {selectedItem.category}
              </span>
              <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {selectedItem.title}
              </h3>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}