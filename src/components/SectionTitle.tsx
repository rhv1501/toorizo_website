
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  children, 
  centered = true, 
  className = "" 
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-playfair text-3xl md:text-4xl font-medium text-toorizo-dark">
        {children}
      </h2>
      <div className={`w-24 h-0.5 bg-toorizo-gold mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
