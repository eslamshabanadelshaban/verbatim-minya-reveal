import React from 'react';
import { Slide } from '@/data/slideData';

interface SlideContentProps {
  slide: Slide;
}

const SlideContent = ({ slide }: SlideContentProps) => {
  const renderContent = () => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="relative min-h-screen flex items-center justify-center p-8">
            {slide.background && (
              <div className="absolute inset-0 bg-gradient-to-br from-c-page via-whiteboard-bg to-c-page opacity-90"></div>
            )}
            <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-c-border">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-caveat font-bold marker-accent mb-6 leading-tight">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-inter text-marker-text leading-relaxed">
                    {slide.subtitle}
                  </h2>
                )}
              </div>
            </div>
          </div>
        );

      case 'agenda':
        return (
          <div className="min-h-screen flex flex-col justify-center p-8 space-y-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-caveat font-bold marker-accent mb-6 leading-tight">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <h2 className="text-xl md:text-2xl lg:text-3xl font-inter text-marker-text leading-relaxed">
                  {slide.subtitle}
                </h2>
              )}
            </div>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-caveat font-semibold marker-accent mb-8 text-center">Agenda:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {slide.content?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg border border-c-border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <span className="text-2xl font-caveat font-bold text-c-orange min-w-[3rem] text-center bg-c-orange/10 rounded-full w-12 h-12 flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-lg md:text-xl font-inter text-marker-text leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="min-h-screen flex flex-col justify-center p-8 space-y-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-caveat font-bold marker-accent mb-6 leading-tight">
                {slide.title}
              </h1>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-c-border">
                <div className="space-y-8">
                  {slide.content?.map((paragraph, index) => (
                    <p key={index} className="text-lg md:text-xl lg:text-2xl font-inter text-marker-text leading-relaxed handwritten-text">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'table':
        return (
          <div className="min-h-screen flex flex-col justify-center p-8 space-y-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-caveat font-bold marker-accent mb-6 leading-tight">
                {slide.title}
              </h1>
            </div>
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-c-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead className="bg-c-main/10">
                      <tr>
                        {slide.tableHeaders?.map((header, index) => (
                          <th key={index} className="text-left p-6 font-caveat font-semibold text-lg md:text-xl marker-accent border-b border-c-border">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {slide.tableData?.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-c-border hover:bg-c-page/30 transition-colors duration-200">
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="p-6 font-inter text-marker-text text-sm md:text-base leading-relaxed">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );

      case 'swot':
        return (
          <div className="min-h-screen flex flex-col justify-center p-8 space-y-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-caveat font-bold marker-accent mb-6 leading-tight">
                {slide.title}
              </h1>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {slide.swotData && Object.entries(slide.swotData).map(([category, items]) => (
                  <div key={category} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-c-border p-8 transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-2xl md:text-3xl font-caveat font-semibold marker-accent mb-6 capitalize text-center">
                      {category}
                    </h3>
                    <ul className="space-y-4">
                      {items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-4">
                          <span className="text-c-orange font-bold text-xl mt-1">•</span>
                          <span className="font-inter text-marker-text text-base md:text-lg leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="min-h-screen flex items-center justify-center p-8">
            <div className="text-center">
              <h1 className="text-4xl font-caveat font-bold marker-accent mb-4">
                {slide.title}
              </h1>
              <p className="text-lg font-inter text-marker-text">
                Content type not supported yet.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="whiteboard w-full min-h-screen flex flex-col justify-center" role="main" aria-label={`Slide ${slide.id + 1}: ${slide.title}`}>
      <div className="fade-in" style={{ animationDelay: '0.2s' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default SlideContent;