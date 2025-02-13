import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#leadership', label: 'Meet Our Leadership' },
    { href: '#contact', label: 'Contact' }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/919527500586', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <motion.div 
              className="text-2xl font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              CyberShastra
            </motion.div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-foreground cursor-pointer transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="flex items-center space-x-4">
              <motion.a 
                href="https://www.linkedin.com/company/trinetrasecurity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.button 
                onClick={openWhatsApp}
                className="text-foreground/80 hover:text-foreground"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-5 w-5" />
              </motion.button>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button className="bg-red-600 hover:bg-red-700">Get Free Audit</Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.button>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <motion.a 
                href="https://www.linkedin.com/company/trinetrasecurity/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.button 
                onClick={openWhatsApp}
                className="text-foreground/80 hover:text-foreground"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-5 w-5" />
              </motion.button>
            </div>
            <div className="px-3 py-2">
              <Button className="w-full bg-red-600 hover:bg-red-700">Get Free Audit</Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}