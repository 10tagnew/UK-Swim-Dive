import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import CoachesPage from '@/pages/coaches';
import CulturePage from '@/pages/culture';
import FacilitiesPage from '@/pages/facilities';
import Home from '@/pages/home';
import MensPage from '@/pages/mens';
import NotFound from '@/pages/not-found';
import WomensPage from '@/pages/womens';
import { ScrollToTop } from '@/site/chrome';

const queryClient = new QueryClient();

function Router() {
  return (
    <RoutedErrorBoundary>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/mens" component={MensPage} />
        <Route path="/womens" component={WomensPage} />
        <Route path="/facilities" component={FacilitiesPage} />
        <Route path="/coaches" component={CoachesPage} />
        <Route path="/culture" component={CulturePage} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
