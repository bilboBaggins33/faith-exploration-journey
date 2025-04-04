
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/auth';

interface SubscriptionRequiredProps {
  children: React.ReactNode;
  message?: string;
}

const SubscriptionRequired = ({ 
  children, 
  message = "This content requires a premium subscription" 
}: SubscriptionRequiredProps) => {
  const { hasSubscription, checkingSubscription, createSubscription } = useAuth();
  const navigate = useNavigate();
  const [isCreatingSubscription, setIsCreatingSubscription] = useState(false);
  
  const handleSubscribe = async () => {
    setIsCreatingSubscription(true);
    try {
      const checkoutUrl = await createSubscription();
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        navigate('/profile');
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsCreatingSubscription(false);
    }
  };
  
  if (checkingSubscription) {
    return (
      <Card className="p-6 flex items-center justify-center min-h-[200px]">
        <div className="text-center">
          <Loader2 className="h-8 w-8 text-bible-blue animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Checking subscription...</p>
        </div>
      </Card>
    );
  }
  
  if (!hasSubscription) {
    return (
      <Card className="p-6">
        <div className="text-center">
          <CreditCard className="h-10 w-10 text-bible-blue mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Premium Content</h3>
          <p className="text-gray-600 mb-6">{message}</p>
          <Button 
            onClick={handleSubscribe} 
            className="bg-bible-blue hover:bg-bible-deepBlue"
            disabled={isCreatingSubscription}
          >
            {isCreatingSubscription ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              'Subscribe Now - $2.99/month'
            )}
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Your subscription gives you full access to all premium content and features.
          </p>
        </div>
      </Card>
    );
  }
  
  return <>{children}</>;
};

export default SubscriptionRequired;
