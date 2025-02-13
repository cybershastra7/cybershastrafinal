import { motion } from 'framer-motion';
import { 
  SiNetflix, 
  SiLenovo,
  SiAib,
  SiNasa,
  SiGooglescholar,
  SiUnsplash
} from "react-icons/si";
import { GiIndiaGate } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

const companies = [
  {
    icon: SiAib,
    name: 'IBM',
    bg: 'bg-white',
    iconColor: 'text-[#000000]'
  },
  {
    icon: SiNasa,
    name: 'NASA',
    bg: 'bg-white',
    iconColor: 'text-[#0B3D91]'
  },
  {
    icon: SiNetflix,
    name: 'Netflix',
    bg: 'bg-[#E50914]',
    iconColor: 'text-white'
  },
  {
    icon: SiLenovo,
    name: 'Lenovo',
    bg: 'bg-white',
    iconColor: 'text-[#E2231A]'
  },
  {
    icon: SiGooglescholar,
    name: 'Drexel',
    bg: 'bg-[#FDB930]',
    iconColor: 'text-[#07294D]'
  },
  {
    icon: FaGraduationCap,
    name: 'Stanford University',
    bg: 'bg-white',
    iconColor: 'text-[#8C1515]'
  },
  {
    icon: GiIndiaGate,
    name: 'Government of India',
    bg: 'bg-white',
    iconColor: 'text-[#FF9933]'
  },
  {
    icon: BsBank2,
    name: 'RBA',
    bg: 'bg-white',
    iconColor: 'text-black'
  },
  {
    icon: SiUnsplash,
    name: 'UNESCO',
    bg: 'bg-[#00A5E3]',
    iconColor: 'text-white'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-red-600/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-red-600/20 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className={`${company.bg} p-4 rounded-lg w-full aspect-square flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300`}>
                <company.icon className={`w-12 h-12 ${company.iconColor}`} />
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
          & Many More, Via Their Vulnerability Disclosure and Bug Bounty Programs
        </motion.p>
      </div>
    </section>
  );
}