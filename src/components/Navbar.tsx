
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type NavItem = {
  id: string;
  label: string;
  active: boolean;
};

interface NavbarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [navItems] = useState<NavItem[]>([
    { id: 'home', label: 'Home', active: true },
    { id: 'about', label: 'About', active: false },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12 flex items-center justify-between",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="flex items-center">
        <a href="#" className="text-2xl md:text-3xl font-bold font-display text-statera">
          STATERA
        </a>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onTabChange(item.id)}
                className={cn(
                  "text-base font-medium relative overflow-hidden group transition-colors",
                  activeTab === item.id 
                    ? "text-statera" 
                    : "text-statera-light hover:text-statera"
                )}
              >
                {item.label}
                <span 
                  className={cn(
                    "block h-0.5 bg-statera-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300",
                    activeTab === item.id ? "translate-x-0" : ""
                  )}
                ></span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:hidden">
        <button 
          className="text-statera p-1"
          onClick={() => {
            const newTab = activeTab === 'home' ? 'about' : 'home';
            onTabChange(newTab);
          }}
        >
          {activeTab === 'home' ? 'About' : 'Home'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
