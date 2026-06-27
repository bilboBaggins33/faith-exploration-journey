import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import MessageScreen from '@/components/MessageScreen';

/**
 * Branded fallback for any error thrown during routing/render. Wired to the root
 * route's `errorElement` so users never see React Router's raw error screen.
 */
const RouteError = () => {
  const error = useRouteError();

  let title = 'Something went wrong';
  let description =
    'An unexpected error occurred. Try reloading the page — if it keeps happening, please head back home.';

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = 'Page not found';
      description = "We couldn't find the page you were looking for.";
    } else {
      title = `${error.status} ${error.statusText}`;
      description = error.data?.message || description;
    }
  }

  return (
    <MessageScreen
      icon={<AlertTriangle className="h-8 w-8" />}
      eyebrow="Bible Quest"
      title={title}
      description={description}
      actions={[
        {
          label: 'Reload',
          onClick: () => window.location.reload(),
          icon: <RefreshCw className="mr-2 h-4 w-4" />,
        },
        {
          label: 'Return Home',
          to: '/',
          variant: 'outline',
          icon: <Home className="mr-2 h-4 w-4" />,
        },
      ]}
    />
  );
};

export default RouteError;
