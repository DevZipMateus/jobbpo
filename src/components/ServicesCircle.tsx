
import React from 'react';
import { CreditCard, Receipt, FileText, Building, DollarSign, BarChart3, TrendingUp } from 'lucide-react';

const ServicesCircle = () => {
  const services = [
    {
      id: 1,
      title: 'Gestão de contas a pagar',
      icon: CreditCard,
      position: 'top-left',
      style: { top: '15%', left: '8%' }
    },
    {
      id: 2,
      title: 'Implantação e treinamento',
      icon: TrendingUp,
      position: 'left',
      style: { top: '35%', left: '2%' }
    },
    {
      id: 3,
      title: 'Acompanhamento de métricas e resultados',
      icon: BarChart3,
      position: 'bottom-left',
      style: { bottom: '20%', left: '8%' }
    },
    {
      id: 4,
      title: 'Conciliação bancária e de caixa',
      icon: Building,
      position: 'bottom',
      style: { bottom: '5%', left: '50%', transform: 'translateX(-50%)' }
    },
    {
      id: 5,
      title: 'Relatório de fluxo de caixa para acompanhamento',
      icon: DollarSign,
      position: 'bottom-right',
      style: { bottom: '20%', right: '8%' }
    },
    {
      id: 6,
      title: 'Emissão e envio de boletos bancários',
      icon: Receipt,
      position: 'right',
      style: { top: '35%', right: '2%' }
    },
    {
      id: 7,
      title: 'Emissão e envio de notas fiscais',
      icon: FileText,
      position: 'top-right',
      style: { top: '15%', right: '8%' }
    },
    {
      id: 8,
      title: 'Gestão de contas a receber',
      icon: Receipt,
      position: 'top',
      style: { top: '8%', left: '50%', transform: 'translateX(-50%)' }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Nossos <span className="text-orange-400">Serviços</span>
          </h2>
        </div>

        {/* Services Circle Layout */}
        <div className="relative max-w-5xl mx-auto h-[600px] md:h-[700px]">
          {/* Central Rocket */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-4xl md:text-5xl">🚀</div>
            </div>
          </div>

          {/* Circular Arrow Path - Hidden on mobile */}
          <div className="hidden md:block absolute inset-8">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <defs>
                <path
                  id="circle"
                  d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0"
                />
              </defs>
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="rgba(251, 146, 60, 0.3)"
                strokeWidth="2"
                strokeDasharray="10 5"
              />
              {/* Arrow markers at intervals */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
                const radian = (angle * Math.PI) / 180;
                const x = 200 + 150 * Math.cos(radian);
                const y = 200 + 150 * Math.sin(radian);
                return (
                  <g key={index} transform={`translate(${x}, ${y}) rotate(${angle + 90})`}>
                    <polygon
                      points="-4,-8 0,0 4,-8"
                      fill="#fb923c"
                      opacity="0.7"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Service Items */}
          {services.map((service, index) => (
            <div
              key={service.id}
              className="absolute animate-fade-in"
              style={{
                ...service.style,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-center max-w-40 md:max-w-48">
                {/* Icon Circle */}
                <div className="bg-orange-500 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <service.icon className="text-white" size={24} />
                </div>
                
                {/* Service Title */}
                <h3 className="text-white font-medium text-sm md:text-base leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Oferecemos uma gama completa de serviços financeiros para impulsionar 
            o crescimento da sua empresa com eficiência e precisão
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesCircle;
