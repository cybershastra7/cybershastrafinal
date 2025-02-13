import { motion } from 'framer-motion';
import { SiNetflix, SiLenovo } from 'react-icons/si';
import { RiGovernmentLine } from 'react-icons/ri';
import { LuSchool } from 'react-icons/lu';
import { BiBuildings, BiServer } from 'react-icons/bi';
import { FaDatabase, FaGlobeAmericas } from 'react-icons/fa';

const companies = [
  { icon: BiServer, name: 'IBM', bg: 'bg-white' },
  { icon: FaGlobeAmericas, name: 'NASA', bg: 'bg-white' },
  { icon: SiNetflix, name: 'Netflix', bg: 'bg-[#E50914]' },
  { icon: SiLenovo, name: 'Lenovo', bg: 'bg-[#E2231A]' },
  { icon: LuSchool, name: 'Drexel', bg: 'bg-[#FDB930]' },
  { icon: RiGovernmentLine, name: 'Stanford', bg: 'bg-[#8C1515]' },
  { icon: BiBuildings, name: 'Government of India', bg: 'bg-white' },
  { icon: FaDatabase, name: 'RBA', bg: 'bg-white' }
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
                <company.icon className="w-16 h-16" />
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