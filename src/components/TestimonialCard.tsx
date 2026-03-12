import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '@/lib/index';
import { cn } from '@/lib/utils';
import { springPresets } from '@/lib/motion';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={springPresets.gentle}
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted/30 p-8',
        'shadow-[0_8px_30px_-6px_color-mix(in_srgb,var(--primary)_15%,transparent)]',
        'hover:shadow-[0_12px_40px_-8px_color-mix(in_srgb,var(--primary)_25%,transparent)]',
        'transition-all duration-300',
        'border border-border/50',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-primary text-primary"
            />
          ))}
        </div>

        <blockquote className="text-lg leading-relaxed text-foreground/90 italic">
          "{testimonial.text}"
        </blockquote>

        <div className="flex items-center gap-4 pt-4 border-t border-border/30">
          {testimonial.image && (
            <div className="w-12 h-12 rounded-full overflow-hidden bg-muted ring-2 ring-primary/20">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="flex-1">
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
          </div>

          <div className="text-xs text-muted-foreground">
            {new Date(testimonial.date).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            })}
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}
