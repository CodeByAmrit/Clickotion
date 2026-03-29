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
  index,
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
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full text-xs font-bold text-white shadow-lg z-10 whitespace-nowrap">
          Most Popular
        </div>
      )}

      <div
        className={`h-full p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 ${popular
            ? 'bg-white/10 border-2 border-[var(--accent-primary)]/50 shadow-2xl shadow-[var(--accent-primary)]/20'
            : 'bg-white/5 border border-white/10 hover:border-white/20'
          }`}
      >
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-400 mb-5">{description}</p>

        <div className="mb-6">
          <span className="text-3xl font-bold text-white">
            ${isYearly ? yearlyPrice : price}
          </span>
          <span className="text-gray-400 ml-2">/{isYearly ? 'yr' : 'mo'}</span>
        </div>

        <Button variant={popular ? 'primary' : 'secondary'} className="w-full mb-8">
          Get Started
        </Button>

        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <Check className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
