import React from 'react';
import { Link, Outlet } from 'react-router';
import { motion } from 'motion/react';
import logo from '../assets/006e9bf752f79a6e5e828e1688b8729e6191fbc7.png';
import iconLogo from '../assets/logo.svg';
import authBg from '../assets/photo-1603665301175-57ba46f392bf.jpg';
import { Shield, Users } from 'lucide-react';

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-slate-950 text-white selection:bg-blue-500/30">
      {/* Left Side: Branding & Visuals */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:flex flex-col relative overflow-hidden p-12 lg:p-16 justify-between"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={authBg}
            alt="Auth Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" />
        </div>

        {/* Top: Logo */}
        <Link to="/" className="z-20 flex">
          <img src={logo} alt="Clickotion Icon" className="h-10" />
        </Link>

        {/* Middle: Value Prop */}
        <div className="relative z-10 max-w-lg">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight"
          >
            Build faster.<br />Launch smarter.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-blue-100/80 leading-relaxed mb-12"
          >
            The ultimate operating system for your team. Streamline your workflow, manage projects, and scale your business all in one place.
          </motion.p>

          {/* Social Proof / Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-blue-400/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-400" />
              </div>
              <div className="font-semibold text-white">300+ Users</div>
              <div className="text-sm text-blue-200/60">Trusted by modern teams globally.</div>
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-indigo-400/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="font-semibold text-white">Secure Auth</div>
              <div className="text-sm text-blue-200/60">Enterprise-grade security standards.</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Footer Info */}
        <div className="relative z-10 text-sm text-blue-100/40">
          © 2026 Clickotion Inc. All rights reserved.
        </div>
      </motion.div>

      {/* Right Side: Auth Forms */}
      <div className="flex flex-col min-h-screen">
        {/* Mobile Logo */}
        <div className="lg:hidden p-6 flex justify-center">
          <Link to="/" className="flex items-center gap-2">
            <img src={iconLogo} alt="Clickotion" className="h-8" />
            <span className="text-xl font-bold">Clickotion</span>
          </Link>
        </div>

        <main className="flex-1 flex items-center justify-center p-6 sm:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <Outlet />
          </motion.div>
        </main>

        <footer className="p-6 text-center text-sm text-slate-500 lg:hidden">
          © 2026 Clickotion Inc.
        </footer>
      </div>
    </div>
  );
}
