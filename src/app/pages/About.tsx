import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Zap, Users, Award, Globe } from 'lucide-react';
import { Button } from '../components/Button';
import { FloatingObjects } from '../components/FloatingObjects';

export function About() {
  const team = [
    {
      name: 'Alex Morgan',
      role: 'CEO & Co-founder',
      avatar:
        'https://images.unsplash.com/photo-1622626426572-c268eb006092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDcxODc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Co-founder',
      avatar:
        'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NDcyNzc0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Product',
      avatar:
        'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDY3OTU3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Emily Watson',
      role: 'Lead Designer',
      avatar:
        'https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NDcyNzc0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const values = [
    {
      icon: Zap,
      title: 'Speed First',
      description: 'We believe in rapid development without compromising quality.',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: "Every decision is made with our users' success in mind.",
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Building tools that everyone can use, anywhere.',
    },
  ];

  return (
    <>
      <FloatingObjects />

      <div className="relative pt-32 pb-20 px-6">
        {/* Hero */}
        <section className="max-w-4xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
              We build tools that{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                simplify
              </span>{' '}
              web creation
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Empowering creators worldwide to build amazing digital experiences without the
              complexity
            </p>
          </motion.div>
        </section>

        {/* Story */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Clickotion was born from frustration. We saw talented designers and developers
                  wasting hours on repetitive tasks, fighting with complex tools, and struggling to
                  bring their visions to life.
                </p>
                <p>
                  In 2024, we set out to change that. We built Clickotion to be the platform we
                  wished existed—fast, flexible, and focused on what matters: creating great web
                  experiences.
                </p>
                <p>
                  Today, thousands of teams use Clickotion to build websites, dashboards, and tools
                  that power their businesses. We&apos;re just getting started.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1758691737045-3ece61135061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nJTIwYnJhaW5zdG9ybXxlbnwxfHx8fDE3NzQ3Njc0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <Target className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-3xl mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To democratize web development by making professional-grade tools accessible to
                everyone, from solo creators to enterprise teams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <Award className="w-12 h-12 text-indigo-400 mb-6" />
              <h3 className="text-3xl mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                A world where anyone with an idea can bring it to life on the web, without technical
                barriers or steep learning curves.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="max-w-7xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">What drives us every day</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Team */}
        <section className="max-w-7xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-400">The people building the future of web creation</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-3xl">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-5xl mx-auto mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
            {[
              { value: '50+', label: 'Team Members' },
              { value: '300+', label: 'Customers' },
              { value: '10k+', label: 'Projects' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              Join us on this{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                journey
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Start building with Clickotion today and see why thousands of teams choose us
            </p>
            <Button variant="primary" size="lg">
              Start Building <Users className="w-5 h-5" />
            </Button>
          </motion.div>
        </section>
      </div>
    </>
  );
}
