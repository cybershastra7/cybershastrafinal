import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Who We Are ?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg text-gray-300"
          >
            <p>
              At CyberShastra Operations, we're dedicated to making cybersecurity accessible,
              reliable, and effective for businesses of all sizes. As a team of experienced security
              professionals, we go beyond traditional penetration testing by offering a
              comprehensive approach to secure your digital assets. Our services don't stop at
              simply identifying vulnerabilities – we provide actionable solutions, and with client
              approval, our development team steps in to patch vulnerabilities directly, ensuring
              end-to-end security.
            </p>
            <p>
              We stand out by offering free retesting after remediation, providing our clients with
              assurance that vulnerabilities have been effectively addressed. Our expertise spans
              web applications, mobile apps, network systems, and more. With our commitment to
              proactive, client-focused service, you'll benefit from a customized security approach
              designed to meet your unique needs.
            </p>
            <p>
              At CyberShastra Operations, we believe in building trust through transparency, security,
              and unparalleled service quality. Your security is our mission, and we're here to
              support you every step of the way.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-red-600/10 absolute -top-4 -right-4 w-72 h-72 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              alt="Cybersecurity Team"
              className="rounded-lg shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-4 -left-4 bg-red-600/10 w-72 h-72 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
