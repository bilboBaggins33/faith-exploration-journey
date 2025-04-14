
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookText, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Plans = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-serif font-bold text-bible-dark mb-4">
              Reading Plans
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover structured approaches to reading through Scripture with our carefully curated reading plans.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl mb-6">
            <div className="flex items-start gap-4">
              <Calendar className="h-8 w-8 text-bible-blue flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-serif font-bold mb-2">M'Cheyne Reading Plan</h2>
                <p className="text-gray-600 mb-4">
                  Read through the New Testament and Psalms twice, and the Old Testament once in a year. 
                  This classic plan, designed by Robert Murray M'Cheyne, provides a balanced diet of Scripture reading.
                </p>
                <Button asChild>
                  <Link to="/daily-reading" className="flex items-center gap-2">
                    <BookText className="h-4 w-4" />
                    Start Reading
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 italic">
              More reading plans coming soon! We're working on additional plans to help you engage with Scripture in meaningful ways.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Plans;
