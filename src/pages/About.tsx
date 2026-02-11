import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, BookText, Target, Award, Users, MessageSquare, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        {/* Dark Hero Section */}
        <section className="relative bg-gradient-to-br from-bible-dark via-[#1a1a3e] to-[#0f2027] py-24 px-4 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-bible-blue rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-10 w-48 h-48 bg-bible-gold rounded-full blur-[80px]" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Our Mission & Story
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Encouraging families to grow together through Scripture and thoughtful reading.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder's Story */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-2/5">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-bible-gold/20 rounded-2xl"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
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
                <p className="text-gray-700 mb-4 leading-relaxed">
                  As a Christian parent with four children, I created Bible Quest with a simple vision: to make Bible reading and theological exploration engaging, interactive, and meaningful for families.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I noticed that while my children were naturally curious about faith, traditional Bible studies often failed to capture their imagination or encourage deeper thinking. I wanted to create something that would inspire them to not just read Scripture, but to engage with it thoughtfully.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  This journey led to the creation of Bible Quest — a platform that combines Bible reading with interactive challenges, progress tracking, and thoughtful questions designed to spark meaningful conversations about faith.
                </p>

                <div className="flex items-center bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <Heart className="text-red-500 mr-3 flex-shrink-0" />
                  <span className="italic text-gray-700 font-serif">
                    "Train up a child in the way he should go; even when he is old he will not depart from it." — Proverbs 22:6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 px-4 bg-gray-50/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-bible-dark mb-4 text-center">
              Our Approach
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              How we make Bible reading and theological exploration engaging for children and families
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<MessageSquare className="h-8 w-8 text-white" />}
                title="Asking Questions"
                description="We believe that questions are the gateway to deeper understanding. Our challenges are designed to prompt thoughtful inquiry and discussion about Scripture."
                color="bg-blue-500"
              />

              <FeatureCard
                icon={<Target className="h-8 w-8 text-white" />}
                title="Engaging Challenges"
                description="Interactive quizzes and challenges help children and adults alike stay engaged with the text and remember key lessons from Scripture."
                color="bg-emerald-500"
              />

              <FeatureCard
                icon={<Award className="h-8 w-8 text-white" />}
                title="Progress Tracking"
                description="Visualizing progress encourages consistent reading habits. Our tracking system celebrates milestones and builds a sense of accomplishment."
                color="bg-amber-500"
              />
            </div>
          </div>
        </section>

        {/* For the Whole Family */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-2/5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-lg transform translate-y-4">
                    <img
                      src="/placeholder.svg"
                      alt="Family reading together"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg mt-8">
                    <img
                      src="/placeholder.svg"
                      alt="Child completing a Bible challenge"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/placeholder.svg"
                      alt="Family discussing Bible"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg mt-8 transform -translate-y-4">
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
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Bible Quest is designed for families to use together. Parents and children can read Scripture together, tackle challenges as a team, and have meaningful conversations about faith.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  As children engage with both the Bible and classic theological books through our platform, they develop not just biblical literacy but critical thinking skills that will serve them throughout their faith journey.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  We've found that making learning feel like an adventure—with challenges to complete and progress to track—transforms how children approach Scripture study, making it something they look forward to rather than a chore.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/bible">
                    <Button className="bg-bible-blue hover:bg-bible-blue/90 text-white rounded-full px-6 h-12">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Explore Bible Challenges
                    </Button>
                  </Link>
                  <Link to="/theology">
                    <Button variant="outline" className="border-2 border-bible-dark text-bible-dark hover:bg-bible-dark hover:text-white rounded-full px-6 h-12 bg-transparent">
                      <BookText className="mr-2 h-4 w-4" />
                      Discover Theology Books
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-20 px-4 bg-[#0f2027] text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-bible-dark via-[#1a1a3e] to-[#0f2027] opacity-90"></div>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <Users className="h-12 w-12 text-bible-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Join Our Community</h2>
            <p className="text-white/80 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Bible Quest is more than just an app—it's a community of families committed to growing in faith together. Start your family's adventure today.
            </p>
            <Link to="/auth">
              <Button className="bg-bible-gold hover:bg-bible-gold/90 text-bible-dark text-lg px-8 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
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
  color: string;
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-8 shadow-lg border-0 hover:shadow-xl transition-all duration-300"
    >
      <div className={`mb-6 p-4 rounded-xl inline-block ${color} shadow-md`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-bible-dark mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default About;
