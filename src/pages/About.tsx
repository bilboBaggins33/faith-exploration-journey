import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, Target, Award, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      {/* Hero section with dark background */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/bible/default.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-white mb-2 tracking-wide drop-shadow-lg">
              Our Mission & Story
            </h1>
            <p className="text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
              Encouraging families to grow together through Scripture and thoughtful reading.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content on white background */}
      <main className="flex-grow bg-background">
        <div className="container mx-auto px-4 max-w-4xl py-12 space-y-16">

          {/* Founder's Story Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="bg-muted rounded-xl p-2 border border-border shadow-sm md:w-5/12">
              <div className="aspect-video bg-muted-foreground/10 rounded-lg flex items-center justify-center overflow-hidden">
                <Users className="w-12 h-12 text-muted-foreground/30" />
              </div>
            </div>

            <div className="md:w-7/12 space-y-4">
              <h2 className="text-2xl font-serif text-foreground mb-2">A Father's Mission</h2>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
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
              <div className="bg-bible-gold/10 border-l-2 border-bible-gold p-3 rounded-r-lg mt-4">
                <p className="italic text-bible-gold text-xs font-serif leading-relaxed">
                  "Train up a child in the way he should go; even when he is old he will not depart from it." — Proverbs 22:6
                </p>
              </div>
            </div>
          </motion.section>

          <div className="w-full h-px bg-border" />

          {/* Our Approach Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif text-foreground mb-2">Our Approach</h2>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                How we make Bible reading and theological exploration engaging for children and families.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FeatureCard
                icon={<MessageSquare className="w-5 h-5 text-bible-blue" />}
                title="Asking Questions"
                description="Questions are the gateway to deeper understanding. Our challenges are designed to prompt thoughtful inquiry."
              />
              <FeatureCard
                icon={<Target className="w-5 h-5 text-emerald-500" />}
                title="Engaging Challenges"
                description="Interactive quizzes keep engagement high and help reinforce key lessons from Scripture."
              />
              <FeatureCard
                icon={<Award className="w-5 h-5 text-bible-gold" />}
                title="Progress Tracking"
                description="Visualizing progress encourages consistency and builds a sense of accomplishment."
              />
            </div>
          </motion.section>

          <div className="w-full h-px bg-border" />

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center py-4"
          >
            <h2 className="text-2xl font-serif text-foreground mb-3">Join Our Community</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              Bible Quest is more than just an app—it's a community of families committed to growing in faith together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/auth">
                <Button className="bg-bible-gold hover:bg-bible-gold/90 text-bible-dark font-medium px-6 h-10 rounded-lg text-sm w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/bible">
                <Button variant="outline" className="border-border text-foreground hover:bg-muted px-6 h-10 rounded-lg text-sm w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Explore Challenges
                </Button>
              </Link>
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-card border border-border p-5 rounded-2xl hover:shadow-md transition-all duration-300">
    <div className="mb-3 bg-muted p-2.5 rounded-xl inline-block">
      {icon}
    </div>
    <h3 className="text-sm font-medium text-foreground mb-1.5">{title}</h3>
    <p className="text-xs text-muted-foreground leading-relaxed">
      {description}
    </p>
  </div>
);

export default About;
