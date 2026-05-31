"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  once?: boolean;
  className?: string;
  staggerChildren?: number;
}

const customEase = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number];

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  x = 0,
  scale = 1,
  once = true,
  className = "",
  staggerChildren = 0,
}: ScrollRevealProps) {
  if (staggerChildren > 0) {
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delay,
        },
      },
    };

    const itemVariants: Variants = {
      hidden: { opacity: 0, y: y, x: x, scale: scale },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration: duration,
          ease: customEase,
        },
      },
    };

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-80px 0px" }}
        className={className}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return (
              <motion.div variants={itemVariants} className="h-full w-full">
                {child}
              </motion.div>
            );
          }
          return child;
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: y, x: x, scale: scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: "-80px 0px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: customEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
