
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  isHome: boolean;
}

const Hero = ({ isHome }: HeroProps) => {
  return (
    <section className={cn(
      "min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 pt-24",
      isHome ? "text-center" : "text-left max-w-5xl mx-auto"
    )}>
      {isHome ? (
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            We build <span className="relative">
              websites
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-statera-accent"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-statera-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Need a website for yourself, your business, or your project?<br />
            We make modern, fast-loading, beautiful websites that just work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-statera hover:bg-statera-light text-white rounded-md"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in touch
            </Button>
            <Button 
              variant="outline"
              className="border-statera text-statera hover:bg-statera/5"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our services
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              About <span className="relative">
                STATERA
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-statera-accent"></span>
              </span>
            </h1>
            <div className="content">
              <p className="text-lg text-statera-light mb-4">
                We are a small team of developers from Northeast India. Our background is diverse—ranging 
                from design and code to music and media—but we're united by one core idea: <strong>the internet 
                doesn't have to be complicated.</strong>
              </p>
              <p className="text-lg text-statera-light mb-4">
                We build websites that prioritize clarity, speed, and usability. We don't chase trends 
                or overload our work with features you don't need. Instead, we focus on doing a few 
                things really well—clean design, functional layout, and long-term reliability.
              </p>
              <p className="text-lg text-statera-light">
                Our name, from the Latin word for "balance," reflects our approach: 
                <strong> balance through simplicity.</strong>
              </p>
            </div>
          </div>
          <div className="bg-secondary rounded-lg p-8 animate-slide-in delay-300">
            <h2 className="text-2xl font-display font-semibold mb-4">Our Approach</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="h-6 w-6 mr-2 rounded-full bg-statera-accent flex items-center justify-center text-white flex-shrink-0">1</span>
                <span className="text-statera-light">We communicate like humans, not developers</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 mr-2 rounded-full bg-statera-accent flex items-center justify-center text-white flex-shrink-0">2</span>
                <span className="text-statera-light">We build only what's needed, no bloat</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 mr-2 rounded-full bg-statera-accent flex items-center justify-center text-white flex-shrink-0">3</span>
                <span className="text-statera-light">You get full ownership of your website</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 mr-2 rounded-full bg-statera-accent flex items-center justify-center text-white flex-shrink-0">4</span>
                <span className="text-statera-light">We focus on clarity, speed, and usability</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
