import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Secure Your Digital Future with{' '}
              <span className="text-red-600">CyberShastra</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Advanced cybersecurity solutions to protect your business from evolving digital threats.
              Stay one step ahead with our expert team and cutting-edge technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
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
            <motion.div
              className="absolute -bottom-4 -left-4 bg-background p-4 rounded-lg shadow-lg flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Shield className="text-red-600 h-8 w-8" />
              <div>
                <p className="font-semibold">Protected</p>
                <p className="text-sm text-muted-foreground">24/7 Security Monitoring</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
