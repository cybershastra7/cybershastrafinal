import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Achievements from '@/components/sections/Achievements';
import Leadership from '@/components/sections/Leadership';
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
        <Features id="services" />
        <Achievements id="achievements" />
        <Leadership id="leadership" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}