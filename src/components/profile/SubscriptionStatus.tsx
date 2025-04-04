
import React, { useState } from 'react';
import { useAuth } from '@/context/auth';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Check, X, CreditCard } from 'lucide-react';

const SubscriptionStatus = () => {
  const { hasSubscription, checkingSubscription, createSubscription } = useAuth();
  const [isCreatingSubscription, setIsCreatingSubscription] = useState(false);
  
  const handleSubscribe = async () => {
    setIsCreatingSubscription(true);
    try {
      const checkoutUrl = await createSubscription();
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        throw new Error('Failed to create subscription.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsCreatingSubscription(false);
    }
  };
  
  return (
    <Card className="p-5">
      <h3 className="text-lg font-medium mb-4">Subscription Status</h3>
      
      {checkingSubscription ? (
        <div className="flex items-center space-x-2 text-gray-500">
          <Loader2 className="animate-spin h-4 w-4" />
          <span>Checking subscription...</span>
        </div>
      ) : hasSubscription ? (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-green-600">
            <Check className="h-5 w-5" />
            <span className="font-medium">Active Subscription</span>
          </div>
          <p className="text-sm text-gray-600">
            You have an active Bible Explorer Premium subscription. Enjoy full access to all content!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-red-500">
            <X className="h-5 w-5" />
            <span className="font-medium">No Active Subscription</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Upgrade to Bible Explorer Premium for $2.99/month to unlock all content and features.
          </p>
          <Button 
            onClick={handleSubscribe} 
            disabled={isCreatingSubscription}
            className="flex items-center space-x-2"
          >
            {isCreatingSubscription ? (
              <>
                <Loader2 className="animate-spin h-4 w-4 mr-2" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4 mr-2" />
                Subscribe Now - $2.99/month
              </>
            )}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default SubscriptionStatus;
