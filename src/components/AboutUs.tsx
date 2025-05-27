import React from 'react';
import { Check, ArrowRight, Users, Target, Shield, Zap } from 'lucide-react';
const AboutUs = () => {
  const differentials = [{
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais com mais de 10 anos de experiência em gestão financeira e BPO, sempre atualizados com as melhores práticas do mercado.'
  }, {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Metodologia comprovada que já ajudou centenas de empresas a reduzir custos operacionais em até 40% e aumentar a eficiência financeira.'
  }, {
    icon: Shield,
    title: 'Segurança e Compliance',
    description: 'Processos certificados, backup em nuvem, controles de acesso rigorosos e total conformidade com legislações fiscais e trabalhistas.'
  }, {
    icon: Zap,
    title: 'Tecnologia Avançada',
    description: 'Ferramentas modernas de automação, integração com sistemas ERP e dashboards em tempo real para total transparência dos processos.'
  }];
  return <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="bg-blue-900/20 w-full h-full absolute -left-6 -top-6 rounded-lg"></div>
              <img alt="Equipe JOB BPO Financeiro trabalhando" src="/lovable-uploads/7682e05d-d918-456f-b9a1-6b963d7bf293.png" className="relative z-10 rounded-lg shadow-lg w-full h-[400px] object-scale-down" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              Parceiros estratégicos na evolução da sua empresa
            </h2>
            <p className="text-gray-600 mb-6 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Na Job BPO Financeiro, somos especialistas em terceirização de rotinas financeiras com foco em agilidade, 
              eficiência e resultado. Atuamos como o braço financeiro das empresas, assumindo processos como Contas a Pagar, 
              Contas a Receber, Faturamento, Fluxo de Caixa, Conciliação Bancária e muito mais.
            </p>
            <p className="text-gray-600 mb-8 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              Nosso propósito é simplificar a gestão financeira, liberando tempo e energia para que o empresário foque no 
              crescimento do seu negócio. Com tecnologia, experiência e uma equipe dedicada, garantimos controle, 
              previsibilidade e segurança financeira para pequenas e médias empresas de diversos setores.
            </p>
            
            <a href="#contact" className="bg-blue-900 hover:bg-blue-800 text-orange-400 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <span>Conheça Nossos Diferenciais</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Diferenciais Competitivos */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Por que escolher a JOB BPO Financeiro?
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Nossos diferenciais competitivos garantem que você tenha a melhor experiência 
              em terceirização de processos financeiros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentials.map((differential, index) => <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" style={{
            animationDelay: `${0.5 + index * 0.1}s`
          }}>
                <div className="flex items-start">
                  <div className="bg-blue-900/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <differential.icon className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{differential.title}</h4>
                    <p className="text-gray-600">{differential.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;