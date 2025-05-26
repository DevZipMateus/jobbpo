
import React from 'react';
import { CreditCard, Receipt, FileText, Phone, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Contas a Pagar',
    description: 'Gestão completa do fluxo de contas a pagar, incluindo lançamentos, controle de vencimentos e pagamentos automáticos.',
    icon: CreditCard,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Contas a Receber',
    description: 'Controle eficiente das receitas, acompanhamento de recebimentos e gestão estratégica do fluxo de caixa.',
    icon: Receipt,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Faturamento',
    description: 'Emissão e controle de notas fiscais, gestão do processo de faturamento e acompanhamento completo.',
    icon: FileText,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Cobrança e Consultorias',
    description: 'Serviços de cobrança especializada e consultorias financeiras estratégicas para otimizar seus processos.',
    icon: Phone,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-900/10 text-blue-900 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas para sua gestão financeira
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos serviços especializados em terceirização de rotinas financeiras, 
            liberando tempo para que você foque no crescimento do seu negócio.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-blue-900/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-blue-900 hover:bg-blue-800 text-orange-400 px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Fale com um especialista</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
