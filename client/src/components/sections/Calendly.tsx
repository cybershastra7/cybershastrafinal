
import { motion } from 'framer-motion';

export default function Calendly() {
  return (
    <section id="calendly" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Schedule a Meeting
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Book a consultation with our cybersecurity experts
          </p>
        </motion.div>
        <div className="calendly-inline-widget" data-url="https://calendly.com/cybershastra7/30min" style={{ minWidth: "320px", height: "700px" }}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </div>
    </section>
  );
}
