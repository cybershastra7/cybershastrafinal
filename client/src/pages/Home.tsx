import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  useEffect(() => {
    document.title = 'CyberShastra - Cybersecurity Solutions';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}