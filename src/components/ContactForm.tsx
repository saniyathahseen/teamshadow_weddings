import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, Calendar, MapPin, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import type { ContactForm as ContactFormType } from '@/lib/index';
import { SOCIAL_LINKS } from '@/config/site';
import { springPresets } from '@/lib/motion';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  weddingDate: z.string().min(1, 'Please select your wedding date'),
  weddingLocation: z.string().min(2, 'Please enter your wedding location'),
  eventType: z.string().min(1, 'Please select an event type'),
  message: z.string().optional(),
});

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = '' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  });

  const eventType = watch('eventType');

  const onSubmit = async (data: ContactFormType) => {
    setIsSubmitting(true);

    try {
      const whatsappMessage = [
        '*New Wedding Booking Inquiry*',
        '',
        `*Name:* ${data.name}`,
        `*Phone:* ${data.phone}`,
        `*Email:* ${data.email}`,
        `*Wedding Date:* ${data.weddingDate}`,
        `*Location:* ${data.weddingLocation}`,
        `*Event Type:* ${data.eventType}`,
        ...(data.message ? [`*Message:* ${data.message}`] : []),
      ].join('\n');

      window.open(
        `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
        '_blank',
        'noopener,noreferrer',
      );

      toast({
        title: 'Inquiry Sent!',
        description: 'Thank you for your interest. We\'ll get back to you shortly via WhatsApp.',
      });

      reset();
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springPresets.gentle}
      className={className}
    >
      <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-foreground mb-2">
            Check Availability
          </h2>
          <p className="text-muted-foreground">
            Fill out the form below and we'll get back to you within 24 hours to discuss your special day.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Full Name *
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                {...register('name')}
                className="bg-background border-border focus:border-primary transition-colors"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                {...register('phone')}
                className="bg-background border-border focus:border-primary transition-colors"
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              {...register('email')}
              className="bg-background border-border focus:border-primary transition-colors"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="weddingDate" className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Wedding Date *
              </Label>
              <Input
                id="weddingDate"
                type="date"
                {...register('weddingDate')}
                min={new Date().toISOString().split('T')[0]}
                className="bg-background border-border focus:border-primary transition-colors"
              />
              {errors.weddingDate && (
                <p className="text-sm text-destructive">{errors.weddingDate.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="weddingLocation" className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Wedding Location *
              </Label>
              <Input
                id="weddingLocation"
                placeholder="City, State, Country"
                {...register('weddingLocation')}
                className="bg-background border-border focus:border-primary transition-colors"
              />
              {errors.weddingLocation && (
                <p className="text-sm text-destructive">{errors.weddingLocation.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventType" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              Event Type *
            </Label>
            <Select
              value={eventType || 'none'}
              onValueChange={(value) => setValue('eventType', value === 'none' ? '' : value)}
            >
              <SelectTrigger className="bg-background border-border focus:border-primary transition-colors">
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Select event type</SelectItem>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="pre-wedding">Pre-Wedding Shoot</SelectItem>
                <SelectItem value="engagement">Engagement</SelectItem>
                <SelectItem value="destination">Destination Wedding</SelectItem>
                <SelectItem value="reception">Reception</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.eventType && (
              <p className="text-sm text-destructive">{errors.eventType.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Additional Message (Optional)
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us more about your vision, special requirements, or any questions you have..."
              rows={4}
              {...register('message')}
              className="bg-background border-border focus:border-primary transition-colors resize-none"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springPresets.snappy}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-lg shadow-lg"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Check Availability
                </span>
              )}
            </Button>
          </motion.div>

          <p className="text-sm text-muted-foreground text-center">
            By submitting this form, you agree to be contacted via WhatsApp or email regarding your inquiry.
          </p>
        </form>
      </div>
    </motion.div>
  );
}
