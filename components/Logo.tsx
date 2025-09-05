import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 60 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="shellGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="50%" stopColor="#FF4757" />
          <stop offset="100%" stopColor="#CC2E4A" />
        </linearGradient>
        <linearGradient id="tentacleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF8787" />
          <stop offset="100%" stopColor="#FF6B6B" />
        </linearGradient>
        <radialGradient id="eyeGradient">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </radialGradient>
      </defs>

      {/* Main head/shell shape - more geometric and stylized */}
      <path
        d="M 50 15 
           C 70 15, 85 30, 85 50
           C 85 65, 80 75, 75 80
           L 70 85
           C 65 88, 60 90, 50 90
           C 40 90, 35 88, 30 85
           L 25 80
           C 20 75, 15 65, 15 50
           C 15 30, 30 15, 50 15"
        fill="url(#shellGradient)"
        stroke="#AA1E3A"
        strokeWidth="1.5"
      />

      {/* Forehead ridges for texture */}
      <path
        d="M 30 25 Q 50 20, 70 25"
        fill="none"
        stroke="#CC2E4A"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M 35 35 Q 50 32, 65 35"
        fill="none"
        stroke="#CC2E4A"
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* Eyes - large and expressive */}
      <ellipse cx="35" cy="45" rx="12" ry="15" fill="url(#eyeGradient)" stroke="#AA1E3A" strokeWidth="1" />
      <ellipse cx="65" cy="45" rx="12" ry="15" fill="url(#eyeGradient)" stroke="#AA1E3A" strokeWidth="1" />
      
      {/* Pupils */}
      <circle cx="35" cy="47" r="5" fill="#1A1A1A" />
      <circle cx="65" cy="47" r="5" fill="#1A1A1A" />
      
      {/* Eye highlights */}
      <circle cx="37" cy="45" r="2" fill="#FFFFFF" opacity="0.9" />
      <circle cx="67" cy="45" r="2" fill="#FFFFFF" opacity="0.9" />

      {/* Stylized tentacle-like features */}
      <path
        d="M 40 65 Q 35 70, 30 75 Q 32 78, 35 76 Q 38 72, 40 68"
        fill="url(#tentacleGradient)"
        stroke="#AA1E3A"
        strokeWidth="1"
      />
      <path
        d="M 50 65 Q 48 72, 46 78 Q 50 80, 54 78 Q 52 72, 50 65"
        fill="url(#tentacleGradient)"
        stroke="#AA1E3A"
        strokeWidth="1"
      />
      <path
        d="M 60 65 Q 65 70, 70 75 Q 68 78, 65 76 Q 62 72, 60 68"
        fill="url(#tentacleGradient)"
        stroke="#AA1E3A"
        strokeWidth="1"
      />

      {/* Small antenna-like features for tech feel */}
      <circle cx="45" cy="15" r="3" fill="#FF6B6B" />
      <circle cx="55" cy="15" r="3" fill="#FF6B6B" />
      <line x1="45" y1="15" x2="45" y2="22" stroke="#CC2E4A" strokeWidth="1.5" />
      <line x1="55" y1="15" x2="55" y2="22" stroke="#CC2E4A" strokeWidth="1.5" />
    </svg>
  );
};

export default Logo;

