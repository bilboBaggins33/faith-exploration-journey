
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import ChallengeSkeleton from './ChallengeSkeleton';

const LoginRequired = () => {
  const navigate = useNavigate();
  
  return (
    <ChallengeSkeleton>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="p-8 max-w-md text-center">
          <AlertCircle className="mx-auto text-blue-500 mb-4" size={40} />
          <h2 className="text-xl font-bold mb-2">Login Required</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to save your progress. Please log in to continue.</p>
          <Button onClick={() => navigate('/auth')}>
            Go to Login
          </Button>
        </Card>
      </div>
    </ChallengeSkeleton>
  );
};

export default LoginRequired;
