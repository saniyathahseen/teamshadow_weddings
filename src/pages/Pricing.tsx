import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PRICING_PACKAGES } from '@/lib/index';
import { ROUTE_PATHS } from '@/config/site';
import { IMAGES } from '@/assets/images';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={IMAGES.WEDDING_HERO_6}
          alt="Wedding Photography"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Investment Packages
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your wedding story
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Wedding Photography Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden costs. All packages include professional editing and online gallery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {PRICING_PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`relative p-8 h-full flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                    pkg.highlighted
                      ? 'border-primary shadow-2xl shadow-primary/20 bg-gradient-to-b from-primary/5 to-transparent'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {pkg.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-primary">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={ROUTE_PATHS.CONTACT}>
                    <Button
                      className={`w-full ${
                        pkg.highlighted
                          ? 'bg-primary hover:bg-primary/90'
                          : 'bg-secondary hover:bg-secondary/80'
                      }`}
                      size="lg"
                    >
                      Book This Package
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={IMAGES.WEDDING_PORTRAITS_4}
                alt="Custom Wedding Package"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need a Custom Package?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every wedding is unique, and we understand that standard packages might not fit everyone's needs. Let us create a personalized package tailored specifically for your special day.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Flexible coverage hours and days</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Custom deliverables and album designs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Additional services and add-ons</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Multi-city and international coverage</span>
                </li>
              </ul>
              <Link to={ROUTE_PATHS.CONTACT}>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Request Custom Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What's Included in Every Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium quality and professional service are standard across all our packages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Professional Editing',
                description: 'Color grading, retouching, and cinematic post-production for all photos and videos',
              },
              {
                title: 'Online Gallery',
                description: 'Secure online gallery with download options and easy sharing with family and friends',
              },
              {
                title: 'Backup & Storage',
                description: 'All your photos and videos are backed up and stored securely for 5 years',
              },
              {
                title: 'Travel Coverage',
                description: 'Travel within India included. International travel available with custom packages',
              },
              {
                title: 'Quick Turnaround',
                description: 'Receive your edited photos within 4-6 weeks and cinematic film within 8-10 weeks',
              },
              {
                title: 'Dedicated Support',
                description: 'Personal project coordinator to assist you throughout the entire process',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <img
          src={IMAGES.PRE_WEDDING_4}
          alt="Pre-Wedding Photography"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Book Your Wedding?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your wedding plans and create the perfect package for your special day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTE_PATHS.CONTACT}>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Check Availability
                </Button>
              </Link>
              <Link to={ROUTE_PATHS.PORTFOLIO}>
                <Button size="lg" variant="outline">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {[
                {
                  q: 'What is your booking process?',
                  a: 'Contact us to check availability, discuss your requirements, and receive a detailed proposal. A 30% advance secures your date.',
                },
                {
                  q: 'Do you travel for destination weddings?',
                  a: 'Yes! We cover weddings across India, UAE, and international destinations. Travel costs are included for India, and discussed separately for international locations.',
                },
                {
                  q: 'How long does it take to receive our photos and videos?',
                  a: 'Edited photos are delivered within 4-6 weeks, and your cinematic film within 8-10 weeks. We also provide a same-day edit for Gold and Platinum packages.',
                },
                {
                  q: 'Can we customize a package?',
                  a: 'Absolutely! We understand every wedding is unique. Contact us to create a custom package tailored to your specific needs and budget.',
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
