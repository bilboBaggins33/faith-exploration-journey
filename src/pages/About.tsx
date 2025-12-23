import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { BookOpen, BookText, Target, Award, Users, MessageSquare, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-bible-blue/10 to-bible-gold/5 z-0"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-bible-dark mb-6">
                Our Mission & Story
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                Encouraging families to grow together through Scripture and thoughtful reading
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Founder's Story */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-2/5">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-bible-gold/20 rounded-2xl"></div>
                  <div className="relative glass-card rounded-2xl overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Family reading the Bible together" 
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5">
                <h2 className="text-3xl font-serif font-bold text-bible-dark mb-6">
                  A Father's Mission
                </h2>
                <p className="text-gray-700 mb-4">
                  As a Christian parent with four children, I created Bible Quest with a simple vision: to make Bible reading and theological exploration engaging, interactive, and meaningful for families.
                </p>
                <p className="text-gray-700 mb-4">
                  I noticed that while my children were naturally curious about faith, traditional Bible studies often failed to capture their imagination or encourage deeper thinking. I wanted to create something that would inspire them to not just read Scripture, but to engage with it thoughtfully.
                </p>
                <p className="text-gray-700 mb-6">
                  This journey led to the creation of Bible Quest — a platform that combines Bible reading with interactive challenges, progress tracking, and thoughtful questions designed to spark meaningful conversations about faith.
                </p>
                
                <div className="flex items-center">
                  <Heart className="text-red-500 mr-2" />
                  <span className="italic text-gray-600">
                    "Train up a child in the way he should go; even when he is old he will not depart from it." — Proverbs 22:6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Approach */}
        <section className="py-16 px-4 bg-bible-beige/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-bible-dark mb-2 text-center">
              Our Approach
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              How we make Bible reading and theological exploration engaging for children and families
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<MessageSquare className="h-8 w-8 text-bible-blue" />}
                title="Asking Questions"
                description="We believe that questions are the gateway to deeper understanding. Our challenges are designed to prompt thoughtful inquiry and discussion about Scripture."
              />
              
              <FeatureCard 
                icon={<Target className="h-8 w-8 text-bible-blue" />}
                title="Engaging Challenges"
                description="Interactive quizzes and challenges help children and adults alike stay engaged with the text and remember key lessons from Scripture."
              />
              
              <FeatureCard 
                icon={<Award className="h-8 w-8 text-bible-blue" />}
                title="Progress Tracking"
                description="Visualizing progress encourages consistent reading habits. Our tracking system celebrates milestones and builds a sense of accomplishment."
              />
            </div>
          </div>
        </section>
        
        {/* For the Whole Family */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="md:w-2/5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-xl overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Family reading together" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="glass-card rounded-xl overflow-hidden mt-6">
                    <img 
                      src="/placeholder.svg" 
                      alt="Child completing a Bible challenge" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="glass-card rounded-xl overflow-hidden">
                    <img 
                      src="/placeholder.svg" 
                      alt="Family discussing Bible" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="glass-card rounded-xl overflow-hidden mt-6">
                    <img 
                      src="/placeholder.svg" 
                      alt="Reading together" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5">
                <h2 className="text-3xl font-serif font-bold text-bible-dark mb-6">
                  For the Whole Family
                </h2>
                <p className="text-gray-700 mb-4">
                  Bible Quest is designed for families to use together. Parents and children can read Scripture together, tackle challenges as a team, and have meaningful conversations about faith.
                </p>
                <p className="text-gray-700 mb-4">
                  As children engage with both the Bible and classic theological books through our platform, they develop not just biblical literacy but critical thinking skills that will serve them throughout their faith journey.
                </p>
                <p className="text-gray-700 mb-6">
                  We've found that making learning feel like an adventure—with challenges to complete and progress to track—transforms how children approach Scripture study, making it something they look forward to rather than a chore.
                </p>
                
                <Link to="/bible">
                  <Button className="bg-bible-blue hover:bg-bible-blue/90 text-white">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Bible Challenges
                  </Button>
                </Link>
                <Link to="/theology">
                  <Button variant="outline" className="ml-4">
                    <BookText className="mr-2 h-4 w-4" />
                    Discover Theology Books
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Us */}
        <section className="py-16 px-4 bg-bible-dark text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="h-12 w-12 text-bible-gold mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold mb-6">Join Our Community</h2>
            <p className="text-white/80 mb-8 text-lg">
              Bible Quest is more than just an app—it's a community of families committed to growing in faith together. Start your family's adventure today.
            </p>
            <Link to="/auth">
              <Button className="bg-bible-gold hover:bg-bible-gold/90 text-bible-dark">
                Create Your Family Account
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-bible-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default About;
