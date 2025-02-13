import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Security Officer',
    image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff',
    socials: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    name: 'Mark Rodriguez',
    role: 'Security Architect',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    socials: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    name: 'Emily Watson',
    role: 'Threat Analyst',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    socials: { twitter: '#', linkedin: '#', github: '#' }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry leaders with decades of combined experience in cybersecurity
            and digital protection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                    <div className="flex gap-4 mt-4">
                      <a href={member.socials.twitter} className="text-muted-foreground hover:text-foreground">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href={member.socials.linkedin} className="text-muted-foreground hover:text-foreground">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.socials.github} className="text-muted-foreground hover:text-foreground">
                        <Github className="h-5 w-5" />
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
