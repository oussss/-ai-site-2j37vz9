import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Menu, X, ArrowUpRight, Play, Instagram, Twitter, Linkedin } from 'lucide-react';

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-6 py-4 mix-blend-difference text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
          PIXEL <span className="text-[#FFD60A]">&</span> CO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm uppercase tracking-widest hover:text-[#FFD60A] transition-colors ${location.pathname === link.path ? 'text-[#FFD60A]' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-[#FFD60A] transition-all hover:scale-105"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-gray p-8 flex flex-col gap-6 md:hidden border-b border-white/10"
          >
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-bold hover:text-brand-yellow"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-gray pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-none">
            LET'S BUILD <br/> <span className="text-brand-yellow">THE FUTURE.</span>
          </h2>
          <a href="mailto:hello@pixelandco.com" className="text-xl md:text-2xl border-b border-brand-yellow pb-2 inline-flex items-center gap-4 hover:gap-6 transition-all">
            hello@pixelandco.com <ArrowRight />
          </a>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <div key={i} className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:text-black hover:border-transparent transition-all cursor-pointer">
                <Icon size={20} />
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-8 md:mt-0">
            © 2024 Pixel & Co. All rights reserved.<br/>
            Designed for the bold.
          </p>
        </div>
      </div>
      <div className="text-[12vw] md:text-[14vw] font-display font-bold text-white/5 leading-none text-center select-none">
        PIXEL&CO
      </div>
    </div>
  </footer>
);

// --- Page Sections ---

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-yellow/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none tracking-tighter mb-8">
            DIGITAL <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white">ALCHEMY</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
        >
          We turn complex ideas into unforgettable digital experiences for ambitious startups.
        </motion.p>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="flex justify-center gap-6"
        >
          <Link to="/services" className="bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transition-transform">
            Our Services
          </Link>
          <Link to="/about" className="border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all">
            Who We Are
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const SelectedWork = () => {
  const works = [
    { title: "Neon Flux", cat: "Branding & Web", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" },
    { title: "Orbital", cat: "App Design", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { title: "Vertex", cat: "Motion System", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold">SELECTED <br/> WORKS</h2>
          <Link to="/services" className="hidden md:flex items-center gap-2 text-brand-yellow uppercase tracking-widest text-sm hover:gap-4 transition-all">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl mb-6 relative aspect-[4/5]">
                <img 
                  src={work.img} 
                  alt={work.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-brand-yellow p-4 rounded-full text-black">
                    <ArrowUpRight size={32} />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{work.title}</h3>
              <p className="text-gray-500">{work.cat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Marquee = () => (
  <div className="py-12 bg-brand-yellow text-black overflow-hidden">
    <div className="flex whitespace-nowrap animate-marquee">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-6xl md:text-8xl font-display font-bold mx-8">
          DESIGN • STRATEGY • MOTION •
        </span>
      ))}
    </div>
  </div>
);

// --- Pages ---

const HomePage = () => (
  <>
    <Hero />
    <SelectedWork />
    <Marquee />
    <section className="py-32 px-6 text-center">
      <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to disrupt <br/> the market?</h2>
      <Link to="/contact" className="inline-block bg-white text-black text-xl font-bold py-5 px-10 rounded-full hover:bg-brand-yellow transition-colors">
        Start Your Project
      </Link>
    </section>
  </>
);

const AboutPage = () => (
  <div className="pt-32 min-h-screen">
    <div className="max-w-7xl mx-auto px-6">
      <motion.h1 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-6xl md:text-8xl font-display font-bold mb-16"
      >
        WE ARE <span className="text-brand-yellow">PIXEL.</span>
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 leading-relaxed space-y-8"
        >
          <p>Founded in 2024, Pixel & Co is the antidote to boring corporate design. We are a collective of dreamers, designers, and developers obsessed with quality.</p>
          <p>We work with founders who aren't afraid to stand out. If you want safe, go elsewhere. If you want unforgettable, you're home.</p>
        </motion.div>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-brand-gray aspect-square rounded-3xl overflow-hidden relative"
        >
           <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <div className="mb-32">
        <h3 className="text-sm text-brand-yellow uppercase tracking-widest mb-12 border-b border-white/10 pb-4">Our DNA</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            { t: 'Boldness', d: 'We don\'t whisper. We shout.' },
            { t: 'Precision', d: 'God is in the details.' },
            { t: 'Velocity', d: 'We move as fast as you do.' }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-white/10 rounded-xl hover:border-brand-yellow/50 transition-colors">
              <h4 className="text-2xl font-display font-bold mb-4">0{i+1}. {item.t}</h4>
              <p className="text-gray-400">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ServicesPage = () => {
  const services = [
    { title: "Brand Identity", desc: "Logo, typography, color systems, and voice guidelines that cut through the noise.", tags: ["Strategy", "Visual", "Guidelines"] },
    { title: "Web Design", desc: "Immersive websites that convert visitors into superfans. React, WebGL, and Three.js.", tags: ["UI/UX", "Development", "CMS"] },
    { title: "Motion Graphics", desc: "From micro-interactions to full explainer videos. We make things move.", tags: ["2D/3D", "Animation", "Lottie"] },
  ];

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-24">OUR <span className="text-brand-yellow">CRAFT.</span></h1>
        
        <div className="flex flex-col gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border-t border-white/20 py-12 hover:border-brand-yellow transition-colors"
            >
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                   <h2 className="text-4xl font-display font-bold group-hover:text-brand-yellow transition-colors">{s.title}</h2>
                </div>
                <div className="md:col-span-5">
                  <p className="text-xl text-gray-400">{s.desc}</p>
                </div>
                <div className="md:col-span-3 flex flex-wrap gap-2 content-start">
                  {s.tags.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full border border-white/20 text-xs uppercase tracking-wider">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => (
  <div className="pt-32 min-h-screen bg-brand-yellow text-black">
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-6xl md:text-9xl font-display font-bold mb-12 tracking-tighter">SAY HELLO.</h1>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-2xl font-medium mb-8">Have a project in mind? Let's build something legendary together.</p>
          <a href="mailto:hello@pixelandco.com" className="text-4xl md:text-5xl font-bold underline decoration-2 underline-offset-8 hover:text-white transition-colors">
            hello@pixelandco.com
          </a>
          <div className="mt-16 space-y-2 text-lg">
            <p>123 Innovation Blvd,</p>
            <p>Tech District, NY 10012</p>
            <p>+1 (555) 012-3456</p>
          </div>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="font-bold uppercase tracking-widest text-sm">Name</label>
            <input type="text" placeholder="Jane Doe" className="w-full bg-transparent border-b-2 border-black/20 py-4 focus:outline-none focus:border-black text-xl placeholder-black/40" />
          </div>
          <div className="space-y-2">
            <label className="font-bold uppercase tracking-widest text-sm">Email</label>
            <input type="email" placeholder="jane@startup.com" className="w-full bg-transparent border-b-2 border-black/20 py-4 focus:outline-none focus:border-black text-xl placeholder-black/40" />
          </div>
          <div className="space-y-2">
            <label className="font-bold uppercase tracking-widest text-sm">Budget</label>
            <select className="w-full bg-transparent border-b-2 border-black/20 py-4 focus:outline-none focus:border-black text-xl">
              <option>Select Range</option>
              <option>$5k - $10k</option>
              <option>$10k - $25k</option>
              <option>$25k+</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-bold uppercase tracking-widest text-sm">Message</label>
            <textarea rows="4" placeholder="Tell us about your vision..." className="w-full bg-transparent border-b-2 border-black/20 py-4 focus:outline-none focus:border-black text-xl placeholder-black/40"></textarea>
          </div>
          <button className="bg-black text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform mt-8 w-full md:w-auto">
            Send Request
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- Main App ---

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black text-white min-h-screen selection:bg-brand-yellow selection:text-black font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;