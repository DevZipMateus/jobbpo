
import React from 'react';
import { CheckCircle, TrendingUp, Shield, Clock } from 'lucide-react';

const WhatIsBPO = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Foco no Core Business',
      description: 'Libere tempo para focar no crescimento e estratégia do seu negócio'
    },
    {
      icon: Shield,
      title: 'Redução de Riscos',
      description: 'Diminua erros operacionais e garanta conformidade fiscal'
    },
    {
      icon: Clock,
      title: 'Agilidade Operacional',
      description: 'Processos mais rápidos e eficientes com tecnologia especializada'
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-blue-900/10 text-blue-900 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Entenda o BPO Financeiro
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que é BPO Financeiro?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            BPO (Business Process Outsourcing) Financeiro é a terceirização estratégica de processos financeiros 
            da sua empresa para especialistas. É muito mais que apenas executar tarefas - é ter um parceiro 
            dedicado que assume a responsabilidade completa pela gestão financeira operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Por que terceirizar sua gestão financeira?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              A gestão financeira é fundamental para qualquer empresa, mas pode consumir muito tempo e recursos 
              internos. Com o BPO Financeiro, você mantém o controle estratégico enquanto delega a execução 
              operacional para especialistas.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 bg-white rounded-lg shadow-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-blue-900/10 p-2 rounded-lg mr-4 flex-shrink-0">
                    <benefit.icon className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                O que está incluso no BPO Financeiro?
              </h4>
              <div className="space-y-3">
                {[
                  'Gestão completa de contas a pagar e receber',
                  'Controle e conciliação bancária',
                  'Emissão e controle de notas fiscais',
                  'Acompanhamento de fluxo de caixa',
                  'Relatórios gerenciais personalizados',
                  'Suporte na tomada de decisões financeiras'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-orange-500 mr-3 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <p className="text-orange-800 font-medium">
                  💡 Resultado: Mais tempo para focar no crescimento do seu negócio com a tranquilidade 
                  de ter suas finanças organizadas por especialistas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsBPO;
