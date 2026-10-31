"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig, useScroll } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />;
}

export function Reveal({ children, className, delay = 0, id }: RevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function RevealArticle({ children, className, delay = 0, hover = false }: RevealProps & { hover?: boolean }) {
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -5 } : undefined}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.article>
  );
}
