import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Clock, User, ArrowRight, Search } from 'lucide-react';
import { FloatingObjects } from '../components/FloatingObjects';

export function BlogListing() {
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      id: 1,
      title: 'Building Modern Web Applications with Clickotion',
      excerpt:
        "Learn how to leverage Clickotion's powerful features to build production-ready applications in record time.",
      author: 'Sarah Chen',
      date: 'March 20, 2026',
      readTime: '8 min read',
      category: 'Tutorial',
      image:
        'https://images.unsplash.com/photo-1732203971761-e9d4a6f5e93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDc1OTM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: 2,
      title: 'The Future of No-Code Development',
      excerpt:
        'Exploring how no-code platforms are democratizing web development and empowering creators worldwide.',
      author: 'Marcus Johnson',
      date: 'March 15, 2026',
      readTime: '6 min read',
      category: 'Industry',
      image:
        'https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzc0NzY2NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: '10 UI/UX Best Practices for SaaS Products',
      excerpt:
        'Essential design principles every SaaS product should follow to create delightful user experiences.',
      author: 'Emily Watson',
      date: 'March 10, 2026',
      readTime: '10 min read',
      category: 'Design',
      image:
        'https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0JTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzc0NzY3NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Optimizing Web Performance: A Complete Guide',
      excerpt:
        'Deep dive into performance optimization techniques that will make your websites load faster.',
      author: 'Alex Morgan',
      date: 'March 5, 2026',
      readTime: '12 min read',
      category: 'Technical',
      image:
        'https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzQ2Njg3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'From Idea to Launch: A Startup Journey',
      excerpt:
        'How we built and launched our SaaS product from scratch using modern development tools.',
      author: 'Sarah Chen',
      date: 'February 28, 2026',
      readTime: '7 min read',
      category: 'Case Study',
      image:
        'https://images.unsplash.com/photo-1702046988296-40db18f155ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NDczMTgzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Mastering React Hooks for Better Code',
      excerpt: 'Advanced patterns and best practices for using React Hooks in your applications.',
      author: 'Marcus Johnson',
      date: 'February 20, 2026',
      readTime: '9 min read',
      category: 'Technical',
      image:
        'https://images.unsplash.com/photo-1748209252552-30cf9cd32909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMGxhcHRvcCUyMGNvZmZlZXxlbnwxfHx8fDE3NzQ3Njc0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <>
      <FloatingObjects />

      <div className="relative pt-32 pb-20 px-6">
        {/* Hero */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                Insights
              </span>{' '}
              & Stories
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Tips, tutorials, and thoughts on building better web experiences
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
              />
            </div>
          </motion.div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="max-w-7xl mx-auto mb-20">
            <Link to={`/blog/${featuredPost.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--accent-glow)] border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] text-sm w-fit mb-4">
                      Featured
                    </div>

                    <h2 className="text-3xl lg:text-4xl mb-4 group-hover:text-[var(--accent-primary)] transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-gray-400 mb-6 leading-relaxed">{featuredPost.excerpt}</p>

                    <div className="flex items-center gap-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </section>
        )}

        {/* Posts Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, i) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group h-full"
                >
                  <div className="h-full rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-[var(--accent-glow)] backdrop-blur-sm border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] text-xs">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl mb-3 group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>

                        <ArrowRight className="w-4 h-4 text-[var(--accent-primary)] transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
