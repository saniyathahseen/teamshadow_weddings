import { motion } from 'framer-motion';
import { Camera, Award, Heart, Users } from 'lucide-react';
import { IMAGES } from '@/assets/images';
import { TEAM_MEMBERS } from '@/lib/index';
import { COMPANY_INFO } from '@/config/site';

export default function About() {
  const stats = [
    { icon: Camera, label: 'Weddings Captured', value: '500+' },
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: Heart, label: 'Happy Couples', value: '450+' },
    { icon: Users, label: 'Team Members', value: '12' },
  ];

  const awards = [
    { year: '2025', title: 'Best Wedding Cinematography', organization: 'India Wedding Awards' },
    { year: '2025', title: 'Excellence in Photography', organization: 'Asian Wedding Photography Awards' },
    { year: '2024', title: 'Destination Wedding Specialist', organization: 'International Wedding Awards' },
  ];

  const values = [
    {
      title: 'Authentic Storytelling',
      description: 'We believe every wedding has a unique story. Our approach focuses on capturing genuine emotions and real moments that reflect your true love story.',
    },
    {
      title: 'Cinematic Excellence',
      description: 'Inspired by cinema, we craft visual narratives that are timeless, elegant, and emotionally resonant. Every frame is composed with artistic precision.',
    },
    {
      title: 'Personalized Experience',
      description: 'We take time to understand your vision, preferences, and personalities to create photography that truly represents you as a couple.',
    },
    {
      title: 'Premium Quality',
      description: 'Using state-of-the-art equipment and post-production techniques, we deliver images and films of the highest quality that you\'ll treasure forever.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={IMAGES.WEDDING_HERO_7}
          alt="About Teamshadow Weddings"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Passionate storytellers dedicated to capturing love stories in the most authentic and cinematic way possible
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About {COMPANY_INFO.name}
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Teamshadow Weddings was born from a passion for storytelling and a love for capturing life's most precious moments. What started as a small team of photographers has grown into a full-service wedding photography and cinematography studio.
                </p>
                <p>
                  We believe that every wedding is unique, and every couple has a story worth telling. Our approach combines artistic vision with technical excellence to create images and films that are not just beautiful, but deeply meaningful.
                </p>
                <p>
                  With over 500 weddings captured across India, UAE, and international destinations, we've had the privilege of documenting love stories from diverse cultures and backgrounds. Each wedding teaches us something new and inspires us to push creative boundaries.
                </p>
                <p>
                  Our team is dedicated to providing a seamless, enjoyable experience from the first consultation to the final delivery. We're not just photographers; we're storytellers, artists, and most importantly, people who genuinely care about preserving your memories.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={IMAGES.WEDDING_CEREMONY_3}
                alt="Behind the scenes"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognized for excellence in wedding photography and cinematography
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Awards & Recognition</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-background/50"
                >
                  <div className="text-primary font-bold text-lg mb-2">{award.year}</div>
                  <div className="text-foreground font-semibold mb-2">{award.title}</div>
                  <div className="text-sm text-muted-foreground">{award.organization}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented professionals passionate about capturing your love story
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                  <img
                    src={IMAGES[`TEAM_PHOTOS_${index + 1}` as keyof typeof IMAGES]}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{member.name}</h3>
                <div className="text-primary font-semibold mb-3">{member.role}</div>
                <p className="text-muted-foreground mb-3">{member.bio}</p>
                {member.specialization && (
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {member.specialization}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Behind The Scenes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our creative process and team in action
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[IMAGES.TEAM_PHOTOS_4, IMAGES.TEAM_PHOTOS_5].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl aspect-[4/3] group"
              >
                <img
                  src={image}
                  alt={`Behind the scenes ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Tell Your Story?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create something beautiful together. Contact us to discuss your wedding photography needs.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-foreground text-primary rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
