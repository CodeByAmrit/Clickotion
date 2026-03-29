import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Book,
  Code,
  Rocket,
  Settings,
  ChevronRight,
  Copy,
  ThumbsUp,
  ThumbsDown,
} from 'lucide-react';

export function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');
  const [copiedCode, setCopiedCode] = useState(false);

  const navigation = [
    {
      title: 'Getting Started',
      icon: Rocket,
      items: [
        { id: 'getting-started', label: 'Introduction' },
        { id: 'installation', label: 'Installation' },
        { id: 'quick-start', label: 'Quick Start' },
      ],
    },
    {
      title: 'Core Concepts',
      icon: Book,
      items: [
        { id: 'components', label: 'Components' },
        { id: 'templates', label: 'Templates' },
        { id: 'styling', label: 'Styling' },
      ],
    },
    {
      title: 'API Reference',
      icon: Code,
      items: [
        { id: 'api-overview', label: 'Overview' },
        { id: 'api-auth', label: 'Authentication' },
        { id: 'api-endpoints', label: 'Endpoints' },
      ],
    },
    {
      title: 'Configuration',
      icon: Settings,
      items: [
        { id: 'config-overview', label: 'Overview' },
        { id: 'config-deployment', label: 'Deployment' },
        { id: 'config-env', label: 'Environment' },
      ],
    },
  ];

  const handleCopyCode = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative pt-32 pb-20">
      {/* Search Header */}
      <div className="sticky top-20 z-40 backdrop-blur-xl bg-background/80 border-b border-primary/10 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-glass border border-primary/10 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <div className="sticky top-44 space-y-8">
                {navigation.map((section, i) => {
                  const Icon = section.icon;
                  return (
                    <div key={i}>
                      <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                        <Icon className="w-4 h-4" />
                        <span>{section.title}</span>
                      </div>
                      <nav className="space-y-1">
                        {section.items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                              activeSection === item.id
                                ? 'bg-[var(--accent-glow)] text-[var(--accent-primary)]'
                                : 'text-muted-foreground hover:text-foreground hover:bg-glass'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </nav>
                    </div>
                  );
                })}
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Getting Started Content */}
                {activeSection === 'getting-started' && (
                  <article className="prose prose-invert max-w-none">
                    <h1 className="text-4xl lg:text-5xl mb-6">Getting Started with Clickotion</h1>

                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                      Welcome to Clickotion! This guide will help you get up and running with our
                      platform in minutes.
                    </p>

                    <div className="p-6 rounded-2xl bg-[var(--accent-glow)] border border-[var(--accent-primary)]/20 mb-8">
                      <h3 className="text-lg mb-2 text-[var(--accent-primary)]">What you&apos;ll learn</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-[var(--accent-primary)]" />
                          <span>Setting up your Clickotion account</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-[var(--accent-primary)]" />
                          <span>Creating your first project</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-[var(--accent-primary)]" />
                          <span>Understanding core concepts</span>
                        </li>
                      </ul>
                    </div>

                    <h2 className="text-3xl mb-4 mt-12">Prerequisites</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Before you begin, make sure you have:
                    </p>
                    <ul className="space-y-2 mb-8">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 mt-0.5 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-400 text-xs">✓</span>
                        </div>
                        <span className="text-muted-foreground">
                          A Clickotion account (sign up for free)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 mt-0.5 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-400 text-xs">✓</span>
                        </div>
                        <span className="text-muted-foreground">
                          Basic understanding of web development (optional)
                        </span>
                      </li>
                    </ul>

                    <h2 className="text-3xl mb-4 mt-12">Installation</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Install the Clickotion CLI tool to get started:
                    </p>

                    {/* Interactive Code Block */}
                    <div className="relative group mb-8">
                      <div className="absolute top-4 right-4 z-10">
                        <button
                          onClick={handleCopyCode}
                          className="px-3 py-1.5 rounded-lg bg-glass hover:bg-glass/80 border border-primary/10 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                        >
                          <Copy className="w-4 h-4" />
                          <span>{copiedCode ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>

                      <div className="p-6 rounded-2xl bg-card border border-primary/10 overflow-x-auto">
                        <pre className="text-sm">
                          <code className="text-[var(--accent-primary)] font-mono">
                            {`npm install -g clickotion-cli
# or
yarn global add clickotion-cli`}
                          </code>
                        </pre>
                      </div>
                    </div>

                    <h2 className="text-3xl mb-4 mt-12">Create Your First Project</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Once installed, create a new project using the CLI:
                    </p>

                    <div className="p-6 rounded-2xl bg-card border border-primary/10 mb-8">
                      <pre className="text-sm">
                        <code className="text-green-300 font-mono">
                          {`clickotion create my-awesome-project
cd my-awesome-project
clickotion dev`}
                        </code>
                      </pre>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-8">
                      Your project will be available at{' '}
                      <code className="px-2 py-1 rounded bg-glass text-[var(--accent-primary)]">
                        http://localhost:3000
                      </code>
                    </p>

                    {/* Tabs Example */}
                    <div className="mt-12">
                      <h2 className="text-3xl mb-4">Choose Your Framework</h2>
                      <div className="flex gap-2 mb-6">
                        {['React', 'Vue', 'Svelte'].map((framework) => (
                          <button
                            key={framework}
                            className="px-4 py-2 rounded-lg bg-glass hover:bg-glass-80 border border-primary/10 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {framework}
                          </button>
                        ))}
                      </div>

                      <div className="p-6 rounded-2xl bg-card border border-primary/10">
                        <pre className="text-sm">
                          <code className="text-purple-300 font-mono">
                            {`import { Clickotion } from 'clickotion-react';

function App() {
  return (
    <Clickotion template="landing-page">
      <h1>Welcome to Clickotion</h1>
    </Clickotion>
  );
}`}
                          </code>
                        </pre>
                      </div>
                    </div>

                    {/* Next Steps */}
                    <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-[var(--accent-primary)]/20">
                      <h2 className="text-2xl mb-4">Next Steps</h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-colors group">
                          <h3 className="text-lg mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                            Components →
                          </h3>
                          <p className="text-sm text-muted-foreground">Learn about reusable components</p>
                        </button>
                        <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-colors group">
                          <h3 className="text-lg mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                            Templates →
                          </h3>
                          <p className="text-sm text-muted-foreground">Explore pre-built templates</p>
                        </button>
                      </div>
                    </div>

                    {/* Feedback */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                      <p className="text-muted-foreground mb-4">Was this page helpful?</p>
                      <div className="flex gap-3">
                        <button className="px-4 py-2 rounded-lg bg-glass hover:bg-green-500/20 border border-primary/10 hover:border-green-500/50 text-muted-foreground hover:text-green-400 transition-all flex items-center gap-2">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Yes</span>
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-glass hover:bg-red-500/20 border border-primary/10 hover:border-red-500/50 text-muted-foreground hover:text-red-400 transition-all flex items-center gap-2">
                          <ThumbsDown className="w-4 h-4" />
                          <span>No</span>
                        </button>
                      </div>
                    </div>
                  </article>
                )}

                {/* Other sections would have similar detailed content */}
                {activeSection !== 'getting-started' && (
                  <article className="prose prose-invert max-w-none">
                    <h1 className="text-4xl lg:text-5xl mb-6">
                      {
                        navigation.flatMap((s) => s.items).find((i) => i.id === activeSection)
                          ?.label
                      }
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                      Documentation content for this section coming soon...
                    </p>
                  </article>
                )}

                {/* Quick Navigation */}
                <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    ← Previous
                  </button>
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    Next →
                  </button>
                </div>
              </motion.div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
