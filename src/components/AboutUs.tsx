
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-blue-900/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Equipe JOB BPO Financeiro trabalhando" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-6 z-20 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-900 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">BPO Financeiro</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Especialistas</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Foco em resultados</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-blue-900/10 text-blue-900 font-medium px-4 py-1.5 rounded-full text-sm mb-4 animate-fade-in">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Parceiros estratégicos na evolução da sua empresa
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Na Job BPO Financeiro, somos especialistas em terceirização de rotinas financeiras com foco em agilidade, 
              eficiência e resultado. Atuamos como o braço financeiro das empresas, assumindo processos como Contas a Pagar, 
              Contas a Receber, Faturamento, Fluxo de Caixa, Conciliação Bancária e muito mais.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Nosso propósito é simplificar a gestão financeira, liberando tempo e energia para que o empresário foque no 
              crescimento do seu negócio. Com tecnologia, experiência e uma equipe dedicada, garantimos controle, 
              previsibilidade e segurança financeira para pequenas e médias empresas de diversos setores.
            </p>
            
            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="bg-blue-900/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-blue-900" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Equipe Especializada</h4>
                  <p className="text-gray-600">Profissionais experientes em gestão financeira e BPO</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-blue-900/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-blue-900" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Foco em Resultados</h4>
                  <p className="text-gray-600">Agilidade, eficiência e controle para sua empresa</p>
                </div>
              </div>
              
              <div className="flex items-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-blue-900/10 p-1 rounded-full mr-3 mt-1">
                  <Check className="text-blue-900" size={16} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Tecnologia Avançada</h4>
                  <p className="text-gray-600">Ferramentas modernas para máxima eficiência</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="bg-blue-900 hover:bg-blue-800 text-orange-400 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" 
              style={{ animationDelay: '0.7s' }}
            >
              <span>Conheça Nossos Diferenciais</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
