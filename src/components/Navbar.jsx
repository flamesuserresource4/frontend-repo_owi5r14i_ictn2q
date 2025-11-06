import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const moss = '#505E4B';
const brass = '#E4B953';

const NavItem = ({ labelEN, labelZH, children }) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-3 py-2 text-[15px] text-white/90 hover:text-white transition">
        <span className="hidden sm:inline">{labelEN}</span>
        <span className="sm:hidden">{labelZH}</span>
        {children ? <ChevronDown className="w-4 h-4" /> : null}
      </button>
      {children && (
        <div className="absolute left-0 mt-2 hidden group-hover:block">
          <div className="rounded-md shadow-lg bg-white/95 backdrop-blur border border-white/40 min-w-[220px] overflow-hidden">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const Dropdown = ({ items }) => (
  <div className="py-2">
    {items.map((it) => (
      <a
        key={it.labelEN}
        href="#"
        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50"
      >
        <div className="font-medium">{it.labelEN}</div>
        <div className="text-gray-500 text-xs">{it.labelZH}</div>
      </a>
    ))}
  </div>
);

export default function Navbar({ lang, setLang }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="backdrop-blur bg-[rgba(80,94,75,0.55)]/70 border-b border-white/10"
        style={{ backgroundColor: 'rgba(80,94,75,0.55)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full" style={{ background: `radial-gradient(circle at 30% 30%, ${brass}, ${moss})` }} />
              <div className="text-white tracking-[0.2em] text-sm sm:text-base">AGARZEN <span className="hidden sm:inline">頻香</span></div>
            </a>

            <nav className="hidden md:flex items-center gap-2">
              <NavItem labelEN="Home" labelZH="主页" />

              <NavItem labelEN="Discover" labelZH="探索">
                <Dropdown
                  items={[
                    { labelEN: 'Collections', labelZH: '系列' },
                    { labelEN: 'Incense Stick', labelZH: '线香' },
                    { labelEN: 'Incense Coil', labelZH: '盘香' },
                    { labelEN: 'Pure Essential Oil', labelZH: '纯精油' },
                    { labelEN: 'Experiences', labelZH: '体验' },
                  ]}
                />
              </NavItem>

              <NavItem labelEN="Our Story" labelZH="品牌">
                <Dropdown
                  items={[
                    { labelEN: 'Story', labelZH: '故事' },
                    { labelEN: 'Mission & Vision', labelZH: '使命愿景' },
                    { labelEN: 'Value', labelZH: '价值观' },
                  ]}
                />
              </NavItem>

              <NavItem labelEN="Community" labelZH="社群" />
            </nav>

            <div className="flex items-center gap-2">
              {searchOpen && (
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'Search' : '搜索'}
                  className="hidden sm:block w-48 px-3 py-1.5 rounded-md bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E4B953]"
                />
              )}
              <button
                onClick={() => setSearchOpen((s) => !s)}
                aria-label="search"
                className="p-2 rounded-md hover:bg-white/10 text-white"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                className="px-3 py-1.5 rounded-md text-white border border-white/20 hover:border-white/40"
              >
                {lang === 'en' ? '中文' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
