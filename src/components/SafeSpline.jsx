import { Component, Suspense, lazy } from 'react';

const LazySpline = lazy(() => import('@splinetool/react-spline'));

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default function SafeSpline({ scene }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <LazySpline scene={scene} style={{ width: '100%', height: '100%' }} />
      </Suspense>
    </ErrorBoundary>
  );
}
