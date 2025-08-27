import React, { useRef, type ReactNode } from 'react';
import { motion, type Variants, useInView } from 'framer-motion';
import { defaultVariants } from '../constants/variant';
import { cn } from '../utils/utils';

// Define the props for the main Card container
interface CardProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
  bg?: string;
  padding?: string;
  // Allows the user to provide custom animation variants
  cardVariants?: Variants;
  amount?: number;
}

// Define the props for the card header
interface CardHeaderProps {
  title: string;
  icon?: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  gradient?: boolean;
  className?: string;
}
// Define the props for the sub-components
interface CardSectionProps {
  children: React.ReactNode;
  className?: string;
}

const alignment = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

// The main reusable Card component.
// It uses a ref and the useInView hook to trigger animations when the card becomes visible.
const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardSectionProps>;
  Footer: React.FC<CardSectionProps>;
} = ({
  children,
  index,
  bg = 'bg-white/10',
  padding = 'px-8 py-7',
  amount = 0.2,
  className,
  cardVariants = defaultVariants[(index ?? 0) % defaultVariants.length],
}) => {
  // Create a ref to attach to the motion component
  const ref = useRef(null);
  // Use the useInView hook to determine if the element is in the viewport
  const isInView = useInView(ref, { once: true, amount: amount });

  return (
    <motion.div
      ref={ref} // Attach the ref to the component
      className={cn(`${bg} rounded-2xl ${padding}`, className ?? '')}
      variants={cardVariants}
      initial="hidden" // Start from the hidden state
      // Animate to the 'visible' state if isInView is true
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay: 0.2 + (index || 0) * 0.1, duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

// Sub-component for the card header
const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  icon,
  subtitle,
  align = 'left',
  gradient = false,
  className = '',
}) => (
  <div className={cn('mb-4', className)}>
    <div className={`flex items-center gap-2 ${alignment[align]}`}>
      {icon && <div className="w-5 h-5 mb-0.5 text-blue-400">{icon}</div>}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 w-full',
          gradient
            ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'
            : ''
        )}
      >
        {title}
      </h2>
    </div>
    {subtitle && (
      <p className={cn('text-sm text-gray-300 mt-1', alignment[align])}>
        {subtitle}
      </p>
    )}
  </div>
);

// Sub-component for the card body
const CardBody: React.FC<CardSectionProps> = ({ children, className }) => (
  <div className={cn('text-sm md:text-base', className ?? '')}>{children}</div>
);

// Sub-component for the card footer
const CardFooter: React.FC<CardSectionProps> = ({ children, className }) => (
  <div
    className={cn(
      'mt-4 pt-2 border-t border-white/10 text-xs text-blue-300',
      className ?? ''
    )}
  >
    {children}
  </div>
);

// Assign the sub-components to the main Card component
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
