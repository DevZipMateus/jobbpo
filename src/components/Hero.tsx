
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-6 animate-fade-in`} style={{
            animationDelay: '0.1s'
          }}>
            Transforme as finanças da sua empresa
          </h1>
          
          <p className="text-lg text-orange-200 mb-10 animate-fade-in max-w-3xl mx-auto" style={{
            animationDelay: '0.2s'
          }}>
            Na Job BPO Financeiro, somos especialistas em terceirização de rotinas financeiras com foco em agilidade, eficiência e resultado. Assumimos processos como Contas a Pagar, Contas a Receber, Faturamento e muito mais.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <a href="https://wa.me/5581991341556" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2">
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#services" className="bg-white hover:bg-gray-50 text-blue-900 border border-orange-400/20 px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400/50 shadow-sm">
              Nossos serviços
            </a>
            <a href="#egestor" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-400/50 shadow-sm">
              Sistema ERP
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
