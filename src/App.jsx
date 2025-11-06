import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandEssence from './components/BrandEssence';
import ProductHighlights from './components/ProductHighlights';
import ExperienceStory from './components/ExperienceStory';

export default function App() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans" style={{ fontFamily: 'Inter, Noto Serif SC, Source Han Serif, ui-sans-serif, system-ui' }}>
      <Navbar lang={lang} setLang={setLang} />
      <main className="pt-16">
        <Hero lang={lang} />
        <BrandEssence lang={lang} />
        <ProductHighlights lang={lang} />
        <ExperienceStory lang={lang} />
      </main>
    </div>
  );
}
