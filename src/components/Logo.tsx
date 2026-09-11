import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'footer' | 'header-block';
  width?: number | string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  width
}) => {
  const [imgError, setImgError] = useState(false);

  // Official brand logo provided: https://ibb.co/KjNMjMwq
  // Direct online URL: https://i.ibb.co/ns3HsHCc/Whats-App-Image-2026-09-09-at-1-48-31-PM-2.jpg
  // High-res local asset: /images/keystone-logo.png
  const logoSrc = imgError
    ? 'https://i.ibb.co/ns3HsHCc/Whats-App-Image-2026-09-09-at-1-48-31-PM-2.jpg'
    : '/images/keystone-logo.png';

  // Sizing by variant:
  // For 'header-block': Sits inside the white plaque in the header (rendered width ~230-260px)
  const sizeClasses =
    variant === 'header-block'
      ? 'w-[205px] sm:w-[225px] max-h-[62px] h-auto object-contain'
      : variant === 'dark'
        ? 'w-[115px] sm:w-[125px] max-h-[48px] h-auto object-contain'
        : variant === 'footer'
          ? 'w-[135px] sm:w-[145px] max-h-[56px] h-auto object-contain'
          : 'w-[125px] sm:w-[135px] max-h-[52px] h-auto object-contain';

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Keystone Roofing & Building Ltd"
        className={`${width ? '' : sizeClasses} object-contain transition-transform duration-200`}
        style={width ? { width, height: 'auto', maxHeight: variant === 'header-block' ? '62px' : '56px' } : undefined}
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
      />
    </div>
  );
};
