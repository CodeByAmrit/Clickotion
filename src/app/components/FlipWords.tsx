import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export function FlipWords({ words, duration = 4000, className = "" }: FlipWordsProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(timer);
  }, [words, duration]);

  const currentWord = words[currentWordIndex];
  const characters = currentWord.split("");

  return (
    <div className={`relative inline-flex h-[1.1em] min-w-[5ch] items-center justify-center overflow-visible z-10 ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentWord}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="inline-flex overflow-visible"
        >
          {characters.map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { 
                  y: 15, 
                  opacity: 0, 
                  rotateX: -45, 
                  filter: "blur(4px)" 
                },
                visible: { 
                  y: 0, 
                  opacity: 1, 
                  rotateX: 0, 
                  filter: "blur(0px)",
                  transition: { 
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                    delay: index * 0.03 
                  }
                },
                exit: { 
                  y: -15, 
                  opacity: 0, 
                  rotateX: 45, 
                  filter: "blur(4px)",
                  transition: { 
                    duration: 0.15,
                    delay: index * 0.01
                  }
                }
              }}
              className="inline-block whitespace-pre bg-gradient-to-t from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)] bg-clip-text text-transparent pb-[0.05em]"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
