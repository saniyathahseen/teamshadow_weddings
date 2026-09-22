import { motion } from 'framer-motion';
import { Camera, Film, Heart, ArrowRight, Instagram, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { IMAGES } from '@/assets/images';
import { SERVICES, TESTIMONIALS } from '@/lib/index';
import { ROUTE_PATHS, COMPANY_INFO, SOCIAL_LINKS } from '@/config/site';
import { ServiceCard } from '@/components/ServiceCard';
import { GalleryGrid } from '@/components/GalleryGrid';
import { TestimonialCard } from '@/components/TestimonialCard';

export default function Home() {
  const featuredServices = SERVICES.slice(0, 3);
  const featuredImages = [
    IMAGES.WEDDING_PORTRAITS_1,
    IMAGES.WEDDING_PORTRAITS_2,
    IMAGES.PRE_WEDDING_1,
    IMAGES.PRE_WEDDING_2,
    IMAGES.DESTINATION_WEDDING_1,
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-background">
          <img
            src={IMAGES.WEDDING_HERO_3}
            alt="Cinematic wedding photography"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal mb-6 tracking-tight">
              {COMPANY_INFO.tagline}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-[#eadbd2]">
              {COMPANY_INFO.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                <Link to={ROUTE_PATHS.PORTFOLIO}>
                  View Portfolio
                  <Camera className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border-white/60 backdrop-blur-sm px-8 py-6 text-lg"
              >
                <Link to={ROUTE_PATHS.CONTACT}>
                  Book Your Wedding
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Every Wedding Has a Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe every wedding has a story. Our team captures emotions, laughter, and moments that become timeless memories. With a cinematic approach and artistic vision, we transform your special day into a visual masterpiece that you'll cherish forever.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={IMAGES.TEAM_PHOTOS_1}
                alt="Teamshadow Weddings team"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Artistic Vision</h3>
                  <p className="text-muted-foreground">
                    Our photographers blend technical expertise with creative storytelling to capture authentic moments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Film className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cinematic Excellence</h3>
                  <p className="text-muted-foreground">
                    We create films that feel like Hollywood productions, with 4K quality and emotional depth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Emotional Storytelling</h3>
                  <p className="text-muted-foreground">
                    Every couple has a unique love story, and we're passionate about telling yours authentically.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Wedding Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of beautiful weddings captured with love and artistry
            </p>
          </motion.div>

          <GalleryGrid images={featuredImages} showFilters={false} className="mb-12" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button asChild size="lg" variant="outline">
              <Link to={ROUTE_PATHS.PORTFOLIO}>
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive wedding photography and cinematography services tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg">
              <Link to={ROUTE_PATHS.SERVICES}>
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Instagram className="h-8 w-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Follow Our Journey
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest work on Instagram
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
            {[IMAGES.WEDDING_HERO_4, IMAGES.WEDDING_HERO_5, IMAGES.PRE_WEDDING_1, IMAGES.PRE_WEDDING_2].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button asChild size="lg" variant="outline">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow @teamshadowweddings
              </a>
            </Button>
          </motion.div>
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
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Couples Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from real couples who trusted us with their special day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={IMAGES.WEDDING_HERO_3}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Capture Your Love Story
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Your wedding day deserves to be remembered forever. Let us create timeless memories that you'll treasure for a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-6 text-lg">
                <Link to={ROUTE_PATHS.CONTACT}>
                  Check Availability
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg">
                <Link to={ROUTE_PATHS.PRICING}>
                  View Packages
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}