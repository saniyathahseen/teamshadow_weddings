import { motion } from 'framer-motion';
import { Camera, Film, Heart, Sparkles, Plane, Book, LucideIcon } from 'lucide-react';
import { Service } from '@/lib/index';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Camera,
  Film,
  Heart,
  Sparkles,
  Plane,
  Book,
};

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-card border border-border/50',
        'transition-all duration-300',
        'hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {IconComponent && <IconComponent className="w-8 h-8" />}
        </div>

        <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-start gap-3 text-sm text-muted-foreground"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-8 pt-6 border-t border-border/50">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-primary font-medium inline-flex items-center gap-2 group/btn"
          >
            <span>Learn More</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
