import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/Logo.png" 
        alt="'t Schepijsje Logo" 
        className="h-12"
      />
    </Link>
  );
};

export default Logo;
