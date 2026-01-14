
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BookText, GraduationCap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const heroBackgroundUrls = [
  'assets/bible/exodus.png'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadError, setImageLoadError] = useState<Record<string, boolean>>({});
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      {heroBackgroundUrls.map((url, index) => (
        <div
          key={url}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${imageLoadError[url] ? '/assets/bible/default.jpg' : url})`,
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        >
          <img
            src={url}
            className="hidden"
            alt="Preload"
            onError={() => setImageLoadError(prev => ({ ...prev, [url]: true }))}
          />
        </div>
      ))}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bible-dark/50 via-bible-dark/40 to-bible-dark/20" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Learn Scripture Through<br />
            Questions and Answers
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/bible">
            <Button size="lg" className="bg-bible-blue hover:bg-bible-deepBlue text-white px-8 h-12 rounded-md font-medium transition-all duration-300 transform hover:scale-105">
              Start the Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant="outline" size="lg" className="bg-white/20 border-white text-white hover:bg-white/40 px-8 h-12 rounded-md font-medium transition-all duration-300">
              Free Sign Up
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
