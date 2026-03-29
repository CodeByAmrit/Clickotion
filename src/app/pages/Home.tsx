import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Sparkles, 
  Zap, 
  Layout, 
  Layers, 
  Blocks, 
  Gauge, 
  ArrowRight,
  Play,
  Code2,
  Rocket,
  Users,
  BarChart3,
  Star,
  Check
} from 'lucide-react';
import { Button } from '../components/Button';
import { FeatureCard } from '../components/FeatureCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { PricingCard } from '../components/PricingCard';
import { FAQItem } from '../components/FAQItem';
import { FloatingObjects } from '../components/FloatingObjects';

export function Home() {
  const [activeTab, setActiveTab] = useState('builder');
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <FloatingObjects />
      
      <div className="relative">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -right-48 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Hero Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm">Build faster than ever</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight">
                  Build <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">stunning</span> websites in minutes
                </h1>
                
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  The ultimate platform for developers, startups, and agencies to create professional websites, dashboards, and tools without the complexity.
                </p>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center">
                    Start Building <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </Button>
                </div>
                
                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-400">4.8 rating</span>
                  </div>
                  <div className="text-sm text-gray-400">300+ customers</div>
                  <div className="text-sm text-gray-400">99.9% uptime</div>
                </div>
              </motion.div>

              {/* Right: Interactive Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10">
                  {/* Dashboard Header */}
                  <div className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="flex-1 px-4 py-1.5 bg-slate-700/50 rounded-lg text-sm text-gray-400">
                        clickotion.app/builder
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-6">
                    <img 
                      src="https://images.unsplash.com/photo-1732203971761-e9d4a6f5e93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDc1OTM1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Dashboard Interface"
                      className="w-full h-auto rounded-xl"
                    />
                    
                    {/* Floating Animation Cards */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-24 -left-6 p-4 rounded-2xl bg-blue-500/20 backdrop-blur-xl border border-white/20 shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <div className="text-sm text-white">Deploy Complete</div>
                          <div className="text-xs text-gray-400">2 mins ago</div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                      className="absolute bottom-24 -right-6 p-4 rounded-2xl bg-indigo-500/20 backdrop-blur-xl border border-white/20 shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm text-white">Lightning Fast</div>
                          <div className="text-xs text-gray-400">98/100 score</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust & Social Proof */}
        <section className="py-12 md:py-16 px-4 md:px-6 border-y border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-400 mb-12">Trusted by innovative teams worldwide</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-50">
              {['Vercel', 'GitHub', 'Stripe', 'Linear', 'Notion'].map((brand) => (
                <div key={brand} className="text-center text-2xl text-white/60">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl mb-4">
                Loved by <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">creators</span>
              </h2>
              <p className="text-xl text-gray-400">See what our users have to say</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Sarah Chen"
                role="Product Designer"
                company="TechCorp"
                content="Clickotion transformed how we build landing pages. What used to take weeks now takes hours. The UI is intuitive and the results are stunning."
                avatar="https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3NDcyNzc0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                rating={5}
              />
              <TestimonialCard
                name="Michael Rodriguez"
                role="Founder"
                company="StartupXYZ"
                content="As a non-developer, I was able to create a professional website for my startup in a single afternoon. The templates are amazing and customization is a breeze."
                avatar="https://images.unsplash.com/photo-1622626426572-c268eb006092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDcxODc4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                rating={5}
              />
              <TestimonialCard
                name="Emily Watson"
                role="Lead Developer"
                company="Agency Pro"
                content="We've used many builders before, but Clickotion is different. It's fast, flexible, and actually produces clean code. Our clients love the results."
                avatar="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDY3OTU3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section id="features" className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl mb-4">
                Everything you need to <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">build faster</span>
              </h2>
              <p className="text-xl text-gray-400">Powerful features that make web development effortless</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Layout className="w-6 h-6" />}
                title="Drag & Drop Builder"
                description="Intuitive visual editor that lets you design by simply dragging and dropping components. No coding required."
                index={0}
              />
              <FeatureCard
                icon={<Layers className="w-6 h-6" />}
                title="Pre-built Templates"
                description="Start with professionally designed templates for landing pages, dashboards, and more. Customize to match your brand."
                index={1}
              />
              <FeatureCard
                icon={<Zap className="w-6 h-6" />}
                title="Lightning Performance"
                description="Optimized builds and CDN delivery ensure your sites load in milliseconds. Built for speed from the ground up."
                index={2}
              />
              <FeatureCard
                icon={<Blocks className="w-6 h-6" />}
                title="Flexible Customization"
                description="Full control over every aspect of your design. Add custom code, integrate APIs, and extend functionality easily."
                index={3}
              />
              <FeatureCard
                icon={<Gauge className="w-6 h-6" />}
                title="Real-time Collaboration"
                description="Work together with your team in real-time. See changes instantly and ship faster together."
                index={4}
              />
              <FeatureCard
                icon={<Code2 className="w-6 h-6" />}
                title="Clean Code Export"
                description="Export production-ready code in React, Vue, or vanilla HTML/CSS. Own your code completely."
                index={5}
              />
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl mb-4">See it in action</h2>
              <p className="text-xl text-gray-400">Explore the powerful features that make Clickotion unique</p>
            </motion.div>

            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-12">
              {[
                { id: 'builder', label: 'Builder', icon: Layout },
                { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                { id: 'analytics', label: 'Analytics', icon: Gauge }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src={
                  activeTab === 'builder' 
                    ? "https://images.unsplash.com/photo-1732203971761-e9d4a6f5e93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDc1OTM1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    : activeTab === 'dashboard'
                    ? "https://images.unsplash.com/photo-1608306448197-e83633f1261c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBzY3JlZW58ZW58MXx8fHwxNzc0NzY2NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    : "https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzQ2Njg3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                }
                alt={activeTab}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl mb-4">Built for everyone</h2>
              <p className="text-xl text-gray-400">Whether you're a developer, startup, or agency</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.5 }}
                className="relative group"
              >
                <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <Code2 className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl mb-4 text-white">For Developers</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      Skip the boilerplate and focus on what matters. Export clean, production-ready code and integrate with your existing workflow.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-blue-400" />
                        <span>Ship 10x faster</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-blue-400" />
                        <span>Full code ownership</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-blue-400" />
                        <span>API integrations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Rocket className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl mb-4 text-white">For Startups</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      Launch your MVP in days, not months. Beautiful templates and rapid iteration to validate your ideas quickly.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-indigo-400" />
                        <span>Launch in 48 hours</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-indigo-400" />
                        <span>Scale with demand</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-indigo-400" />
                        <span>Investor-ready designs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative group"
              >
                <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                      <Users className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl mb-4 text-white">For Agencies</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      Deliver more projects with less effort. White-label solutions and team collaboration tools to grow your revenue.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span>3x more clients</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span>White-label options</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-purple-400" />
                        <span>Team management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white/5 backdrop-blur-sm border-y border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '300+', label: 'Active Customers' },
                { value: '10k+', label: 'Sites Created' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '4.8/5', label: 'User Rating' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl mb-4">
                Simple, <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">transparent</span> pricing
              </h2>
              <p className="text-xl text-gray-400 mb-8">Choose the plan that fits your needs</p>
              
              {/* Yearly Toggle */}
              <div className="inline-flex items-center gap-3 p-1 rounded-full bg-white/5 border border-white/10">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    !isYearly ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-400'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    isYearly ? 'bg-blue-500 text-white shadow-lg' : 'text-gray-400'
                  }`}
                >
                  Yearly
                  <span className="ml-2 text-xs text-green-400">Save 20%</span>
                </button>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PricingCard
                name="Starter"
                price={29}
                yearlyPrice={279}
                description="Perfect for individuals and small projects"
                features={[
                  '5 active projects',
                  'Basic templates',
                  'Community support',
                  'SSL certificates',
                  'Custom domains',
                  'Analytics dashboard'
                ]}
                isYearly={isYearly}
                index={0}
              />
              <PricingCard
                name="Professional"
                price={79}
                yearlyPrice={759}
                description="For growing teams and businesses"
                features={[
                  'Unlimited projects',
                  'Premium templates',
                  'Priority support',
                  'Team collaboration',
                  'Advanced integrations',
                  'Custom code export',
                  'A/B testing',
                  'White-label options'
                ]}
                popular={true}
                isYearly={isYearly}
                index={1}
              />
              <PricingCard
                name="Enterprise"
                price={199}
                yearlyPrice={1899}
                description="For large-scale operations"
                features={[
                  'Everything in Pro',
                  'Dedicated account manager',
                  '24/7 phone support',
                  'Custom contracts',
                  'SLA guarantees',
                  'On-premise deployment',
                  'Advanced security',
                  'Training & onboarding'
                ]}
                isYearly={isYearly}
                index={2}
              />
            </div>

            <p className="text-center text-gray-400 mt-8">
              All plans include: No credit card required · Cancel anytime · 14-day money-back guarantee
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24 px-4 md:px-6 bg-white/5 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl mb-4">Frequently asked questions</h2>
              <p className="text-xl text-gray-400">Everything you need to know about Clickotion</p>
            </motion.div>

            <div className="space-y-1">
              <FAQItem
                question="How does Clickotion compare to other builders?"
                answer="Clickotion is built specifically for modern web development. Unlike traditional builders, we generate clean, production-ready code that you own completely. Our platform combines the ease of visual editing with the power and flexibility developers need."
              />
              <FAQItem
                question="Can I export my code?"
                answer="Yes! With our Professional and Enterprise plans, you can export your entire project as clean React, Vue, or vanilla HTML/CSS code. You have complete ownership and can host it anywhere you want."
              />
              <FAQItem
                question="Do I need coding knowledge?"
                answer="Not at all! Clickotion is designed to be intuitive for non-developers. However, if you do have coding knowledge, you can take full advantage of our advanced customization options and code export features."
              />
              <FAQItem
                question="What kind of support do you offer?"
                answer="We offer community support for Starter plans, priority email and chat support for Professional plans, and 24/7 phone support with a dedicated account manager for Enterprise customers."
              />
              <FAQItem
                question="Can I upgrade or downgrade my plan?"
                answer="Absolutely! You can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle."
              />
              <FAQItem
                question="Is there a free trial?"
                answer="Yes! All plans come with a 14-day free trial, no credit card required. You'll have full access to all features during your trial period."
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl mb-6">
                Ready to build something <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">amazing?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join thousands of developers, startups, and agencies building the web with Clickotion
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Start Building for Free <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
