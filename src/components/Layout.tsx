import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SiInstagram, SiWhatsapp } from 'react-icons/si';
import { ROUTE_PATHS, SOCIAL_LINKS, COMPANY_INFO } from '@/config/site';
import { springPresets } from '@/lib/motion';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { to: ROUTE_PATHS.HOME, label: 'Home' },
    { to: ROUTE_PATHS.PORTFOLIO, label: 'Portfolio' },
    { to: ROUTE_PATHS.SERVICES, label: 'Services' },
    { to: ROUTE_PATHS.PRICING, label: 'Pricing' },
    { to: ROUTE_PATHS.ABOUT, label: 'About' },
    { to: ROUTE_PATHS.BLOG, label: 'Blog' },
    { to: ROUTE_PATHS.CONTACT, label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <NavLink
              to={ROUTE_PATHS.HOME}
              className="text-2xl font-bold tracking-tight text-primary hover:text-primary/80 transition-colors"
            >
              {COMPANY_INFO.name}
            </NavLink>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-foreground/80'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={springPresets.gentle}
              className="fixed top-0 right-0 bottom-0 w-80 bg-card border-l border-border z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="text-xl font-bold text-primary">
                  {COMPANY_INFO.name}
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-2 p-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-muted'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="p-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <SiInstagram size={20} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="WhatsApp"
                  >
                    <SiWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <main style={{ paddingTop: `${headerHeight}px` }}>{children}</main>

      <footer className="bg-card border-t border-border mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {COMPANY_INFO.description}
              </p>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-sm text-muted-foreground">
                    Wedding Photography
                  </span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">
                    Cinematic Films
                  </span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">
                    Pre-Wedding Shoots
                  </span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">
                    Destination Weddings
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SOCIAL_LINKS.phone.replace(/\s/g, '')}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {SOCIAL_LINKS.phone}
                  </a>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">
                    {COMPANY_INFO.location}
                  </span>
                </li>
              </ul>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <SiInstagram size={18} />
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              {COMPANY_INFO.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}