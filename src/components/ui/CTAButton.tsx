import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../../utils/cn';

interface CTAButtonProps extends Omit<HTMLMotionProps<"button">, "onClick"> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'hero';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  fullWidth?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  onClick,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold transition-colors duration-300 ease-out overflow-hidden";
  
  const variants = {
    primary: "bg-v-red text-white shadow-[0_10px_30px_rgba(180,2,22,0.3)] hover:bg-v-burgundy active:scale-95 border border-v-burgundy/20",
    outline: "border-2 border-v-red text-v-red hover:bg-v-red hover:text-white active:scale-95",
    ghost: "text-v-red hover:bg-v-red/5 active:scale-95",
    hero: "bg-white text-v-red hover:bg-white/90 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.2)]"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider rounded-full",
    md: "px-6 py-3 text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-xl",
    lg: "px-8 py-4 text-xs md:text-sm font-bold uppercase tracking-widest rounded-xl",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}
    </motion.button>
  );
};
