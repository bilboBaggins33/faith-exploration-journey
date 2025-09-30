
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BookText, GraduationCap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { ProgressiveImage } from '@/components/ui/progressive-image';

const heroBackgroundUrls = [
  'assets/hero-bg.jpg'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroBackgroundUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background Image with Parallax Effect */}
      {heroBackgroundUrls.map((url, index) => (
        <div
          key={url}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        >
          <ProgressiveImage
            src={url}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bible-dark/70 via-bible-dark/50 to-bible-dark/70" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block text-bible-gold bg-bible-dark/60 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wider mb-4">
          Master Scripture Through Questions & Answers
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Deepen Your Faith Through Scripture & Theology
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-8">
          Follow your growth and have fun while you learn.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/bible">
            <Button size="lg" className="bg-bible-blue hover:bg-bible-deepBlue text-white px-8 h-12 rounded-md font-medium transition-all duration-300 transform hover:scale-105">
              Start Reading
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant="outline" size="lg" className="bg-white/20 border-white text-white hover:bg-white/40 px-8 h-12 rounded-md font-medium transition-all duration-300">
              Sign Up
            </Button>
          </Link>
        </motion.div>
        
        {/* Feature Icons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          <FeatureIcon
            icon={<BookOpen className="h-8 w-8 text-bible-gold" />}
            text="Bible Reading"
          />
          <FeatureIcon
            icon={<BookText className="h-8 w-8 text-bible-gold" />}
            text="Theology Study"
          />
          <FeatureIcon
            icon={<GraduationCap className="h-8 w-8 text-bible-gold" />}
            text="Track Growth"
          />
        </motion.div> */}
      </div>
      
    </div>
  );
};

interface FeatureIconProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureIcon = ({ icon, text }: FeatureIconProps) => (
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-3">
      {icon}
    </div>
    <p className="text-white text-sm">{text}</p>
  </div>
);

export default Hero;
