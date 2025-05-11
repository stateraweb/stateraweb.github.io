
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Portfolio Website",
      description: "Elegant portfolio for a creative professional showcasing their work.",
      image: "https://raw.githubusercontent.com/stateraweb/stateraweb.github.io/main/assets/images/portfolio.png",
      tags: ["Portfolio", "Clean Design", "Responsive"]
    },
    {
      id: 2,
      title: "Landing Page",
      description: "Conversion-focused landing page for a small business.",
      image: "https://raw.githubusercontent.com/stateraweb/stateraweb.github.io/main/assets/images/landing.png",
      tags: ["Landing Page", "Business", "Call to Action"]
    },
    {
      id: 3,
      title: "Artist Profile",
      description: "Showcase site for an independent artist to highlight their creations.",
      image: "https://raw.githubusercontent.com/stateraweb/stateraweb.github.io/main/assets/images/artist.png",
      tags: ["Artist", "Gallery", "Creative"]
    }
  ]);

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What We've Built</h2>
          <p className="text-lg text-statera-light max-w-3xl mx-auto">
            We're currently curating examples of our work. These showcase the type of websites we create.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="slide-up"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="h-full overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-statera-light text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-secondary text-xs rounded-full text-statera-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
