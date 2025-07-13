import React, { useEffect, useState } from 'react';

interface TimerProps {
  duration: number;
  onComplete: () => void;
  isPlaying: boolean;
  onReset?: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onComplete, isPlaying, onReset }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeLeft(duration);
    setProgress(0);
  }, [duration, onReset]);

  useEffect(() => {
    if (!isPlaying || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        const newProgress = ((duration - newTime) / duration) * 100;
        setProgress(newProgress);
        
        if (newTime <= 0) {
          onComplete();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, timeLeft, duration, onComplete]);

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-circle relative">
      <svg width="64" height="64" className="transform -rotate-90">
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="hsl(var(--c-border))"
          strokeWidth="4"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="hsl(var(--c-orange))"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-marker-text">
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
};

export default Timer;