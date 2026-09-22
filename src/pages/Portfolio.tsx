import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/config/site';
import { GalleryGrid } from '@/components/GalleryGrid';
import { IMAGES } from '@/assets/images';
const PORTFOLIO_IMAGES = {
  all: [
    IMAGES.WEDDING_HERO_1,
    IMAGES.WEDDING_HERO_2,
    IMAGES.WEDDING_HERO_3,
    IMAGES.WEDDING_PORTRAITS_1,
    IMAGES.WEDDING_PORTRAITS_2,
    IMAGES.PRE_WEDDING_1,
    IMAGES.PRE_WEDDING_2,
    IMAGES.DESTINATION_WEDDING_1,
    IMAGES.DESTINATION_WEDDING_2,
    IMAGES.WEDDING_CEREMONY_1,
  ],
  wedding: [
    IMAGES.WEDDING_HERO_1,
    IMAGES.WEDDING_HERO_2,
    IMAGES.WEDDING_HERO_3,
    IMAGES.WEDDING_PORTRAITS_1,
    IMAGES.WEDDING_PORTRAITS_2,
    IMAGES.WEDDING_CEREMONY_1,
  ],
  'pre-wedding': [
    IMAGES.PRE_WEDDING_1,
    IMAGES.PRE_WEDDING_2,
  ],
  couple: [
    IMAGES.WEDDING_PORTRAITS_1,
    IMAGES.WEDDING_PORTRAITS_2,
    IMAGES.PRE_WEDDING_1,
  ],
  destination: [
    IMAGES.DESTINATION_WEDDING_1,
    IMAGES.DESTINATION_WEDDING_2,
  ],
  engagement: [
    IMAGES.WEDDING_HERO_1,
    IMAGES.WEDDING_PORTRAITS_1,
  ],
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredImages = PORTFOLIO_IMAGES[activeCategory as keyof typeof PORTFOLIO_IMAGES] || PORTFOLIO_IMAGES.all;

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of timeless wedding stories captured through cinematic artistry
            </p>
          </motion.div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GalleryGrid
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              images={filteredImages}
              className="mb-16"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Your Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's capture your special moments with the same passion and artistry
            </p>
            <Link
              to={ROUTE_PATHS.CONTACT}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
            >
              Book Your Wedding
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
