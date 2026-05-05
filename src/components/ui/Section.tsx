import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../../utils/cn';

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  containerClass?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerClass,
  noPadding = false,
  ...props
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative w-full",
        !noPadding && "py-20 md:py-32",
        className
      )}
      {...props}
    >
      <div className={cn("max-w-[1280px] mx-auto px-5 md:px-8", containerClass)}>
        {children}
      </div>
    </motion.section>
  );
};
