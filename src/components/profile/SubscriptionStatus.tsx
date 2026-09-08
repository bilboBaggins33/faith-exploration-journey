import React, { useState } from 'react';
import { useAuth } from '@/context/auth';
import { Button } from "@/components/ui/button";
import { Loader2, Check, X, CreditCard } from 'lucide-react';

const SubscriptionStatus = () => {
  const { hasSubscription, checkingSubscription, createSubscription, createBillingPortal } = useAuth();
  const [isCreatingSubscription, setIsCreatingSubscription] = useState(false);
  const [isOpeningPortal, setIsOpeningPortal] = useState(false);

  const handleSubscribe = async () => {
    setIsCreatingSubscription(true);
    try {
      const checkoutUrl = await createSubscription();
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } finally {
      setIsCreatingSubscription(false);
    }
  };

  const handleManageBilling = async () => {
    setIsOpeningPortal(true);
    try {
      const portalUrl = await createBillingPortal();
      if (portalUrl) {
        window.location.href = portalUrl;
      }
    } finally {
      setIsOpeningPortal(false);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-serif font-semibold mb-4">Subscription</h3>

      {checkingSubscription ? (
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Loader2 className="animate-spin h-4 w-4" />
          <span>Checking subscription...</span>
        </div>
      ) : hasSubscription ? (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-bible-success">
            <Check className="h-5 w-5" />
            <span className="font-medium">Active Subscription</span>
          </div>
          <p className="text-sm text-muted-foreground">
            You have an active Bible Explorer Premium subscription. Enjoy full access to all content!
          </p>
          <Button
            onClick={handleManageBilling}
            disabled={isOpeningPortal}
            variant="outline"
          >
            {isOpeningPortal ? (
              <>
                <Loader2 className="animate-spin h-4 w-4" />
                Opening...
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4" />
                Manage Billing
              </>
            )}
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-destructive">
            <X className="h-5 w-5" />
            <span className="font-medium">No Active Subscription</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Upgrade to Bible Explorer Premium for $2.99/month to unlock all content and features.
          </p>
          <Button onClick={handleSubscribe} disabled={isCreatingSubscription}>
            {isCreatingSubscription ? (
              <>
                <Loader2 className="animate-spin h-4 w-4" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4" />
                Subscribe Now — $2.99/month
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SubscriptionStatus;
