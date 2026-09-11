import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsLeftRight, RotateCcw } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  initialPosition?: number; // 0 to 100
  showControls?: boolean;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Before roof replacement - aged, damaged tiles and weathered structure',
  afterAlt = 'After roof replacement - precision laid tiles and weather-tight finish',
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
  initialPosition = 50,
  showControls = false
}) => {
  const [position, setPosition] = useState<number>(initialPosition);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Compute position from clientX coordinate
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
    setHasInteracted(true);
  }, []);

  // Global mouse event listeners during drag
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition((prev) => Math.max(0, prev - 5));
      setHasInteracted(true);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition((prev) => Math.min(100, prev + 5));
      setHasInteracted(true);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPosition(0);
      setHasInteracted(true);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPosition(100);
      setHasInteracted(true);
    }
  };

  return (
    <div className={`relative flex flex-col w-full select-none ${className}`}>
      {/* Slider Visual Container */}
      <div
        ref={containerRef}
        id="roof-before-after-slider"
        role="region"
        aria-label="Interactive roof replacement before and after comparison"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={(e) => updatePosition(e.clientX)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none bg-slate-900 cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-[#ac0e13]"
        style={{ touchAction: 'none' }}
      >
        {/* Layer 1: AFTER Image (Base layer, fully visible beneath the clip) */}
        <img
          src={afterImage}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Layer 2: BEFORE Image (Clipped from left 0 to position%) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
          style={{
            clipPath: `polygon(0% 0%, ${position}% 0%, ${position}% 100%, 0% 100%)`
          }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#ac0e13]/90 text-white text-xs sm:text-sm font-heading font-bold shadow-md backdrop-blur-xs border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {beforeLabel}
          </span>
        </div>

        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#242F6B]/90 text-white text-xs sm:text-sm font-heading font-bold shadow-md backdrop-blur-xs border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {afterLabel}
          </span>
        </div>

        {/* Subtle helper pill (fades out after first drag) */}
        {!hasInteracted && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 animate-bounce">
            <span className="px-3.5 py-1.5 rounded-full bg-black/75 text-white text-xs font-medium tracking-wide shadow-xl backdrop-blur-xs border border-white/20 whitespace-nowrap">
              ◀ Drag slider to compare ▶
            </span>
          </div>
        )}

        {/* The Vertical Divider Bar & Draggable Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: `${position}%` }}
        >
          {/* Vertical white divider line */}
          <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)]" />

          {/* Centered circular handle */}
          <button
            type="button"
            role="slider"
            aria-label="Drag to compare before and after photos"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            onMouseDown={(e) => {
              e.stopPropagation();
              setIsDragging(true);
            }}
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#242F6B] shadow-2xl border-2 border-white flex items-center justify-center transition-transform pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 ${
              isDragging ? 'ring-4 ring-[#ac0e13]/60 scale-110' : 'ring-4 ring-black/20'
            }`}
          >
            <ChevronsLeftRight className="w-5 h-5 text-[#242F6B] stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Quick Action Controls Bar (Optional) */}
      {showControls && (
        <div className="bg-slate-900 text-white px-3 sm:px-4 py-2.5 flex items-center justify-end gap-2 border-t border-slate-800 text-xs">
          <div className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={() => {
                setPosition(100);
                setHasInteracted(true);
              }}
              className={`px-2.5 py-1 rounded text-[11px] font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                position === 100
                  ? 'bg-[#ac0e13] text-white'
                  : 'bg-white/10 hover:bg-white/20 text-gray-300'
              }`}
            >
              100% Before
            </button>

            <button
              type="button"
              onClick={() => {
                setPosition(50);
                setHasInteracted(true);
              }}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                position === 50
                  ? 'bg-[#242F6B] text-white'
                  : 'bg-white/10 hover:bg-white/20 text-gray-300'
              }`}
            >
              <RotateCcw className="w-3 h-3" />
              <span>50/50 Split</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setPosition(0);
                setHasInteracted(true);
              }}
              className={`px-2.5 py-1 rounded text-[11px] font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                position === 0
                  ? 'bg-emerald-700 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-gray-300'
              }`}
            >
              100% After
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
