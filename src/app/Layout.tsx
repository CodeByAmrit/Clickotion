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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
