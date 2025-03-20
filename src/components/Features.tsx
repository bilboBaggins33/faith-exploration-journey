
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { BookOpen, Map, Award, Brain, Heart, BookText } from 'lucide-react';
import { cn } from '@/lib/utils';

const Features = () => {
  return (
    <section className="py-20 bg-bible-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureHeading />
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Map className="h-10 w-10 text-bible-deepBlue" />}
            title="Biblical World Map"
            description="Explore an interactive map of biblical lands and eras. Each area represents different books and stories from Scripture."
            delay={0.1}
          />
          
          <FeatureCard
            icon={<Award className="h-10 w-10 text-bible-deepBlue" />}
            title="Challenges & Quizzes"
            description="Complete engaging challenges and quizzes to test your knowledge and understanding of biblical stories and teachings."
            delay={0.2}
          />
          
          <FeatureCard
            icon={<Brain className="h-10 w-10 text-bible-deepBlue" />}
            title="Memorization Tools"
            description="Powerful tools like flashcards and spaced repetition to help you memorize important verses and passages."
            delay={0.3}
          />
          
          <FeatureCard
            icon={<Heart className="h-10 w-10 text-bible-deepBlue" />}
            title="Community Features"
            description="Connect with friends, form study groups, and compete on leaderboards to enhance your learning experience."
            delay={0.4}
          />
          
          <FeatureCard
            icon={<BookOpen className="h-10 w-10 text-bible-deepBlue" />}
            title="Study Resources"
            description="Access a comprehensive library of articles, commentaries, and study materials to deepen your understanding."
            delay={0.5}
          />
          
          <FeatureCard
            icon={<BookText className="h-10 w-10 text-bible-deepBlue" />}
            title="Progress Tracking"
            description="Track your learning journey with detailed progress metrics and achievements to celebrate your growth."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureHeading = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  return (
    <div ref={ref} className="text-center">
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5 }}
        className="text-bible-deepBlue font-medium mb-3"
      >
        INTERACTIVE FEATURES
      </motion.p>
      
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-6"
      >
        Engaging Ways to Learn and Grow
      </motion.h2>
      
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto text-lg text-bible-dark/80"
      >
        Bible Adventure Quest offers multiple interactive features designed to make your Bible learning journey enjoyable, memorable, and spiritually enriching.
      </motion.p>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "glass-card rounded-lg p-6",
        "hover:shadow-xl transition-all duration-300",
        "transform hover:-translate-y-2"
      )}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-bible-sky mb-4">
        {icon}
      </div>
      
      <h3 className="text-xl font-serif font-semibold text-bible-dark mb-2">
        {title}
      </h3>
      
      <p className="text-bible-dark/70">
        {description}
      </p>
    </motion.div>
  );
};

export default Features;
