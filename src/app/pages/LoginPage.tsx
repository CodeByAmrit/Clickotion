import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { GoogleIcon } from '../components/GoogleIcon';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

export function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold tracking-tight text-white"
        >
          Welcome back
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400"
        >
          Login to continue your journey
        </motion.p>
      </div>

      {/* Social Login */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <Button 
          variant="secondary" 
          className="w-full h-12 gap-3 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 rounded-xl"
        >
          <GoogleIcon className="w-5 h-5" />
          <span className="font-semibold">Continue with Google</span>
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-950 px-2 text-slate-500 font-medium tracking-wider">
              Or continue with email
            </span>
          </div>
        </div>
      </motion.div>

      {/* Form */}
      <motion.form 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onSubmit={handleSubmit} 
        className="space-y-5"
      >
        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-200 ml-1">Email Address</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="name@company.com" 
            required 
            className="h-12 bg-white/5 border-slate-800 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl transition-all duration-200"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <Label htmlFor="password" title="password" className="text-slate-200">Password</Label>
            <Link 
              to="/forgot-password" 
              className="text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
            >
              Forgot?
            </Link>
          </div>
          <div className="relative">
            <Input 
              id="password" 
              type={showPassword ? 'text' : 'password'} 
              placeholder="••••••••" 
              required 
              className="h-12 bg-white/5 border-slate-800 focus:border-brand/50 focus:ring-brand/20 rounded-xl pr-10 transition-all duration-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2 ml-1">
          <Checkbox id="remember" className="border-slate-800 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" />
          <Label 
            htmlFor="remember" 
            className="text-sm font-medium text-slate-400 cursor-pointer select-none"
          >
            Remember me
          </Label>
        </div>

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full h-12 text-lg font-semibold rounded-xl group"
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Login
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </motion.form>

      {/* Footer */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-slate-400"
      >
        Don&apos;t have an account?{' '}
        <Link 
          to="/signup" 
          className="font-bold text-blue-500 hover:text-blue-400 underline-offset-4 hover:underline transition-all"
        >
          Sign up for free
        </Link>
      </motion.p>
    </div>
  );
}
