import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Wraps non-critical, background UI (e.g. the global AchievementWatcher) so that
 * if it throws during render it silently renders nothing instead of crashing the
 * entire app. Primarily a safety net for transient states (HMR, slow context
 * hydration); the wrapped component is never essential to the page.
 */
class SilentErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default SilentErrorBoundary;
