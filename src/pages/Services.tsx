import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/index';
import { ServiceCard } from '@/components/ServiceCard';
import { IMAGES } from '@/assets/images';

export default function Services() {
  const heroImages = [
    IMAGES.WEDDING_CEREMONY_2,
    IMAGES.PRE_WEDDING_3,
    IMAGES.DESTINATION_WEDDING_3,
    IMAGES.WEDDING_PORTRAITS_3,
  ];

  const servicesWithImages = SERVICES.map((service, index) => ({
    ...service,
    image: heroImages[index % heroImages.length],
  }));

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={IMAGES.WEDDING_CEREMONY_2}
          alt="Wedding Services"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-foreground"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive wedding photography and cinematography services tailored to capture your unique love story
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate moments to grand celebrations, we provide complete coverage of your wedding journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesWithImages.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Wedding Photography
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our wedding photography service captures every precious moment with artistic precision and emotional depth. We blend candid storytelling with traditional portraiture to create a comprehensive visual narrative of your special day.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Candid Photography</h3>
                    <p className="text-muted-foreground">Authentic, unposed moments that capture genuine emotions and spontaneous interactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Traditional Photography</h3>
                    <p className="text-muted-foreground">Classic posed portraits and formal group photographs with family and friends</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bride & Groom Portraits</h3>
                    <p className="text-muted-foreground">Stunning individual and couple portraits showcasing your beauty and connection</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-2xl overflow-hidden"
            >
              <img
                src={IMAGES.WEDDING_PORTRAITS_3}
                alt="Wedding Photography"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <img
                src={IMAGES.WEDDING_CEREMONY_2}
                alt="Cinematic Films"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Cinematic Wedding Films
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your wedding into a timeless cinematic masterpiece. Our films combine stunning 4K visuals, emotional storytelling, and professional editing to create a movie-quality documentary of your celebration.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">4K Cinematic Highlight Films</h3>
                    <p className="text-muted-foreground">Beautifully edited 10-15 minute films capturing the essence of your day</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Full Wedding Documentary</h3>
                    <p className="text-muted-foreground">Complete coverage from preparation to reception in cinematic quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Drone Coverage</h3>
                    <p className="text-muted-foreground">Breathtaking aerial shots adding cinematic grandeur to your film</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Pre-Wedding Shoots
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Celebrate your love story with stunning pre-wedding photography at breathtaking locations. These sessions allow you to relax, have fun, and create beautiful memories before the big day.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Concept Based Shoots</h3>
                    <p className="text-muted-foreground">Creative themes and styling that reflect your personality and love story</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Outdoor Destination Shoots</h3>
                    <p className="text-muted-foreground">Stunning natural locations from beaches to mountains to heritage sites</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Save the Date Video</h3>
                    <p className="text-muted-foreground">Short cinematic films perfect for sharing your wedding announcement</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-2xl overflow-hidden"
            >
              <img
                src={IMAGES.PRE_WEDDING_3}
                alt="Pre-Wedding Shoots"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <img
                src={IMAGES.DESTINATION_WEDDING_3}
                alt="Destination Weddings"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Destination Weddings
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We travel across India, UAE, and international destinations to document your dream wedding. Our experienced team handles all logistics to ensure seamless coverage of your destination celebration.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">India Coverage</h3>
                    <p className="text-muted-foreground">From Rajasthan palaces to Kerala backwaters, we cover all of India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Dubai & UAE</h3>
                    <p className="text-muted-foreground">Luxury weddings in Dubai, Abu Dhabi, and across the Emirates</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">International Travel</h3>
                    <p className="text-muted-foreground">Destination weddings worldwide with full team and equipment</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Ready to Capture Your Love Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create timeless memories together. Contact us to discuss your wedding photography needs.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Book Your Wedding
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}