
import React from 'react';
import { Button } from '@/components/ui/button';

const EgestorERP = () => {
  // Link for both the title and button
  const egestorLink = "https://www.egestor.com.br/afl/12245";

  return (
    <section id="egestor" className="py-20 bg-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gray-200 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-gray-200 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gray-200 rounded-full"></div>
      </div>
      
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block bg-gray-100 text-gray-800 font-medium px-6 py-2 rounded-full text-sm mb-6">
            Sistema ERP Parceiro
          </div>
          <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              eGestor - Sistema de gestão empresarial
            </h2>
          </a>
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto">
            Dobre seus lucros otimizando sua gestão
          </p>
        </div>
        
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 mb-12">
          {/* Left column - Benefits */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 animate-fade-in">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Por que escolher o eGestor?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Sistema completo de gestão financeira</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Controle de estoque e vendas</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Relatórios detalhados e dashboard</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Integração com nossa consultoria</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right column - Video Container */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="bg-gray-50 rounded-2xl p-4 shadow-xl">
              <div className="rounded-xl overflow-hidden">
                <video className="w-full aspect-video object-cover" autoPlay muted loop playsInline poster="/lovable-uploads/00b6d73e-0139-4a17-ad97-b66dac2be5f8.png">
                  <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pronto para transformar sua gestão?
            </h3>
            <p className="text-gray-600 mb-6">
              Teste o eGestor gratuitamente e veja como pode revolucionar sua empresa
            </p>
            <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-sm">
              <button className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                Teste grátis agora
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
