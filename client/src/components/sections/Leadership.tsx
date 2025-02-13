import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

const leaders = [
  {
    name: 'Ashwin Pawar',
    role: 'CEO',
    image: '/public/attached_assets/ashwin.jpeg',
    description: 'CEO and AI Expert, integrating advanced AI technologies to revolutionize cybersecurity solutions for our clients.',
    linkedin: '#'
  },
  {
    name: 'Gaurish Bahurupi',
    role: 'CTO',
    image: '/attached_assets/gaurish.jpg',
    description: 'CTO and Red Team Specialist, focused on strengthening cybersecurity with advanced offensive strategies to help clients stay secure.',
    linkedin: '#'
  },
  {
    name: 'Prajwal Chitwar',
    role: 'CFO',
    image: '/attached_assets/prajwal.jpg',
    description: 'CFO, managing finances to drive growth and support our cybersecurity innovations.',
    linkedin: '#'
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our experienced leadership team drives innovation in cybersecurity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-gray-900 border-gray-800 transition-transform duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">{leader.name}</h3>
                    <p className="text-red-500 font-medium">{leader.role}</p>
                    <p className="text-gray-400 mt-2 text-sm">{leader.description}</p>
                    <div className="flex gap-4 mt-4">
                      <a 
                        href={leader.linkedin} 
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}