import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Advanced Protection',
    description: 'Multi-layered security solutions to safeguard your digital assets'
  },
  {
    icon: Search,
    title: 'Vulnerability Assessment',
    description: 'Comprehensive scanning and analysis of your security infrastructure'
  },
  {
    icon: AlertTriangle,
    title: 'Threat Detection',
    description: 'Real-time monitoring and response to security threats'
  },
  {
    icon: Lock,
    title: 'Secure Access',
    description: 'Controlled access management and authentication systems'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comprehensive Security Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Protect your organization with our state-of-the-art cybersecurity features
            designed to keep you safe in today's digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-red-600 mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
