
import { cn } from '@/lib/utils';

interface FooterProps {
  isHome: boolean;
}

const Footer = ({ isHome }: FooterProps) => {
  return (
    <footer className={cn(
      "py-12 px-6 md:px-12 bg-statera text-white",
      isHome ? "" : ""
    )}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">STATERA</h3>
            <p className="text-white/80">
              Balance through simplicity. We focus on building clean, fast, and secure websites that put your content first—no clutter, no bloat.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-statera-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/80 hover:text-statera-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-statera-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-white/80">
              <p>Northeast India</p>
              <p className="mt-2">statera.inbox@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} STATERA. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-white/60 text-sm">
              Websites that just work.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
