
import React from 'react';
import { Check, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '../lib/utils';

const plans = [
  {
    id: 1,
    name: 'Plano Essencial',
    price: '299,99',
    description: 'Ideal para pequenas empresas que buscam terceirização básica de rotinas financeiras.',
    features: [
      {
        text: 'Contas a Pagar (até 50 lançamentos/mês)',
        included: true
      },
      {
        text: 'Contas a Receber (até 30 lançamentos/mês)',
        included: true
      },
      {
        text: 'Relatórios financeiros básicos',
        included: true
      },
      {
        text: 'Suporte por e-mail',
        included: true
      },
      {
        text: 'Faturamento completo',
        included: false
      },
      {
        text: 'Consultoria estratégica',
        included: false
      },
      {
        text: 'Atendimento prioritário',
        included: false
      },
      {
        text: 'Relatórios personalizados',
        included: false
      }
    ],
    popular: false,
    delay: '0s',
    color: 'bg-neutral-50'
  },
  {
    id: 2,
    name: 'Plano Business',
    price: '599,99',
    description: 'Perfeito para empresas que necessitam de gestão financeira mais abrangente e suporte dedicado.',
    features: [
      {
        text: 'Contas a Pagar (até 150 lançamentos/mês)',
        included: true
      },
      {
        text: 'Contas a Receber (até 100 lançamentos/mês)',
        included: true
      },
      {
        text: 'Relatórios financeiros detalhados',
        included: true
      },
      {
        text: 'Suporte por e-mail e telefone',
        included: true
      },
      {
        text: 'Faturamento completo',
        included: true
      },
      {
        text: 'Consultoria estratégica mensal',
        included: true
      },
      {
        text: 'Atendimento prioritário',
        included: false
      },
      {
        text: 'Relatórios personalizados',
        included: false
      }
    ],
    popular: true,
    delay: '0.1s',
    color: 'bg-orange-50'
  },
  {
    id: 3,
    name: 'Plano Enterprise',
    price: '1.199,99',
    description: 'Solução completa para empresas que requerem gestão financeira contínua e consultoria estratégica.',
    features: [
      {
        text: 'Contas a Pagar (ilimitado)',
        included: true
      },
      {
        text: 'Contas a Receber (ilimitado)',
        included: true
      },
      {
        text: 'Relatórios financeiros completos',
        included: true
      },
      {
        text: 'Suporte ilimitado (e-mail, telefone e WhatsApp)',
        included: true
      },
      {
        text: 'Faturamento completo',
        included: true
      },
      {
        text: 'Consultoria estratégica semanal',
        included: true
      },
      {
        text: 'Atendimento prioritário',
        included: true
      },
      {
        text: 'Relatórios personalizados',
        included: true
      }
    ],
    popular: false,
    delay: '0.2s',
    color: 'bg-neutral-50'
  }
];

const Plans = () => {
  const isMobile = useIsMobile();

  return (
    <section id="plans" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block bg-blue-900/10 text-blue-900 font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Planos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Escolha o plano ideal para o seu negócio
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
                "p-6 md:p-8 relative",
                plan.popular 
                  ? "bg-gradient-to-br from-orange-100 to-orange-50" 
                  : plan.color
              )}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="bg-blue-900 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full absolute top-4 right-4">
                    MAIS POPULAR
                  </div>
                )}
                
                {/* Plan Name and Price */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                  <span className="text-gray-600 ml-1 mb-1">/mês</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 mb-6">
                  {plan.description}
                </p>
                
                {/* CTA Button */}
                <a 
                  href="https://wa.me/5581991341556" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-center py-3 px-6 rounded-lg transition-colors duration-300 w-full bg-blue-900 hover:bg-blue-800 text-orange-400"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>Solicitar Plano</span>
                  </div>
                </a>
              </div>
              
              {/* Features */}
              <div className="p-6 md:p-8 bg-white">
                <h4 className="font-semibold text-gray-900 mb-4">O que está incluso:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className={cn(
                        "p-1 rounded-full mr-3 mt-0.5 flex-shrink-0",
                        feature.included 
                          ? "bg-orange-100 text-orange-600" 
                          : "bg-gray-100 text-gray-400"
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
                          : "text-gray-400 line-through"
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
