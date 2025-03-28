
import React from 'react';
import { IceCream } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-schepijsje-brown text-3xl font-bold mr-1">'t</span>
      <IceCream size={40} className="text-schepijsje-brown mx-1" />
      <span className="text-schepijsje-brown text-3xl font-bold">Schepijsje</span>
    </div>
  );
};

export default Logo;
