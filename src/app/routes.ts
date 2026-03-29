import { createBrowserRouter } from 'react-router';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { BlogListing } from './pages/BlogListing';
import { BlogPost } from './pages/BlogPost';
import { Contact } from './pages/Contact';
import { Documentation } from './pages/Documentation';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'about',
        Component: About
      },
      {
        path: 'portfolio',
        Component: Portfolio
      },
      {
        path: 'blog',
        Component: BlogListing
      },
      {
        path: 'blog/:id',
        Component: BlogPost
      },
      {
        path: 'contact',
        Component: Contact
      },
      {
        path: 'docs',
        Component: Documentation
      },
      {
        path: 'docs/:section',
        Component: Documentation
      },
      {
        path: '*',
        Component: NotFound
      }
    ]
  }
], {
  basename: '/Clickotion'
});