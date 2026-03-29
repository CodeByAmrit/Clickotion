import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export function Layout() {
  const location = useLocation();

  // Scroll to top on route change, or to hash if present
  useEffect(() => {
    if (location.hash) {
      // Scroll to hash element
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-main text-foreground overflow-hidden">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
