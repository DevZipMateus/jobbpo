
import React from 'react';

const WorkflowProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Captação de Documentos',
      position: 'start'
    },
    {
      number: '02',
      title: 'Reunião de setup',
      position: 'middle'
    },
    {
      number: '03',
      title: 'Processamento do financeiro',
      position: 'middle'
    },
    {
      number: '04',
      title: 'Envio de relatórios',
      position: 'middle'
    },
    {
      number: '05',
      title: 'Tomada de decisão',
      position: 'end'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Fluxo de trabalho do
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-8">
            BPO Financeiro
          </h2>
        </div>

        {/* Workflow Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 transform -translate-y-1/2">
            <div className="flex items-center justify-between h-full px-20">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="flex-1 mx-4">
                  <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Special positioning for start and end */}
                <div className={`text-center ${
                  step.position === 'start' ? 'lg:mt-0' : 
                  step.position === 'end' ? 'lg:mt-0' : 'lg:mt-8'
                }`}>
                  
                  {/* Start/End Labels */}
                  {step.position === 'start' && (
                    <div className="text-orange-400 font-medium mb-4 text-sm">
                      Começo
                    </div>
                  )}
                  
                  {/* Circle with Number */}
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <span className="text-2xl md:text-3xl font-bold text-blue-900">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Orange Arc - only for middle steps */}
                    {step.position === 'middle' && (
                      <div className="absolute inset-0 w-24 h-24 md:w-28 md:h-28">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#fb923c"
                            strokeWidth="8"
                            strokeDasharray="70 30"
                            className="opacity-80"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {/* Step Title */}
                  <h3 className="text-white font-semibold text-lg md:text-xl leading-tight px-2">
                    {step.title}
                  </h3>
                  
                  {/* End Label */}
                  {step.position === 'end' && (
                    <div className="text-orange-400 font-medium mt-4 text-sm">
                      Fim
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Através de uma metodologia simples vamos implementar os processos 
            necessários para executar as rotinas do financeiro da sua empresa
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowProcess;
