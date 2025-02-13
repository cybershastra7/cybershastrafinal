import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Mail, Shield, Search, RotateCw } from 'lucide-react';
import CyberGrid from '../3d/CyberGrid';

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 bg-black text-white relative overflow-hidden">
      {/* 3D Background Animation */}
      <CyberGrid />

      {/* Background Gradients */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />

      {/* Social Icons */}
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <motion.a 
          href="https://www.linkedin.com/company/trinetrasecurity/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-600 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <Linkedin className="h-6 w-6" />
        </motion.a>
        <motion.a 
          href="#" 
          className="text-white hover:text-red-600 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <Instagram className="h-6 w-6" />
        </motion.a>
        <motion.a 
          href="mailto:services@cybershastra.in"
          className="text-white hover:text-red-600 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <Mail className="h-6 w-6" />
        </motion.a>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button className="bg-red-600 hover:bg-red-700 transition-all duration-300">
            Get Free Audit
          </Button>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 max-w-3xl"
          >
            <div className="space-y-6">
              <motion.p 
                className="text-xl text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                COMPREHENSIVE TESTING, COMPLETE SECURITY
              </motion.p>
              <motion.h1 
                className="text-6xl sm:text-7xl font-bold leading-tight uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                AI Driven<br />Cybersecurity<br />Services
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Book a free consultation meet to assess your unique security needs with our specialists
              </motion.p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                size="lg" 
                onClick={() => {
                  const element = document.getElementById('calendly-section');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 h-auto transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>

            {/* Service Icons */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Shield className="h-12 w-12 mx-auto mb-2 text-red-600" />
                <p className="text-sm">Secure Your System & Services</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Search className="h-12 w-12 mx-auto mb-2 text-red-600" />
                <p className="text-sm">Identify Security Gaps</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <RotateCw className="h-12 w-12 mx-auto mb-2 text-red-600" />
                <p className="text-sm">Free Re-testing of Patched Issues</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}