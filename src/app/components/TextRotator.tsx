import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TextRotatorProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export function TextRotator({ texts, interval = 3000, className = "" }: TextRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <div className={`relative inline-flex flex-col h-[1.2em] overflow-hidden ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={texts[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.23, 1, 0.32, 1] // Custom quint ease for premium feel
          }}
          className="whitespace-nowrap"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
