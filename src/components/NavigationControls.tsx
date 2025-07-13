import React from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  isPlaying: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onPlayPause: () => void;
  onReset: () => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  isPlaying,
  onPrevious,
  onNext,
  onPlayPause,
  onReset
}) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className={`nav-button ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={onPlayPause}
        className="nav-button bg-c-orange hover:bg-[hsl(35_95%_50%)]"
        aria-label={isPlaying ? "Pause presentation" : "Play presentation"}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="nav-button bg-c-text hover:bg-[hsl(0_0%_40%)]"
        aria-label="Reset presentation"
      >
        <RotateCcw size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className={`nav-button ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Counter */}
      <div className="bg-white px-4 py-2 rounded-full shadow-lg ml-4">
        <span className="handwritten-text text-c-text font-bold">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );
};

export default NavigationControls;