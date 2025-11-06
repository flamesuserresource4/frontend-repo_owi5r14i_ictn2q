import { motion } from 'framer-motion';

const products = [
  {
    key: 'stick',
    titleEN: 'Incense Stick',
    titleZH: '线香',
    descEN: 'Calm & Centered',
    descZH: '宁静专注',
    img: 'https://images.unsplash.com/photo-1600345288878-862f2e1d734d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    key: 'coil',
    titleEN: 'Incense Coil',
    titleZH: '盘香',
    descEN: 'Long-lasting Serenity',
    descZH: '持久安宁',
    img: 'https://images.unsplash.com/photo-1611367462385-712f963dd14d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    key: 'oil',
    titleEN: 'Pure Essential Oil',
    titleZH: '纯精油',
    descEN: 'Deep Healing',
    descZH: '深度疗愈',
    img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop',
  },
  {
    key: 'bracelet',
    titleEN: 'Bracelet',
    titleZH: '能量手串',
    descEN: 'Energy & Protection',
    descZH: '能量守护',
    img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function ProductHighlights({ lang }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h3 className="text-2xl md:text-3xl font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {lang === 'en' ? 'Our Signature Collections' : '臻选系列'}
          </h3>
          <a href="#" className="text-[#505E4B] hover:underline">
            {lang === 'en' ? 'View All Collections' : '查看全部系列'}
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.a
              key={p.key}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-xl overflow-hidden bg-gray-50 shadow-sm"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={p.img} alt={p.titleEN} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-4">
                <div className="font-medium text-gray-900">
                  {lang === 'en' ? p.titleEN : p.titleZH}
                </div>
                <div className="text-sm text-gray-600">
                  {lang === 'en' ? p.descEN : p.descZH}
                </div>
                <button className="mt-3 inline-flex text-[#505E4B] hover:text-black">
                  {lang === 'en' ? 'Explore' : '探索'}
                </button>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
