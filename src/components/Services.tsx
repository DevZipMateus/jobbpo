
import React from 'react';
import { CreditCard, Receipt, FileText, Phone, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Contas a Pagar',
    description: 'Gestão completa do fluxo de contas a pagar, desde o lançamento até o pagamento.',
    icon: CreditCard,
    delay: '0s',
    benefits: [
      'Controle de vencimentos automatizado',
      'Negociação com fornecedores',
      'Conciliação bancária integrada',
      'Relatórios de cashflow'
    ],
    details: 'Assumimos todo o processo de contas a pagar: cadastro de fornecedores, lançamento de notas fiscais, controle de vencimentos, aprovação de pagamentos e conciliação bancária. Garantimos que nenhum pagamento seja perdido e que você tenha visibilidade total do seu fluxo de caixa.'
  },
  {
    id: 2,
    title: 'Contas a Receber',
    description: 'Controle eficiente das receitas com foco na redução da inadimplência.',
    icon: Receipt,
    delay: '0.1s',
    benefits: [
      'Gestão de inadimplência',
      'Relatórios de aging',
      'Controle de duplicatas',
      'Análise de recebimentos'
    ],
    details: 'Gerenciamos todo o ciclo de recebimentos: emissão de boletos, controle de duplicatas, acompanhamento de pagamentos, gestão de inadimplência e relatórios detalhados. Maximizamos seu recebimento e reduzimos perdas por inadimplência.'
  },
  {
    id: 3,
    title: 'Faturamento',
    description: 'Emissão e controle completo de notas fiscais e documentos fiscais.',
    icon: FileText,
    delay: '0.2s',
    benefits: [
      'Emissão de NFe/NFSe',
      'Controle fiscal completo',
      'Integração com sistemas',
      'Compliance garantido'
    ],
    details: 'Cuidamos de todo o processo de faturamento: emissão de notas fiscais eletrônicas, controle de numeração, envio para clientes, arquivo de documentos e garantia de compliance fiscal. Mantemos sua empresa sempre em conformidade.'
  },
  {
    id: 4,
    title: 'Cobrança e Consultorias',
    description: 'Serviços especializados de cobrança e consultoria financeira estratégica.',
    icon: Phone,
    delay: '0.3s',
    benefits: [
      'Cobrança ativa especializada',
      'Consultoria em fluxo de caixa',
      'Análise de indicadores',
      'Planejamento financeiro'
    ],
    details: 'Oferecemos cobrança ativa para recuperação de valores em atraso e consultoria financeira para otimização de processos. Ajudamos na análise de indicadores financeiros e no planejamento estratégico para crescimento sustentável.'
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              {/* Service Header */}
              <div className="flex items-start mb-6">
                <div className="bg-blue-900/10 p-4 rounded-lg mr-4 flex-shrink-0">
                  <service.icon className="text-blue-900" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>

              {/* Service Details */}
              <div className="mb-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {service.details}
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 mb-3">Principais benefícios:</h4>
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <CheckCircle className="text-orange-500 mr-2 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Precisa de mais informações sobre nossos serviços?</h3>
            <p className="text-blue-100 mb-6">
              Fale com um de nossos especialistas e descubra como podemos otimizar 
              a gestão financeira da sua empresa.
            </p>
            <a 
              href="#contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
            >
              <span>Fale com um especialista</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
