import React from 'react';
import { Slide } from '@/data/slideData';

interface SlideContentProps {
  slide: Slide;
}

const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
  const renderContent = () => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="text-center py-16 fade-in">
            <h1 className="text-6xl font-bold handwritten-text marker-accent mb-8">
              {slide.content.title}
            </h1>
            {slide.content.subtitle && (
              <p className="text-2xl handwritten-text text-c-text mb-6">
                {slide.content.subtitle}
              </p>
            )}
            {slide.content.description && (
              <div className="max-w-3xl mx-auto text-lg handwritten-text text-c-text leading-relaxed">
                {slide.content.description}
              </div>
            )}
          </div>
        );

      case 'separator':
        return (
          <div className="text-center py-20 fade-in">
            <h1 className="text-7xl font-bold handwritten-text marker-accent mb-6">
              {slide.content.title}
            </h1>
            {slide.content.subtitle && (
              <p className="text-3xl handwritten-text text-c-text">
                {slide.content.subtitle}
              </p>
            )}
          </div>
        );

      case 'table':
        return (
          <div className="fade-in">
            <h2 className="text-4xl font-bold handwritten-text marker-accent mb-8 text-center">
              {slide.content.title}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-c-main">
                    {slide.content.headers.map((header: string, index: number) => (
                      <th
                        key={index}
                        className="p-4 text-left text-white font-bold handwritten-text border border-c-border"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {slide.content.rows.map((row: string[], rowIndex: number) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-c-page' : 'bg-white'}>
                      {row.map((cell: string, cellIndex: number) => (
                        <td
                          key={cellIndex}
                          className="p-4 handwritten-text text-c-text border border-c-border"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'content':
      default:
        return (
          <div className="fade-in">
            <h2 className="text-4xl font-bold handwritten-text marker-accent mb-8 text-center">
              {slide.content.title}
            </h2>
            
            {slide.content.agenda && (
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold handwritten-text marker-accent mb-4">Agenda:</h3>
                <ol className="text-xl handwritten-text text-c-text space-y-2 max-w-2xl mx-auto">
                  {slide.content.agenda.map((item: string, index: number) => (
                    <li key={index} className="flex items-center justify-start">
                      <span className="marker-accent font-bold mr-3">{index + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {slide.content.text && (
              <div className="max-w-4xl mx-auto text-lg handwritten-text text-c-text leading-relaxed mb-8">
                {slide.content.text}
              </div>
            )}

            {slide.content.sections && (
              <div className="space-y-8">
                {slide.content.sections.map((section: any, index: number) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold handwritten-text marker-accent mb-4">
                      {section.subtitle}
                    </h3>
                    {section.text && (
                      <p className="text-lg handwritten-text text-c-text leading-relaxed mb-4">
                        {section.text}
                      </p>
                    )}
                    {section.items && (
                      <ul className="space-y-2">
                        {section.items.map((item: string, itemIndex: number) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="marker-accent font-bold mr-3">•</span>
                            <span className="text-lg handwritten-text text-c-text">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.table && (
                      <div className="overflow-x-auto mt-4">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-c-main">
                              {section.table.headers.map((header: string, headerIndex: number) => (
                                <th
                                  key={headerIndex}
                                  className="p-3 text-left text-white font-bold handwritten-text border"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row: string[], rowIndex: number) => (
                              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-c-page' : 'bg-white'}>
                                {row.map((cell: string, cellIndex: number) => (
                                  <td
                                    key={cellIndex}
                                    className="p-3 handwritten-text text-c-text border"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {slide.content.swot && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold handwritten-text text-green-700 mb-4">Strengths</h3>
                  <ul className="space-y-2">
                    {slide.content.swot.strengths.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="handwritten-text text-c-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold handwritten-text text-blue-700 mb-4">Opportunities</h3>
                  <ul className="space-y-2">
                    {slide.content.swot.opportunities.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">→</span>
                        <span className="handwritten-text text-c-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold handwritten-text text-red-700 mb-4">Weaknesses</h3>
                  <ul className="space-y-2">
                    {slide.content.swot.weaknesses.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span className="handwritten-text text-c-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-2xl font-bold handwritten-text text-yellow-700 mb-4">Threats</h3>
                  <ul className="space-y-2">
                    {slide.content.swot.threats.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-600 mr-2">!</span>
                        <span className="handwritten-text text-c-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {slide.content.platforms && (
              <div className="space-y-8">
                <p className="text-xl handwritten-text text-c-text mb-6 font-bold">
                  Platforms: Facebook, Instagram, Company Website.
                </p>
                {slide.content.platforms.map((platform: any, index: number) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold handwritten-text marker-accent mb-4">
                      {platform.name}
                    </h3>
                    <ul className="space-y-3">
                      {platform.tactics.map((tactic: string, tacticIndex: number) => (
                        <li key={tacticIndex} className="flex items-start">
                          <span className="marker-accent font-bold mr-3">•</span>
                          <span className="text-lg handwritten-text text-c-text">{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {slide.content.items && (
              <div className="max-w-4xl mx-auto">
                <ul className="space-y-3">
                  {slide.content.items.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="marker-accent font-bold mr-3">•</span>
                      <span className="text-lg handwritten-text text-c-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="p-8 h-full overflow-y-auto">
      {renderContent()}
    </div>
  );
};

export default SlideContent;