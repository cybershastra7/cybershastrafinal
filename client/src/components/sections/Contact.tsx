import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our cybersecurity solutions? Our team is here to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <a href="mailto:services@cybershastra.in" className="text-muted-foreground hover:text-foreground">
                  services@cybershastra.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <a href="tel:+919527500586" className="text-muted-foreground hover:text-foreground">
                  +91 95275 00586
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}