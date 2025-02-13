import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Dedicated to{' '}
              <span className="text-red-600">Securing</span> Your Business
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              By Finding and Fixing Vulnerabilities
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-red-600 text-red-600 hover:bg-red-600/10"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-red-600/10 absolute -top-4 -right-4 w-72 h-72 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              alt="Cybersecurity Visualization"
              className="rounded-lg shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-4 -left-4 bg-red-600/10 w-72 h-72 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}