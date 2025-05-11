
import { useState, useEffect, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials: string;
}

const Team = () => {
  const [team] = useState<TeamMember[]>([
    {
      id: 1,
      name: "The STATERA Team",
      role: "Web Developers",
      bio: "We understand the challenges faced by individuals, small businesses, and creators—especially those in underrepresented regions. Our goal is to provide tools and websites that are simple to manage, effective in purpose, and accessible to anyone who needs them.",
      initials: "ST"
    }
  ]);

  const [faqs] = useState([
    {
      id: 1,
      question: "What are static websites?",
      answer: "Static websites are built from fixed files (HTML, CSS, images). They load fast and don't rely on databases or server scripts. They're perfect for portfolios, landing pages, artist profiles, small business sites, event pages, and personal blogs. No login panels. No plugins to update. No hidden complexity."
    },
    {
      id: 2,
      question: "Will a static website be good enough for me and my brand?",
      answer: "Definitely. Unless your business relies on user accounts, payments, or real-time updates—static websites will meet (and exceed) your needs. They're faster, more secure, and cheaper to run."
    },
    {
      id: 3,
      question: "What can dynamic websites do that static websites can't?",
      answer: "Dynamic sites generate content on-the-fly—good for things like dashboards, social feeds, or live user data. But for most people, the line is thin. If your site is mostly content—text, images, media, forms—a static site is usually better. And if you do need dynamic features later, we can integrate smart solutions without switching platforms."
    },
    {
      id: 4,
      question: "I want an e-commerce website (an online shop). Can it be built with static websites?",
      answer: "Yes—but with smart integrations. You can absolutely run a lightweight online store on a static website using tools like Snipcart, Shopify Buy Buttons, Stripe Checkout, Gumroad / Payhip, or Instamojo (great for Indian sellers). These services handle payments, shopping carts, and security, while your site stays fast, simple, and static."
    },
    {
      id: 5,
      question: "Is this more cost-effective than a dynamic website?",
      answer: "Yes. Here's why: No servers to maintain—static sites can be hosted for free or nearly free. No plugins or updates to manage—that means less time spent fixing things or hiring developers. No complex backend—which means faster build time and lower cost. Secure by default—fewer moving parts = fewer vulnerabilities = fewer headaches. You pay less, worry less, and get more stability."
    }
  ]);

  const teamRefs = useRef<(HTMLDivElement | null)[]>([]);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    teamRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    faqRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      teamRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      faqRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-statera-light max-w-3xl mx-auto">
            We're fully remote, deeply local, and always online.
          </p>
        </div>
        <div className="grid md:grid-cols-1 gap-8 mb-24">
          {team.map((member, index) => (
            <div
              key={member.id}
              ref={el => teamRefs.current[index] = el}
              className="slide-up"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="text-center h-full border-none shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="flex flex-col items-center pt-6">
                  <Avatar className="h-24 w-24 border-2 border-statera-accent/20">
                    {member.image ? (
                      <AvatarImage src={member.image} alt={member.name} />
                    ) : null}
                    <AvatarFallback className="text-xl bg-secondary text-statera">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-medium mt-4">{member.name}</h3>
                  <p className="text-statera-accent font-medium text-sm">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-statera-light text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-statera-light max-w-3xl mx-auto">
              Common questions about our services and static websites
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                ref={el => faqRefs.current[index] = el}
                className="slide-up"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-statera-light">{faq.answer}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
