import React from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, MousePointer2 as Cursor, Terminal, Box, Layers } from 'lucide-react';

export function FloatingObjects() {
  const objects = [
    { 
      icon: Code2, 
      delay: 0, 
      duration: 15,
      position: { top: '20%', left: '10%' },
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Palette, 
      delay: 2, 
      duration: 18,
      position: { top: '60%', left: '15%' },
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Cursor, 
      delay: 1, 
      duration: 12,
      position: { top: '30%', right: '15%' },
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Terminal, 
      delay: 3, 
      duration: 20,
      position: { bottom: '30%', right: '20%' },
      color: 'from-orange-500 to-yellow-500'
    },
    { 
      icon: Box, 
      delay: 1.5, 
      duration: 16,
      position: { top: '50%', left: '5%' },
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      icon: Layers, 
      delay: 2.5, 
      duration: 14,
      position: { bottom: '20%', right: '10%' },
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {objects.map((obj, index) => {
        const Icon = obj.icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={obj.position}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: obj.duration,
              repeat: Infinity,
              delay: obj.delay,
              ease: "easeInOut"
            }}
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${obj.color} opacity-10 flex items-center justify-center backdrop-blur-sm`}>
              <Icon className="w-8 h-8 text-white opacity-50" />
            </div>
          </motion.div>
        );
      })}
      
      {/* Floating Code Snippet */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="p-4 rounded-xl bg-slate-800/10 backdrop-blur-sm border border-white/5">
          <code className="text-xs text-blue-400/30 font-mono">
            {'<div className="hero" />'}
          </code>
        </div>
      </motion.div>

      {/* Floating UI Element */}
      <motion.div
        className="absolute bottom-1/3 left-1/4"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="w-20 h-14 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-white/5" />
      </motion.div>
    </div>
  );
}
