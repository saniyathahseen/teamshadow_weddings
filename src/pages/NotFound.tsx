import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTE_PATHS } from '@/config/site';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-24 text-center">
      <div className="max-w-lg">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Page not found
        </p>
        <h1 className="mb-6 text-5xl md:text-7xl">The moment has moved on</h1>
        <p className="mb-8 text-muted-foreground">
          The page you requested does not exist or may have moved. Return to the
          home page to continue exploring our work.
        </p>
        <Button asChild>
          <Link to={ROUTE_PATHS.HOME}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return home
          </Link>
        </Button>
      </div>
    </section>
  );
}
