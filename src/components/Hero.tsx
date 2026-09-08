import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HERO_IMAGE = '/assets/bible/exodus.webp';
const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const [src, setSrc] = useState(HERO_IMAGE);
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-bible-dark">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: loaded ? 1 : 1.08 }}
        transition={{ duration: 8, ease: 'linear' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${src})`,
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      />
      <img
        src={HERO_IMAGE}
        alt=""
        className="hidden"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setSrc('/assets/bible/default.webp');
          setLoaded(true);
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-bible-dark/75 via-bible-dark/55 to-bible-dark/70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight">
            Bible Quest
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/80 max-w-xl mx-auto leading-relaxed">
            Learn Scripture through questions and answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button asChild size="lg">
              <Link to="/bible">
                Explore the Bible
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <Link to="/theology">Explore theology</Link>
            </Button>
          </div>
          <Link
            to="/auth"
            className="text-sm text-white/55 hover:text-white/90 transition-colors underline-offset-4 hover:underline"
          >
            Create account
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
