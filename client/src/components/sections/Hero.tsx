import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Mail, Search, Shield, RotateCw } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 bg-black text-white relative">
      {/* Social Icons */}
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <a href="#" className="text-white hover:text-red-600 transition-colors">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="#" className="text-white hover:text-red-600 transition-colors">
          <Instagram className="h-6 w-6" />
        </a>
        <a href="#" className="text-white hover:text-red-600 transition-colors">
          <Mail className="h-6 w-6" />
        </a>
        <Button className="bg-red-600 hover:bg-red-700">
          Get Free Audit
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-300">COMPREHENSIVE TESTING, COMPLETE SECURITY</p>
              <h1 className="text-6xl sm:text-7xl font-bold leading-tight uppercase">
                Penetration<br />Testing<br />Services
              </h1>
              <p className="text-xl text-gray-300">
                Book a free consultation meet to assess your unique security needs with our specialists
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 h-auto"
            >
              Begin Security Assessment
            </Button>

            {/* Service Icons */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-2 text-red-600" />
                <p className="text-sm">Secure Your System & Services</p>
              </div>
              <div className="text-center">
                <Search className="h-12 w-12 mx-auto mb-2 text-red-600" />
                <p className="text-sm">Identify Security Gaps</p>
              </div>
              <div className="text-center">
                <RotateCw className="h-12 w-12 mx-auto mb-2 text-red-600" />
                <p className="text-sm">Free Re-testing of Patched Issues</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-red-600/10 w-72 h-72 rounded-full blur-3xl" />
              <div className="h-full w-full flex items-center justify-center">
                <div className="w-full h-[400px] bg-gradient-to-br from-red-600/20 to-transparent rounded-lg backdrop-blur-sm border border-red-600/20" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-red-600/10 w-72 h-72 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}