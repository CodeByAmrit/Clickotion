import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'motion/react';

interface PricingCardProps {
  name: string;
  price: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
  isYearly: boolean;
  index: number;
}

export function PricingCard({ 
  name, 
  price, 
  yearlyPrice, 
  description, 
  features, 
  popular = false,
  isYearly,
  index
}: PricingCardProps) {
  const displayPrice = isYearly ? yearlyPrice : price;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-full"
    >
      {popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-sm text-white shadow-lg">
          Most Popular
        </div>
      )}
      
      <div className={`h-full p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 ${
        popular 
          ? 'bg-white/10 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20' 
          : 'bg-white/5 border border-white/10 hover:border-white/20'
      }`}>
        <h3 className="text-2xl text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl text-white">${displayPrice}</span>
            <span className="text-gray-400">/{isYearly ? 'year' : 'month'}</span>
          </div>
          {isYearly && (
            <p className="text-sm text-green-400 mt-2">Save ${(price * 12 - yearlyPrice)} per year</p>
          )}
        </div>
        
        <Button 
          variant={popular ? 'primary' : 'secondary'} 
          className="w-full mb-8"
        >
          Get Started
        </Button>
        
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-blue-400" />
              </div>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
