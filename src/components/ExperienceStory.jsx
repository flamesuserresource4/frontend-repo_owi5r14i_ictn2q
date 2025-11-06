import { motion } from 'framer-motion';

const brass = '#E4B953';
const moss = '#505E4B';

export default function ExperienceStory({ lang }) {
  return (
    <section className="relative bg-[#0f140f] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{
          background: 'radial-gradient(800px 300px at 50% 10%, rgba(228,185,83,0.35), transparent 60%), radial-gradient(600px 400px at 80% 60%, rgba(80,94,75,0.4), transparent 60%)'
        }} />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-screen opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {lang === 'en' ? 'A New Way to Heal' : '一种新的疗愈之道'}
          </h3>
          <p className="mt-4 text-white/85">
            {lang === 'en'
              ? 'Experience the fusion of frequency energy and aromatic therapy — crafted to ease stress, restore balance, and awaken your inner calm.'
              : '感受频率能量与芳香疗法的融合——舒缓压力、重获平衡、唤醒内在的宁静。'}
          </p>
          <div className="mt-6">
            <a href="#" className="inline-flex items-center px-6 py-3 rounded-full text-[#121612] font-medium" style={{ background: `linear-gradient(135deg, ${brass}, #d2a840)` }}>
              {lang === 'en' ? 'Experience the Calm' : '体验宁静'}
            </a>
          </div>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="md:pl-10 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0"
        >
          <p className="text-xl md:text-2xl leading-relaxed">
            {lang === 'en'
              ? '“We believe scent is not just aroma, but frequency — a bridge between body, mind, and soul.”'
              : '“我们相信，香气不只是气味，而是频率——连接身、心、灵的桥梁。”'}
          </p>
          <div className="mt-4 text-white/60">AGARZEN 頻香</div>
          <div className="mt-8">
            <a href="#" className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/10">
              {lang === 'en' ? 'Read Our Story' : '阅读品牌故事'}
            </a>
          </div>
        </motion.blockquote>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 relative z-10">
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100/5 border border-white/10 flex items-center justify-center text-white/70">
              {lang === 'en' ? 'Community & Rituals' : '社群与仪式'}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-white/90 hover:underline">
            {lang === 'en' ? 'Join the Agarzen Frequency Circle' : '加入Agarzen频率圈'}
          </a>
        </div>
      </div>

      <footer className="relative z-10 bg-[#121612] text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full" style={{ background: `radial-gradient(circle at 30% 30%, ${brass}, ${moss})` }} />
              <div className="tracking-[0.2em]">AGARZEN 頻香</div>
            </div>
            <p className="text-white/70 mt-4">
              {lang === 'en' ? 'Fragrance is frequency, and frequency is healing.' : '香气是频率，频率是疗愈。'}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="font-medium mb-2">{lang === 'en' ? 'Navigate' : '导航'}</div>
              <ul className="space-y-1 text-white/70">
                <li><a href="#">Home</a></li>
                <li><a href="#">Discover</a></li>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">{lang === 'en' ? 'Contact' : '联系'}</div>
              <ul className="space-y-1 text-white/70">
                <li>WeChat · Instagram · Rednote · WhatsApp</li>
                <li>support@agarzen.com</li>
              </ul>
            </div>
          </div>
          <div className="md:text-right flex md:block items-end">
            <span className="text-white/60 text-sm">© {new Date().getFullYear()} AGARZEN. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
