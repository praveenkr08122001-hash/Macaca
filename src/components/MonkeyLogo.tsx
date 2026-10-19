import React from 'react';
import mascotLogo from '../assets/Mascot  logo withOut  BG.png';

interface MonkeyLogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const MonkeyLogo: React.FC<MonkeyLogoProps> = ({
  size = 36,
  animated = true,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: animated ? 'drop-shadow(0 0 16px rgba(168, 85, 247, 0.45)) drop-shadow(0 0 8px rgba(56, 189, 248, 0.35))' : 'none',
        transition: 'transform 0.25s ease, filter 0.25s ease',
        flexShrink: 0,
        ...style,
      }}
    >
      <img
        src={mascotLogo}
        alt="Macaca AI Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
          userSelect: 'none',
        }}
        loading="eager"
      />
    </div>
  );
};
