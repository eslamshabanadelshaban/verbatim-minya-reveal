import React, { useState, useEffect, useCallback } from 'react';
import { slideData, totalSlides } from '@/data/slideData';
import SlideContent from './SlideContent';
import NavigationControls from './NavigationControls';
import Timer from './Timer';
import BackgroundAnimation from './BackgroundAnimation';
import { useToast } from '@/hooks/use-toast';

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const { toast } = useToast();

  const currentSlideData = slideData[currentSlide];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case ' ': // Spacebar
          event.preventDefault();
          togglePlayPause();
          break;
        case 'Home':
          event.preventDefault();
          resetPresentation();
          break;
        case 'End':
          event.preventDefault();
          setCurrentSlide(totalSlides - 1);
          setIsPlaying(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Touch/Swipe support
  useEffect(() => {
    let startX: number;
    let startY: number;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY) return;

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = startX - endX;
      const diffY = startY - endY;

      // Only handle horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe left - next slide
          goToNext();
        } else {
          // Swipe right - previous slide
          goToPrevious();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide]);

  const goToNext = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
      setTimerKey(prev => prev + 1);
      setIsPlaying(false);
    } else {
      toast({
        title: "Presentation Complete",
        description: "You've reached the end of the presentation.",
      });
      setIsPlaying(false);
    }
  }, [currentSlide, toast]);

  const goToPrevious = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
      setTimerKey(prev => prev + 1);
      setIsPlaying(false);
    }
  }, [currentSlide]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const resetPresentation = useCallback(() => {
    setCurrentSlide(0);
    setIsPlaying(false);
    setTimerKey(prev => prev + 1);
    toast({
      title: "Presentation Reset",
      description: "Returned to the beginning of the presentation.",
    });
  }, [toast]);

  const handleTimerComplete = useCallback(() => {
    goToNext();
  }, [goToNext]);

  const resetTimer = useCallback(() => {
    setTimerKey(prev => prev + 1);
  }, []);

  return (
    <div className="presentation-container relative">
      <BackgroundAnimation />
      
      {/* Header with title and timer */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="flex justify-between items-center p-4">
          <div>
            <h1 className="text-2xl font-bold handwritten-text marker-accent">
              Lo2ta Store Marketing Plan
            </h1>
            <p className="text-sm handwritten-text text-c-text">
              {currentSlideData.title}
            </p>
          </div>
          
          <Timer
            key={timerKey}
            duration={currentSlideData.duration}
            onComplete={handleTimerComplete}
            isPlaying={isPlaying}
            onReset={resetTimer}
          />
        </div>
      </header>

      {/* Main content area */}
      <main className="pt-24 pb-32 min-h-screen flex items-center justify-center">
        <div className="whiteboard w-full max-w-6xl mx-4 min-h-[600px] relative">
          <SlideContent slide={currentSlideData} />
        </div>
      </main>

      {/* Navigation controls */}
      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        isPlaying={isPlaying}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onPlayPause={togglePlayPause}
        onReset={resetPresentation}
      />

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-c-border">
        <div
          className="h-full bg-c-main transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Slide instructions */}
      <div className="fixed top-24 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="text-xs handwritten-text text-c-text space-y-1">
          <div><strong>Controls:</strong></div>
          <div>← → Arrow keys</div>
          <div>Space: Play/Pause</div>
          <div>Home: Reset</div>
          <div>Touch: Swipe left/right</div>
        </div>
      </div>

      {/* Screen reader announcements */}
      <div 
        className="sr-only" 
        aria-live="polite" 
        aria-atomic="true"
      >
        Slide {currentSlide + 1} of {totalSlides}: {currentSlideData.title}
      </div>
    </div>
  );
};

export default Presentation;