
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import InstallAppBanner from '@/components/InstallAppBanner';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, BookText, GraduationCap, Users } from 'lucide-react';

const Index = () => {
  // Initialize scroll reveal
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    scrollElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      scrollElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
      <InstallAppBanner />
    </div>
  );
};

const HowItWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-bible-blue font-medium mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-6">
            Your Path to Spiritual Growth
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-bible-dark/80">
            Our platform helps you consistently engage with Scripture and theology through a structured, rewarding approach.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-bible-sky mb-6">
              <span className="text-2xl font-bold text-bible-deepBlue">1</span>
            </div>
            <h3 className="text-xl font-serif font-semibold text-bible-dark mb-3">
              Create Your Account
            </h3>
            <p className="text-bible-dark/70 mb-4">
              Sign up for a free account to track your reading progress, earn rewards, and connect with other readers.
            </p>
            <Link to="/auth" className="text-bible-blue hover-link">
              Get Started
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-bible-sky mb-6">
              <span className="text-2xl font-bold text-bible-deepBlue">2</span>
            </div>
            <h3 className="text-xl font-serif font-semibold text-bible-dark mb-3">
              Choose Your Reading
            </h3>
            <p className="text-bible-dark/70 mb-4">
              Browse our collection of Scripture and theology books, selecting what you want to read and grow in.
            </p>
            <Link to="/theology" className="text-bible-blue hover-link">
              Explore Books
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-bible-sky mb-6">
              <span className="text-2xl font-bold text-bible-deepBlue">3</span>
            </div>
            <h3 className="text-xl font-serif font-semibold text-bible-dark mb-3">
              Track Your Progress
            </h3>
            <p className="text-bible-dark/70 mb-4">
              Mark chapters as read, take quizzes to test your understanding, and watch your knowledge and faith grow.
            </p>
            <Link to="/profile" className="text-bible-blue hover-link">
              View Progress
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has transformed my Bible reading habit. I'm more consistent and feel like I'm actually growing in my understanding of Scripture.",
      author: "Sarah J.",
      role: "Daily Reader",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "As a theology student, this has been an invaluable resource. The tracking system keeps me accountable, and the quizzes help reinforce what I'm learning.",
      author: "Michael T.",
      role: "Seminary Student",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      quote: "I've been a Christian for years, but this platform has helped me dive deeper into theological concepts I've always wanted to understand better.",
      author: "Rebecca L.",
      role: "Bible Study Group Leader",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];
  
  return (
    <section className="py-20 bg-bible-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-bible-blue font-medium mb-3">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-6">
            What Our Community Is Saying
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="scroll-reveal glass-card rounded-lg p-6 flex flex-col"
            >
              <div className="mb-4">
                <svg width="45" height="36" className="text-bible-gold fill-current opacity-20">
                  <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                </svg>
              </div>
              
              <p className="flex-1 italic text-bible-dark/80 mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-bible-dark">{testimonial.author}</h4>
                  <p className="text-sm text-bible-dark/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-16 bg-bible-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card-dark rounded-2xl overflow-hidden">
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-bible-blue/60 to-bible-deepBlue/60 backdrop-blur-sm"></div>
            
            {/* Content */}
            <div className="relative z-10 flex-1 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                Ready to Deepen Your Spiritual Journey?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl">
                Create your free account today and start tracking your Bible and theology reading progress with our thoughtfully designed platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/auth">
                  <Button size="lg" className="bg-white text-bible-deepBlue hover:bg-bible-sky transition-colors duration-300">
                    Sign Up Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/bible">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transition-colors duration-300">
                    Browse Reading List
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Images */}
            <div className="relative z-10 flex items-center justify-center md:pl-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-4">
                  <div className="h-24 w-24 md:h-32 md:w-32 rounded-lg overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1504052434569-70c99356bba1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Open Bible"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-24 w-24 md:h-32 md:w-32 rounded-lg overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Reading Scripture"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4 pt-6">
                  <div className="h-24 w-24 md:h-32 md:w-32 rounded-lg overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Digital reading"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="h-24 w-24 md:h-32 md:w-32 rounded-lg overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img 
                      src="https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Study group"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
