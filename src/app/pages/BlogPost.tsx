import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router';
import {
  Clock,
  ArrowLeft,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  ChevronRight,
} from 'lucide-react';

export function BlogPost() {
  useParams();
  const [activeSection, setActiveSection] = useState('introduction');

  // Mock data - in real app, fetch based on id
  const post = {
    title: 'Building Modern Web Applications with Clickotion',
    author: 'Sarah Chen',
    date: 'March 20, 2026',
    readTime: '8 min read',
    category: 'Tutorial',
    image:
      'https://images.unsplash.com/photo-1732203971761-e9d4a6f5e93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDc1OTM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    authorAvatar:
      'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NDcyNzc0NHww&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const tableOfContents = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'best-practices', label: 'Best Practices' },
    { id: 'advanced-features', label: 'Advanced Features' },
    { id: 'conclusion', label: 'Conclusion' },
  ];

  const relatedPosts = [
    {
      id: 2,
      title: 'The Future of No-Code Development',
      image:
        'https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzc0NzY2NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: '10 UI/UX Best Practices for SaaS Products',
      image:
        'https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0JTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzc0NzY3NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="relative pt-32 pb-20 px-6">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Hero */}
      <article className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <span className="px-4 py-2 rounded-full bg-[var(--accent-glow)] border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] text-sm">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl mb-6 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
              />
              <div>
                <div className="text-white">{post.author}</div>
                <div className="text-sm text-gray-400">{post.date}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{post.readTime}</span>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-gray-400" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-gray-400" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-gray-400" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-3xl overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
          </div>
        </motion.div>

        {/* Content with TOC */}
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Table of Contents - Sticky */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32">
              <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                      activeSection === item.id
                        ? 'bg-[var(--accent-glow)] text-[var(--accent-primary)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-invert max-w-none">
              <section id="introduction" className="mb-12">
                <h2 className="text-3xl mb-4">Introduction</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  In today&apos;s fast-paced digital landscape, the ability to quickly build and deploy
                  web applications is more important than ever. Clickotion revolutionizes this
                  process by providing developers and creators with powerful tools that streamline
                  development without sacrificing quality or flexibility.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  This comprehensive guide will walk you through everything you need to know to
                  build modern, production-ready applications using Clickotion&apos;s platform.
                </p>
              </section>

              <section id="getting-started" className="mb-12">
                <h2 className="text-3xl mb-4">Getting Started</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  The first step in your Clickotion journey is understanding the core concepts that
                  make the platform so powerful. Whether you&apos;re coming from traditional development
                  or exploring no-code tools for the first time, Clickotion&apos;s intuitive interface
                  will feel familiar yet refreshingly efficient.
                </p>

                {/* Code Block */}
                <div className="my-6 p-6 rounded-xl bg-slate-800/50 border border-white/10">
                  <code className="text-sm text-[var(--accent-primary)] font-mono">
                    {`import { createApp } from 'clickotion';

const app = createApp({
  template: 'saas-landing',
  theme: 'modern',
  features: ['analytics', 'auth']
});

app.deploy();`}
                  </code>
                </div>
              </section>

              <section id="best-practices" className="mb-12">
                <h2 className="text-3xl mb-4">Best Practices</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Following industry best practices ensures your applications are maintainable,
                  scalable, and performant. Here are the key principles to keep in mind:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Keep components modular and reusable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">
                      Optimize images and assets for web delivery
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">
                      Implement proper error handling and loading states
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">
                      Test across different devices and browsers
                    </span>
                  </li>
                </ul>
              </section>

              <section id="advanced-features" className="mb-12">
                <h2 className="text-3xl mb-4">Advanced Features</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Once you&apos;re comfortable with the basics, Clickotion offers advanced features that
                  unlock even more possibilities. From custom integrations to advanced animation
                  systems, these tools help you create truly unique experiences.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The platform&apos;s extensible architecture means you can integrate with virtually any
                  third-party service or API, giving you complete control over your application&apos;s
                  functionality.
                </p>
              </section>

              <section id="conclusion" className="mb-12">
                <h2 className="text-3xl mb-4">Conclusion</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Building modern web applications doesn&apos;t have to be complicated. With Clickotion,
                  you have all the tools you need to create professional, scalable applications
                  quickly and efficiently.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Ready to start building? Sign up for Clickotion today and experience the future of
                  web development.
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-16 p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="flex items-start gap-6">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="w-20 h-20 rounded-2xl object-cover ring-2 ring-white/10"
            />
            <div>
              <h3 className="text-2xl mb-2">{post.author}</h3>
              <p className="text-gray-400 leading-relaxed">
                Senior Product Designer at Clickotion. Passionate about creating intuitive user
                experiences and helping teams build better products.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20">
          <h2 className="text-3xl mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                <div className="group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl group-hover:text-[var(--accent-primary)] transition-colors">
                      {relatedPost.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
