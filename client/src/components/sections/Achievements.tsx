import { motion } from 'framer-motion';
import { Server, Globe, Monitor, Laptop, Building2, Building, Database, BookOpen } from 'lucide-react';

const companies = [
  {
    icon: Server,
    name: 'IBM',
    bg: 'bg-white',
    iconColor: 'text-[#0530AD]'
  },
  {
    icon: Globe,
    name: 'NASA',
    bg: 'bg-white',
    iconColor: 'text-[#0B3D91]'
  },
  {
    icon: Monitor,
    name: 'Netflix',
    bg: 'bg-[#E50914]',
    iconColor: 'text-white'
  },
  {
    icon: Laptop,
    name: 'Lenovo',
    bg: 'bg-[#E2231A]',
    iconColor: 'text-white'
  },
  {
    icon: BookOpen,
    name: 'Drexel',
    bg: 'bg-[#FDB930]',
    iconColor: 'text-[#07294D]'
  },
  {
    icon: Building2,
    name: 'Stanford',
    bg: 'bg-[#8C1515]',
    iconColor: 'text-white'
  },
  {
    icon: Building,
    name: 'Government of India',
    bg: 'bg-white',
    iconColor: 'text-[#FF9933]'
  },
  {
    icon: Database,
    name: 'RBA',
    bg: 'bg-white',
    iconColor: 'text-[#000000]'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Team Has Reported Vulnerabilities To
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className={`${company.bg} p-6 rounded-lg w-full aspect-square flex items-center justify-center`}>
                <company.icon className={`w-16 h-16 ${company.iconColor}`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8 text-gray-400"
        >
          & Many More , Via Their Vulnerability Disclosure and Bug Bounty Programs
        </motion.p>
      </div>
    </section>
  );
}