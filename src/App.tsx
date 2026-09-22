import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Layout } from "@/components/Layout";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ROUTE_PATHS } from "@/config/site";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";

const App = () => (
  <TooltipProvider>
    <MotionConfig reducedMotion="user">
      <Toaster />
      <Sonner />
      <HashRouter>
        <Layout>
          <Routes>
            <Route path={ROUTE_PATHS.HOME} element={<Home />} />
            <Route path={ROUTE_PATHS.PORTFOLIO} element={<Portfolio />} />
            <Route path={ROUTE_PATHS.SERVICES} element={<Services />} />
            <Route path={ROUTE_PATHS.PRICING} element={<Pricing />} />
            <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
            <Route path={ROUTE_PATHS.BLOG} element={<Blog />} />
            <Route path={`${ROUTE_PATHS.BLOG}/:slug`} element={<BlogPost />} />
            <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
          </Routes>
        </Layout>
        <WhatsAppButton />
      </HashRouter>
    </MotionConfig>
  </TooltipProvider>
);

export default App;