import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Subtle geometric shapes that move slowly */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-5">
        <div className="w-full h-full border-2 border-c-main rounded-full animate-pulse"></div>
      </div>
      
      <div className="absolute top-1/4 right-20 w-24 h-24 opacity-5">
        <div className="w-full h-full bg-c-orange rounded-lg animate-bounce" style={{ animationDuration: '3s' }}></div>
      </div>
      
      <div className="absolute bottom-20 left-1/4 w-40 h-40 opacity-5">
        <div className="w-full h-full border-2 border-c-text rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>
      
      <div className="absolute top-1/2 right-10 w-20 h-20 opacity-5">
        <div className="w-full h-full bg-c-main rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
      </div>
      
      <div className="absolute bottom-1/3 right-1/3 w-28 h-28 opacity-5">
        <div className="w-full h-full border-2 border-c-orange rounded-full animate-pulse" style={{ animationDuration: '2s' }}></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-1/3 w-6 h-6 bg-c-main rounded-full opacity-10 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-c-orange rounded-full opacity-10 animate-bounce" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
      <div className="absolute top-40 right-1/4 w-8 h-8 bg-c-text rounded-full opacity-10 animate-bounce" style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default BackgroundAnimation;