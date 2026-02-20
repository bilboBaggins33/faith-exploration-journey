import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, BookText, Target, Award, Users, MessageSquare, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';

const About = () => {
  return (
    <div className="min-h-screen w-full relative bg-bible-dark text-white font-sans">
      <ScrollToTop />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 fixed">
        <img
          src="/assets/bible/default.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-white mb-2 tracking-wide drop-shadow-lg">
            Our Mission & Story
          </h1>
          <p className="text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Encouraging families to grow together through Scripture and thoughtful reading.
          </p>
        </motion.div>

        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden p-6 md:p-8 space-y-10">

          {/* Founder's Story Section */}
          <section className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-white/5 rounded-xl p-2 border border-white/10 shadow-xl md:w-5/12">
              <div className="aspect-video bg-black/20 rounded-lg flex items-center justify-center overflow-hidden">
                <Users className="w-12 h-12 text-white/20" />
              </div>
            </div>

            <div className="md:w-7/12 space-y-4">
              <h2 className="text-2xl font-serif text-white mb-2">A Father's Mission</h2>
              <div className="space-y-3 text-white/70 text-sm font-light leading-relaxed">
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
          </section>

          <div className="w-full h-px bg-white/10 flex-shrink-0" />

          {/* Our Approach Section */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif text-white mb-2">Our Approach</h2>
              <p className="text-sm text-white/60 font-light max-w-xl mx-auto">
                How we make Bible reading and theological exploration engaging for children and families.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FeatureCard
                icon={<MessageSquare className="w-5 h-5 text-blue-400" />}
                title="Asking Questions"
                description="Questions are the gateway to deeper understanding. Our challenges are designed to prompt thoughtful inquiry."
              />
              <FeatureCard
                icon={<Target className="w-5 h-5 text-emerald-400" />}
                title="Engaging Challenges"
                description="Interactive quizzes keep engagement high and help reinforce key lessons from Scripture."
              />
              <FeatureCard
                icon={<Award className="w-5 h-5 text-amber-400" />}
                title="Progress Tracking"
                description="Visualizing progress encourages consistency and builds a sense of accomplishment."
              />
            </div>
          </section>

          <div className="w-full h-px bg-white/10 flex-shrink-0" />

          {/* CTA Section */}
          <section className="text-center py-4">
            <h2 className="text-2xl font-serif text-white mb-3">Join Our Community</h2>
            <p className="text-sm text-white/70 mb-6 max-w-xl mx-auto font-light">
              Bible Quest is more than just an app—it's a community of families committed to growing in faith together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/auth">
                <Button className="bg-bible-gold hover:bg-bible-gold/90 text-bible-dark font-medium px-6 h-10 rounded-lg text-sm w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/bible">
                <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 px-6 h-10 rounded-lg text-sm w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Explore Challenges
                </Button>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors duration-300">
    <div className="mb-3 bg-black/40 p-2.5 rounded-xl inline-block">
      {icon}
    </div>
    <h3 className="text-sm font-medium text-white mb-1.5">{title}</h3>
    <p className="text-xs text-white/60 font-light leading-relaxed">
      {description}
    </p>
  </div>
);

export default About;
