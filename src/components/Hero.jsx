import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const brass = '#E4B953';
const moss = '#505E4B';

export default function Hero({ lang }) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 50% 100%, rgba(228,185,83,0.25), transparent 60%), linear-gradient(180deg, #364034 0%, #121612 80%)',
        }}
      />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xn01YV5mI9-hero-placeholder/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e120e] via-transparent to-transparent opacity-70" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl text-white tracking-tight font-serif"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {lang === 'en' ? 'The Frequency of Calm' : '宁静的频率'}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.0 }}
              className="mt-4 text-white/80 text-lg"
            >
              {lang === 'en' ? 'Where tradition meets frequency healing.' : '頻香之道 · 从此开启'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[#121612] font-medium"
                style={{ background: `linear-gradient(135deg, ${brass}, #d2a840)` }}
              >
                {lang === 'en' ? 'Shop Now' : '立即选购'}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              >
                {lang === 'en' ? 'Discover Collections' : '探索系列'}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
