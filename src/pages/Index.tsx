import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import {
  BookOpen,
  Trophy,
  Flame,
  BookMarked,
  Users,
  Target,
  ChevronRight,
  Sparkles,
  Star,
  Award,
  Zap,
  Heart,
  Crown,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-grow">
        <ChallengeTypes />
        <CallToAction />
      </main>
    </div>
  );
};

const ChallengeTypes = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const challenges = [
    {
      icon: BookOpen,
      title: "Bible Challenges",
      description: "Test your knowledge of Scripture with chapter-by-chapter quizzes covering all 66 books.",
      color: "from-bible-blue to-bible-blue/80",
      link: "/bible",
      features: ["1,189 Chapters", "Comprehension Questions", "Progress Tracking"]
    },
    {
      icon: BookMarked,
      title: "Theology Challenges",
      description: "Explore classic Christian works and deepen your understanding of foundational doctrines.",
      color: "from-bible-gold to-amber-500",
      link: "/theology",
      features: ["Classic Books", "Chapter Summaries", "Knowledge Quizzes"]
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Earn badges and track your spiritual growth as you complete challenges and milestones.",
      color: "from-emerald-500 to-emerald-600",
      link: "/achievements",
      features: ["Milestone Badges", "Streak Rewards", "Progress Stats"]
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-bible-blue/10 text-bible-blue rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Explore Our Features
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Your Journey Awaits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a new believer or a seasoned scholar, we have challenges designed to deepen your faith.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-card">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${challenge.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        <challenge.icon className="h-8 w-8" />
                      </div>
                      <ChevronRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{challenge.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6">{challenge.description}</p>
                    <ul className="space-y-3 mb-6">
                      {challenge.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-bible-blue flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={challenge.link}>
                      <Button className="w-full group-hover:bg-bible-blue group-hover:text-white transition-colors">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: BookOpen, value: "66", label: "Books of the Bible" },
    { icon: Star, value: "1,189", label: "Chapters to Master" },
    { icon: Award, value: "100+", label: "Achievements to Earn" },
    { icon: Users, value: "Growing", label: "Community" }
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-bible-blue via-bible-blue/90 to-bible-dark" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white border border-white/20"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-bible-gold" />
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-white"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-bible-gold/20 text-bible-gold rounded-full text-sm font-medium mb-6">
            <Flame className="h-4 w-4" />
            Start Your Journey Today
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Grow in Your Faith?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join thousands of believers who are deepening their understanding of Scripture and theology through engaging challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bible">
              <Button size="lg" className="bg-white text-bible-blue hover:bg-white/90 shadow-lg px-8 py-6 text-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Bible
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent">
                <Crown className="mr-2 h-5 w-5" />
                Create Free Account
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Index;
