
import React from 'react';
import { Search, PlaneTakeoff, Cog, BarChart3 } from 'lucide-react';

const WorkProcess = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Diagnóstico',
      description: 'Analisamos seus processos atuais, identificamos gargalos e oportunidades de melhoria.',
      details: ['Mapeamento dos processos existentes', 'Identificação de pontos críticos', 'Análise de ferramentas utilizadas']
    },
    {
      number: '02',
      icon: PlaneTakeoff,
      title: 'Planejamento',
      description: 'Desenvolvemos um plano personalizado de implementação baseado nas suas necessidades.',
      details: ['Definição de cronograma', 'Seleção de ferramentas', 'Treinamento da equipe']
    },
    {
      number: '03',
      icon: Cog,
      title: 'Execução',
      description: 'Implementamos os processos de forma gradual e segura, garantindo continuidade operacional.',
      details: ['Migração de dados', 'Configuração de processos', 'Testes e validações']
    },
    {
      number: '04',
      icon: BarChart3,
      title: 'Acompanhamento',
      description: 'Monitoramos resultados e fornecemos relatórios para melhoria contínua dos processos.',
      details: ['Relatórios periódicos', 'Reuniões de alinhamento', 'Otimização contínua']
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nosso Processo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Como implementamos o BPO Financeiro na sua empresa
          </h2>
          <p className="text-gray-600 text-lg">
            Um processo estruturado e personalizado para garantir a transição segura e eficiente 
            da gestão financeira da sua empresa.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-1 bg-gradient-to-r from-blue-200 via-orange-200 to-blue-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 bg-gradient-to-r from-blue-900 to-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="bg-blue-900/10 p-3 rounded-lg inline-block mb-4 mt-2">
                    <step.icon className="text-blue-900" size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm text-gray-500 flex items-start">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Agende uma conversa gratuita para entender como podemos transformar 
              a gestão financeira da sua empresa.
            </p>
            <a 
              href="https://wa.me/5581991341556" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-all inline-flex items-center gap-2 font-medium"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-5 h-5" />
              <span>Agendar Conversa</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
