
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
}

const Services = () => {
  const [services] = useState<Service[]>([
    {
      id: 1,
      title: "Static Websites",
      description: "Fast-loading websites built from fixed files with no database or server scripts needed.",
      features: ["Responsive design", "Fast loading times", "Secure by default", "Modern UI/UX"]
    },
    {
      id: 2,
      title: "Content Strategy",
      description: "We help you organize and present your content in a clear, effective way.",
      features: ["Content organization", "Visual hierarchy", "Clear messaging", "User-friendly navigation"]
    },
    {
      id: 3,
      title: "Smart Integrations",
      description: "Add dynamic features to your static site when needed.",
      features: ["Contact forms", "E-commerce integrations", "Analytics", "Social media feeds"]
    }
  ]);

  const [process] = useState([
    {
      id: 1,
      title: "You tell us what you need",
      description: "Want a portfolio? A landing page? An online presence for your brand? Let's talk."
    },
    {
      id: 2,
      title: "You send us your content",
      description: "We'll help you organize it if needed."
    },
    {
      id: 3,
      title: "We design and build",
      description: "Clean, modern, mobile-ready. Built using tools that load fast and never crash."
    },
    {
      id: 4,
      title: "We deliver and deploy",
      description: "We host it for free or help you use your own domain. You own everything."
    }
  ]);

  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const processRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    serviceRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    processRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      processRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What We Build</h2>
          <p className="text-lg text-statera-light max-w-3xl mx-auto">
            We specialize in something called <strong>static websites</strong>. But don't worry 
            about the terminology—we explain everything clearly as we go. Why static? 
            Because it's simpler, safer, and more cost-effective for most people.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => serviceRefs.current[index] = el}
              className="slide-up"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="h-full border-2 hover:border-statera-accent/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                  <CardDescription className="text-statera-light">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-statera-accent mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="link" 
                    className="p-0 text-statera-accent hover:text-statera-accent/80"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn more
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Process</h2>
          <p className="text-lg text-statera-light max-w-3xl mx-auto">
            We believe in keeping things simple and transparent. Here's how we work:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {process.map((step, index) => (
            <div
              key={step.id}
              ref={el => processRefs.current[index] = el}
              className="slide-up"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-statera-accent/20 text-statera mb-4">
                    <span className="text-lg font-semibold">{step.id}</span>
                  </div>
                  <CardTitle className="text-xl font-display">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-statera-light">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-secondary/30 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">What You Get</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-1">Fast & Secure</h3>
              <p className="text-sm text-statera-light">Mobile-friendly website that loads quickly</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-1">No Recurring Fees</h3>
              <p className="text-sm text-statera-light">No login headaches or hidden costs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-1">Free Hosting</h3>
              <p className="text-sm text-statera-light">GitHub Pages or Netlify setup included</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-1">Full Control</h3>
              <p className="text-sm text-statera-light">You own all your files and content</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-1">Clear Guidance</h3>
              <p className="text-sm text-statera-light">Documentation to help you manage your site</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
