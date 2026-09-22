import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { ROUTE_PATHS } from '@/config/site';
import { BLOG_POSTS } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { springPresets } from '@/lib/motion';

const POST_IMAGES = [
  IMAGES.PRE_WEDDING_5,
  IMAGES.DESTINATION_WEDDING_4,
  IMAGES.WEDDING_CEREMONY_4,
];

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const index = Math.max(
    0,
    BLOG_POSTS.findIndex((post) => post.slug === slug)
  );
  const post = BLOG_POSTS.find((p) => p.slug === slug) ?? BLOG_POSTS[0];
  const image = POST_IMAGES[index % POST_IMAGES.length];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
          >
            <Link
              to={ROUTE_PATHS.BLOG}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-8">
              <img
                src={image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-4 py-1.5 bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt} Full story coming soon — contact us on WhatsApp to
              discuss this topic for your wedding.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
