import React from 'react';
import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export function NotFound() {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-8xl lg:text-9xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-4xl lg:text-5xl mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-400 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/">
            <Button variant="primary" size="lg">
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <button onClick={() => window.history.back()}>
            <Button variant="secondary" size="lg">
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
}
