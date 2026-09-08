import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Target, Award, MessageSquare, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      <section className="relative w-full pt-32 pb-20 overflow-hidden bg-bible-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/bible/default.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bible-dark/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-white mb-3 tracking-wide">
              Our Mission & Story
            </h1>
            <p className="text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Encouraging families to grow together through Scripture and thoughtful reading.
            </p>
          </motion.div>
        </div>
      </section>

      <main className="flex-grow bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
          >
            <div className="md:w-5/12 w-full">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                <Users className="w-12 h-12 text-muted-foreground/40" />
              </div>
            </div>

            <div className="md:w-7/12 space-y-4">
              <h2 className="text-2xl font-serif text-foreground">A Father's Mission</h2>
              <div className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  As a Christian parent, I created Bible Quest with a simple vision: to make Bible reading and theological exploration engaging, interactive, and meaningful for families.
                </p>
                <p>
                  I wanted to create something that would inspire curiosity and deep thinking, going beyond simple reading to true engagement with the Word.
                </p>
                <p>
                  Bible Quest combines reading with interactive challenges and thoughtful questions designed to spark meaningful conversations about faith.
                </p>
              </div>
              <blockquote className="border-l-2 border-bible-gold pl-4 mt-4">
                <p className="italic text-foreground/80 text-sm font-serif leading-relaxed">
                  "Train up a child in the way he should go; even when he is old he will not depart from it." — Proverbs 22:6
                </p>
              </blockquote>
            </div>
          </motion.section>

          <div className="w-full h-px bg-border" />

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10 md:mb-12 max-w-xl">
              <h2 className="text-2xl font-serif text-foreground mb-2">Our Approach</h2>
              <p className="text-muted-foreground">
                How we make Bible reading and theological exploration engaging for children and families.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <Feature
                icon={<MessageSquare className="w-5 h-5 text-bible-blue" />}
                title="Asking Questions"
                description="Questions are the gateway to deeper understanding. Our challenges are designed to prompt thoughtful inquiry."
              />
              <Feature
                icon={<Target className="w-5 h-5 text-bible-deepBlue" />}
                title="Engaging Challenges"
                description="Interactive quizzes keep engagement high and help reinforce key lessons from Scripture."
              />
              <Feature
                icon={<Award className="w-5 h-5 text-bible-gold" />}
                title="Progress Tracking"
                description="Visualizing progress encourages consistency and builds a sense of accomplishment."
              />
            </div>
          </motion.section>

          <div className="w-full h-px bg-border" />

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center py-2"
          >
            <h2 className="text-2xl font-serif text-foreground mb-3">Join Our Community</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Bible Quest is more than just an app—it's a community of families committed to growing in faith together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="accent">
                <Link to="/auth">Start Your Journey</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/bible">Explore Challenges</Link>
              </Button>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="space-y-3">
    <div className="inline-flex p-2.5 rounded-lg bg-muted">{icon}</div>
    <h3 className="text-base font-medium text-foreground font-sans">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default About;
