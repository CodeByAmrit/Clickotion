import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export function TestimonialCard({ name, role, company, content, avatar, rating }: TestimonialCardProps) {
  return (
    <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      <p className="text-gray-300 mb-6 leading-relaxed">"{content}"</p>
      
      <div className="flex items-center gap-4">
        <img 
          src={avatar} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
        />
        <div>
          <div className="text-white">{name}</div>
          <div className="text-sm text-gray-400">{role} at {company}</div>
        </div>
      </div>
    </div>
  );
}
