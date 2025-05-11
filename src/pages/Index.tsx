
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import { cn } from '@/lib/utils';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHome = activeTab === 'home';

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className={cn("pt-16", isHome ? "" : "")}>
        {/* Show different content based on active tab */}
        <div className={cn(isHome ? "block" : "hidden")}>
          <Hero isHome={true} />
          <Services />
          <Projects />
        </div>

        <div className={cn(activeTab === 'about' ? "block" : "hidden")}>
          <Hero isHome={false} />
          <Team />
        </div>

        {/* Contact form is shown on both tabs */}
        <ContactForm />
      </main>

      <Footer isHome={isHome} />
    </div>
  );
};

export default Index;
