import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { FloatingObjects } from '../components/FloatingObjects';

export function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'SaaS Dashboard',
      category: 'dashboards',
      tags: ['React', 'Analytics', 'SaaS'],
      image:
        'https://images.unsplash.com/photo-1732203971761-e9d4a6f5e93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDc1OTM1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Modern analytics dashboard for tracking business metrics',
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'websites',
      tags: ['Next.js', 'E-commerce', 'Stripe'],
      image:
        'https://images.unsplash.com/photo-1606868305342-c2ec6012cf48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGlzcGxheXxlbnwxfHx8fDE3NzQ3Njc0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Full-featured online store with seamless checkout',
    },
    {
      id: 3,
      title: 'Project Management Tool',
      category: 'tools',
      tags: ['React', 'Collaboration', 'Productivity'],
      image:
        'https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzQ2Njg3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Team collaboration platform for managing tasks and projects',
    },
    {
      id: 4,
      title: 'Startup Landing Page',
      category: 'websites',
      tags: ['Landing Page', 'SaaS', 'Marketing'],
      image:
        'https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0JTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzc0NzY3NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'High-conversion landing page for B2B SaaS product',
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      category: 'dashboards',
      tags: ['Vue', 'Data Viz', 'Charts'],
      image:
        'https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzc0NzY2NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Real-time analytics with beautiful data visualizations',
    },
    {
      id: 6,
      title: 'Marketing Website',
      category: 'websites',
      tags: ['Marketing', 'SEO', 'Responsive'],
      image:
        'https://images.unsplash.com/photo-1702046988296-40db18f155ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NDczMTgzMXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'SEO-optimized website with stunning visuals',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'websites', label: 'Websites' },
    { id: 'dashboards', label: 'Dashboards' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

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
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Explore projects built with Clickotion—from stunning websites to powerful dashboards
            </p>
          </motion.div>
        </section>

        {/* Filters */}
        <section className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative h-full rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-xl">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto text-center mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              Ready to build your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                project?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Start creating stunning websites and applications today
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-500/25">
              Get Started
            </button>
          </motion.div>
        </section>
      </div>
    </>
  );
}
