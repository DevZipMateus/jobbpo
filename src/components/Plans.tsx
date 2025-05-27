
import React from 'react';
import { Check, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '../lib/utils';

const plans = [
  {
    id: 1,
    name: 'Bronze',
    price: '997,00',
    description: 'Plano básico com serviços essenciais para sua gestão financeira.',
    features: [
      {
        text: 'Implantação e Treinamento',
        included: true
      },
      {
        text: 'Gerente Exclusivo',
        included: true
      },
      {
        text: 'Atendimento Remoto',
        included: true
      },
      {
        text: 'Contas a Pagar e Receber',
        included: true
      },
      {
        text: 'Agendamento Bancário',
        included: true
      },
      {
        text: 'Conciliação Bancária e de Caixa',
        included: true
      },
      {
        text: 'Relatórios de Acompanhamentos',
        included: true
      },
      {
        text: 'Envio Documentação para a Contabilidade',
        included: true
      },
      {
        text: 'Faturamento NFe e NFes',
        included: false
      },
      {
        text: 'Emissão e envio Boletos',
        included: false
      },
      {
        text: 'Reunião Remota de 2 h/mês para Análise',
        included: false
      },
      {
        text: 'Painel de Indicadores com Dashboard',
        included: false
      },
      {
        text: 'Análise Financeira por Centro de Custos',
        included: false
      },
      {
        text: 'Análise do Fluxo de Caixa',
        included: false
      }
    ],
    popular: false,
    delay: '0s',
    color: 'bg-orange-600 text-white'
  },
  {
    id: 2,
    name: 'Prata',
    price: 'sob consulta',
    description: 'Plano intermediário com mais recursos para sua empresa.',
    features: [
      {
        text: 'Implantação e Treinamento',
        included: true
      },
      {
        text: 'Gerente Exclusivo',
        included: true
      },
      {
        text: 'Atendimento Remoto',
        included: true
      },
      {
        text: 'Contas a Pagar e Receber',
        included: true
      },
      {
        text: 'Agendamento Bancário',
        included: true
      },
      {
        text: 'Conciliação Bancária e de Caixa',
        included: true
      },
      {
        text: 'Relatórios de Acompanhamentos',
        included: true
      },
      {
        text: 'Envio Documentação para a Contabilidade',
        included: true
      },
      {
        text: 'Faturamento NFe e NFes',
        included: true
      },
      {
        text: 'Emissão e envio Boletos',
        included: true
      },
      {
        text: 'Reunião Remota de 2 h/mês para Análise',
        included: true
      },
      {
        text: 'Painel de Indicadores com Dashboard',
        included: false
      },
      {
        text: 'Análise Financeira por Centro de Custos',
        included: false
      },
      {
        text: 'Análise do Fluxo de Caixa',
        included: false
      }
    ],
    popular: true,
    delay: '0.1s',
    color: 'bg-gray-400 text-white'
  },
  {
    id: 3,
    name: 'Ouro',
    price: 'sob consulta',
    description: 'Plano completo com todos os recursos disponíveis.',
    features: [
      {
        text: 'Implantação e Treinamento',
        included: true
      },
      {
        text: 'Gerente Exclusivo',
        included: true
      },
      {
        text: 'Atendimento Remoto',
        included: true
      },
      {
        text: 'Contas a Pagar e Receber',
        included: true
      },
      {
        text: 'Agendamento Bancário',
        included: true
      },
      {
        text: 'Conciliação Bancária e de Caixa',
        included: true
      },
      {
        text: 'Relatórios de Acompanhamentos',
        included: true
      },
      {
        text: 'Envio Documentação para a Contabilidade',
        included: true
      },
      {
        text: 'Faturamento NFe e NFes',
        included: true
      },
      {
        text: 'Emissão e envio Boletos',
        included: true
      },
      {
        text: 'Reunião Remota de 2 h/mês para Análise',
        included: true
      },
      {
        text: 'Painel de Indicadores com Dashboard',
        included: true
      },
      {
        text: 'Análise Financeira por Centro de Custos',
        included: true
      },
      {
        text: 'Análise do Fluxo de Caixa',
        included: true
      }
    ],
    popular: false,
    delay: '0.2s',
    color: 'bg-yellow-600 text-white'
  }
];

const Plans = () => {
  const isMobile = useIsMobile();

  return (
    <section id="plans" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-orange-500">Conheça os</span><br />
            <span className="text-blue-900">NOSSOS PLANOS</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos planos flexíveis que se adaptam às necessidades e ao tamanho da sua empresa.
          </p>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in border",
                plan.popular 
                  ? "shadow-lg border-orange-200 transform md:-translate-y-4" 
                  : "shadow-md border-gray-200"
              )}
              style={{ animationDelay: plan.delay }}
            >
              {/* Plan Header */}
              <div className={cn(
                "p-6 md:p-8 relative text-center",
                plan.color
              )}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full absolute top-4 right-4">
                    MAIS POPULAR
                  </div>
                )}
                
                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                
                {/* Price */}
                <div className="mb-6">
                  {plan.price === 'sob consulta' ? (
                    <div className="text-lg font-medium">R$ sob consulta</div>
                  ) : (
                    <div className="flex items-end justify-center">
                      <span className="text-4xl font-bold">R$ {plan.price}</span>
                      <span className="ml-1 mb-1">por mês</span>
                    </div>
                  )}
                </div>
                
                {/* Description */}
                <p className="mb-6 opacity-90">
                  {plan.description}
                </p>
                
                {/* CTA Button */}
                <a 
                  href="https://wa.me/5581991341556" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-center py-3 px-6 rounded-lg transition-colors duration-300 w-full bg-white text-gray-900 hover:bg-gray-100 font-medium"
                >
                  Solicitar Plano
                </a>
              </div>
              
              {/* Features */}
              <div className="p-6 md:p-8 bg-white">
                <h4 className="font-semibold text-gray-900 mb-4">Serviços inclusos:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className={cn(
                        "p-1 rounded-full mr-3 mt-0.5 flex-shrink-0",
                        feature.included 
                          ? "bg-green-100 text-green-600" 
                          : "bg-red-100 text-red-600"
                      )}>
                        {feature.included ? (
                          <Check size={isMobile ? 14 : 16} />
                        ) : (
                          <X size={isMobile ? 14 : 16} />
                        )}
                      </div>
                      <span className={cn(
                        "text-sm",
                        feature.included 
                          ? "text-gray-700" 
                          : "text-gray-400"
                      )}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Custom Plans */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Precisa de um plano personalizado para sua empresa?
          </p>
          <a 
            href="https://wa.me/5581991341556" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 hover:bg-blue-800 text-orange-400 rounded-md transition-all duration-300 gap-2"
          >
            <span>Solicitar proposta personalizada</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
