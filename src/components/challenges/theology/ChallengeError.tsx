import React from 'react';
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const ChallengeError = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md p-6">
          <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Challenge Not Found</h2>
          <p className="mb-4">
            We couldn't find the theology challenge you're looking for.
          </p>
          <Button onClick={() => navigate('/theology')}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Theology
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ChallengeError;
