import { motion } from 'framer-motion';

const brass = '#E4B953';

export default function BrandEssence({ lang }) {
  return (
    <section className="relative py-20 bg-white">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0e120e] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-[var(--brass)]" style={{ borderColor: brass }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#121612] font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {lang === 'en' ? 'Beyond Fragrance · It\'s Frequency Therapy' : '超越香气 · 是频率疗愈'}
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {lang === 'en'
              ? 'AGARZEN bridges nature and technology, merging traditional agarwood craftsmanship with quantum frequency innovation. Each scent is a vibration — easing stress, enhancing sleep, and restoring mind-body harmony.'
              : 'AGARZEN 连接自然与科技，将传统沉香工艺与量子频率创新相融合。每一种香气，都是一种振动——舒缓压力、改善睡眠、重建身心平衡。'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
