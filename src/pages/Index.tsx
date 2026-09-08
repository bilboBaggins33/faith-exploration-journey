import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;
const shell = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-grow">
        <Pathway
          eyebrow="Scripture"
          title="The Bible"
          description="Read a chapter, answer the questions, and build lasting knowledge across all 66 books."
          cta="Explore the Bible"
          link="/bible"
          image="/assets/bible/genesis.webp"
          align="left"
        />
        <Pathway
          eyebrow="Study"
          title="Theology"
          description="Go deeper with classic Christian works—chapter by chapter, the same way you learn Scripture."
          cta="Explore theology"
          link="/theology"
          image="/assets/pilgrims-progress-cover.webp"
          align="right"
        />
        <QuietClose />
      </main>
    </div>
  );
};

interface PathwayProps {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  link: string;
  image: string;
  align: 'left' | 'right';
}

const Pathway = ({
  eyebrow,
  title,
  description,
  cta,
  link,
  image,
  align,
}: PathwayProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isRight = align === 'right';

  return (
    <section
      ref={ref}
      className="relative min-h-[75svh] md:min-h-[80svh] flex items-end overflow-hidden bg-bible-dark"
    >
      <motion.div
        initial={{ scale: 1.06 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.4, ease }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        className={`absolute inset-0 ${
          isRight
            ? 'bg-gradient-to-l from-bible-dark/90 via-bible-dark/55 to-bible-dark/20'
            : 'bg-gradient-to-r from-bible-dark/90 via-bible-dark/55 to-bible-dark/20'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bible-dark/40 via-transparent to-bible-dark/20" />

      <div className={`relative z-10 w-full ${shell} py-16 md:py-24`}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className={`max-w-md ${isRight ? 'md:ml-auto md:text-right' : ''}`}
        >
          <p className="text-bible-gold/90 text-sm font-medium tracking-[0.18em] uppercase mb-4">
            {eyebrow}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-5">
            {title}
          </h2>
          <p
            className={`text-base md:text-lg text-white/75 leading-relaxed mb-8 ${
              isRight ? 'md:ml-auto' : ''
            }`}
          >
            {description}
          </p>
          <Link
            to={link}
            className="group inline-flex items-center gap-2.5 text-white text-base font-medium border-b border-white/35 pb-0.5 hover:border-white transition-colors duration-300"
          >
            {cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const QuietClose = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  return (
    <section ref={ref} className="bg-background border-b border-border/60">
      <div className={`${shell} py-20 md:py-28`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="max-w-lg mx-auto text-center"
        >
          <p className="text-bible-deepBlue/80 text-sm font-medium tracking-[0.18em] uppercase mb-4">
            Your journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Save your progress
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-9">
            Create a free account to track chapters, streaks, and achievements as you learn.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link to="/auth">Create account</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Index;
