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
  const [useRemoteFallback, setUseRemoteFallback] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  // Official logo: https://postimg.cc/VJ0PL7yX
  // Direct CDN URL: https://i.postimg.cc/13JmBTJ7/041e07b2-a408-463e-b526-156359df5418-image-jpeg.jpg
  // Local fallback: /images/at-roofing-logo.png
  const logoSrc = useRemoteFallback
    ? 'https://i.postimg.cc/13JmBTJ7/041e07b2-a408-463e-b526-156359df5418-image-jpeg.jpg'
    : '/images/at-roofing-logo.png';

  const sizeClasses =
    variant === 'header-block'
      ? 'w-[205px] sm:w-[225px] max-h-[62px] h-auto object-contain'
      : variant === 'dark'
        ? 'w-[115px] sm:w-[125px] max-h-[48px] h-auto object-contain'
        : variant === 'footer'
          ? 'w-[140px] sm:w-[155px] max-h-[58px] h-auto object-contain'
          : 'w-[125px] sm:w-[135px] max-h-[52px] h-auto object-contain';

  if (loadFailed) {
    return (
      <div className={`inline-flex items-center gap-2 select-none ${className}`}>
        <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#040205]">
          A T <span className="text-[#C80103]">ROOFING</span>
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="A T Roofing Birmingham"
        className={`${width ? '' : sizeClasses} object-contain transition-transform duration-200`}
        style={width ? { width, height: 'auto', maxHeight: variant === 'header-block' ? '62px' : '58px' } : undefined}
        referrerPolicy="no-referrer"
        onError={() => {
          if (!useRemoteFallback) {
            setUseRemoteFallback(true);
          } else {
            setLoadFailed(true);
          }
        }}
      />
    </div>
  );
};

