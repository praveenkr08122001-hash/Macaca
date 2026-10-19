import React from 'react';

interface MonkeyLogoProps {
  size?: number;
  animated?: boolean;
}

export const MonkeyLogo: React.FC<MonkeyLogoProps> = ({ size = 36, animated = true }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: animated ? 'drop-shadow(0 0 12px rgba(168, 85, 247, 0.6))' : 'none',
        }}
      >
        <defs>
          <linearGradient id="monkeyGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="circuitPulse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>

        {/* Neural Circuit Antennae coming from top of head */}
        {/* Center antenna */}
        <line x1="50" y1="28" x2="50" y2="10" stroke="url(#circuitPulse)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="10" r="4.5" fill="#38bdf8" className={animated ? 'animate-pulse' : ''} />

        {/* Left antenna */}
        <path d="M42 30 Q 32 20 28 14" stroke="url(#circuitPulse)" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="28" cy="14" r="4" fill="#a855f7" />

        {/* Right antenna */}
        <path d="M58 30 Q 68 20 72 14" stroke="url(#circuitPulse)" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="72" cy="14" r="4" fill="#a855f7" />

        {/* Outer Ears */}
        {/* Left Ear */}
        <circle cx="22" cy="52" r="14" stroke="url(#monkeyGlow)" strokeWidth="3.5" fill="rgba(15, 17, 28, 0.8)" />
        <circle cx="22" cy="52" r="7" stroke="rgba(192, 132, 252, 0.5)" strokeWidth="2.5" fill="none" />

        {/* Right Ear */}
        <circle cx="78" cy="52" r="14" stroke="url(#monkeyGlow)" strokeWidth="3.5" fill="rgba(15, 17, 28, 0.8)" />
        <circle cx="78" cy="52" r="7" stroke="rgba(192, 132, 252, 0.5)" strokeWidth="2.5" fill="none" />

        {/* Main Monkey Head */}
        <rect
          x="24"
          y="28"
          width="52"
          height="52"
          rx="22"
          stroke="url(#monkeyGlow)"
          strokeWidth="3.5"
          fill="rgba(15, 17, 28, 0.95)"
        />

        {/* Inner Muzzle / Face Contour */}
        <path
          d="M34 50 C34 44 42 43 50 47 C58 43 66 44 66 50 C66 66 58 72 50 72 C42 72 34 66 34 50 Z"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="2"
          fill="rgba(255, 255, 255, 0.05)"
        />

        {/* Eyes */}
        <circle cx="42" cy="50" r="3.2" fill="#ffffff" />
        <circle cx="58" cy="50" r="3.2" fill="#ffffff" />
        <circle cx="43" cy="49" r="1.2" fill="#38bdf8" />
        <circle cx="59" cy="49" r="1.2" fill="#38bdf8" />

        {/* Cute Nose and Smile */}
        <circle cx="50" cy="59" r="2" fill="url(#monkeyGlow)" />
        <path d="M44 64 Q 50 69 56 64" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
};
