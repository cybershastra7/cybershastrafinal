
import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Web Application VAPT',
    description: 'Comprehensive vulnerability assessment and penetration testing for web applications'
  },
  {
    icon: Lock,
    title: 'API Testing',
    description: 'In-depth security testing of API endpoints and services'
  },
  {
    icon: AlertTriangle,
    title: 'Mobile VAPT',
    description: 'Security assessment for mobile applications across platforms'
  },
  {
    icon: BookOpen,
    title: 'Cyber Awareness',
    description: 'Training and education for enhanced cybersecurity awareness'
  }
];

export default function Features() {
  return (
    <section id="services" className="py-24 bg-muted/50">
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
            Protect your organization with our state-of-the-art cybersecurity services
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
