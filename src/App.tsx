import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Check, Car, Bike, Sparkles, Crown, Star } from 'lucide-react';

export default function App() {
  const whatsappNumber = '553196787011';
  const buildWhatsAppLink = (planLabel: string) => {
    const message = `Olá! Quero o plano ${planLabel}. Pode me ajudar?`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };
  const carPlans = [
    {
      name: 'BÁSICO',
      icon: Car,
      color: 'yellow',
      description: 'Manter o carro sempre limpo e apresentável',
      features: [
        '2 lavagens detalhadas externas/mês',
        'Aplicação de pretinho e renovador',
        'Plásticos externos renovados'
      ],
      smallCar: { price: 90, oldPrice: 100 },
      largeCar: { price: 130, oldPrice: 140 },
      discount: '10%'
    },
    {
      name: 'PREMIUM',
      icon: Sparkles,
      color: 'red',
      description: 'Limpeza completa quinzenal com brilho e conforto',
      features: [
        '2 limpezas premium completas',
        '1 lavagem detalhada externa adicional',
        'Pretinho e renovador em todas as visitas',
        'Interna + Externa completa'
      ],
      smallCar: { price: 170, oldPrice: 190 },
      largeCar: { price: 240, oldPrice: 260 },
      discount: '15%',
      popular: true
    },
    {
      name: 'VIP',
      icon: Crown,
      color: 'gold',
      description: 'Carro impecável toda semana - sempre novo',
      features: [
        '4 limpezas premium completas/mês',
        'Cera protetora a cada 15 dias',
        '15% de desconto em serviços extras',
        'Atendimento prioritário',
        'Agendamento fixo garantido'
      ],
      smallCar: { price: 290, oldPrice: 320 },
      largeCar: { price: 400, oldPrice: 450 },
      discount: '20%'
    }
  ];

  const motoPlan = [
    {
      name: 'BÁSICO',
      description: 'Moto limpa e bem cuidada',
      features: [
        '2 limpezas completas/mês',
        'Renovador de plásticos',
        'Pretinho nos pneus'
      ],
      price: 80,
      oldPrice: 90,
      discount: '10%'
    },
    {
      name: 'PREMIUM',
      description: 'Ideal para uso diário',
      features: [
        '3 limpezas completas/mês',
        'Renovador em todas as visitas',
        '1 limpeza detalhada do motor/mês'
      ],
      price: 115,
      oldPrice: 135,
      discount: '15%',
      popular: true
    },
    {
      name: 'VIP',
      description: 'Moto impecável toda semana',
      features: [
        '4 limpezas completas/mês',
        'Cera protetora 2x/mês',
        'Revitalização dos plásticos',
        '15% desconto em extras',
        'Atendimento prioritário'
      ],
      price: 145,
      oldPrice: 180,
      discount: '20%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-8 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <div className="inline-block mb-4">
          <div className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-yellow-500 px-4 md:px-6 py-2.5 md:py-3 rounded-full">
            <Car className="h-6 w-6 md:h-8 md:w-8 text-white" />
            <h1 className="text-white text-xl md:text-4xl">DETALHES PREMIUM CAR</h1>
          </div>
        </div>
        <p className="text-gray-400 text-base md:text-lg">Planos Mensais - Economia e Qualidade Garantida</p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
          <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
          <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
          <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
          <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
        </div>
      </div>

      {/* Planos de Carros */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          <h2 className="text-2xl md:text-3xl text-center text-red-500">🚗 PLANOS PARA CARROS</h2>
          <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {carPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 ${
                  plan.popular 
                    ? 'border-red-500 shadow-2xl shadow-red-500/50' 
                    : 'border-gray-700'
                } overflow-hidden transform transition-all md:hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 py-1 text-sm transform rotate-0 translate-x-0">
                    ⭐ MAIS POPULAR
                  </div>
                )}

                <div className="p-4 md:p-6">
                  {/* Cabeçalho do Plano */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center ${
                      plan.color === 'yellow' ? 'bg-yellow-500' :
                      plan.color === 'red' ? 'bg-red-600' :
                      'bg-gradient-to-r from-yellow-400 to-yellow-600'
                    }`}>
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg md:text-xl">PLANO {plan.name}</h3>
                      <Badge className="bg-green-600 text-white text-[10px] md:text-xs mt-1">
                        {plan.discount} ECONOMIA
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm md:text-base mb-6">{plan.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Preços */}
                  <div className="space-y-4 border-t border-gray-700 pt-4">
                    {/* Carros Menores */}
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <p className="text-yellow-400 text-sm mb-2">🚗 Carros Menores</p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-gray-500 line-through text-sm">
                            R$ {plan.smallCar.oldPrice}
                          </p>
                          <p className="text-white text-xl md:text-2xl">
                            R$ {plan.smallCar.price}
                            <span className="text-gray-400 text-sm">/mês</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Carros Maiores */}
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <p className="text-red-400 text-sm mb-2">🚙 Carros Maiores</p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-gray-500 line-through text-sm">
                            R$ {plan.largeCar.oldPrice}
                          </p>
                          <p className="text-white text-xl md:text-2xl">
                            R$ {plan.largeCar.price}
                            <span className="text-gray-400 text-sm">/mês</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <a
                        href={buildWhatsAppLink(`CARRO ${plan.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Escolher este plano
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Planos de Motos */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          <h2 className="text-2xl md:text-3xl text-center text-yellow-500">🏍 PLANOS PARA MOTOS</h2>
          <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {motoPlan.map((plan, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 border-2 ${
                plan.popular 
                  ? 'border-yellow-500 shadow-2xl shadow-yellow-500/50' 
                  : 'border-gray-700'
              } overflow-hidden transform transition-all md:hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-1 text-sm">
                  ⭐ MAIS POPULAR
                </div>
              )}

              <div className="p-4 md:p-6">
                {/* Cabeçalho */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500">
                    <Bike className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg md:text-xl">MOTO {plan.name}</h3>
                    <Badge className="bg-green-600 text-white text-[10px] md:text-xs mt-1">
                      {plan.discount} ECONOMIA
                    </Badge>
                  </div>
                </div>

                <p className="text-gray-400 text-sm md:text-base mb-6">{plan.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Preço */}
                <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg p-4 border border-yellow-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 line-through text-sm">
                        R$ {plan.oldPrice}
                      </p>
                      <p className="text-white text-2xl md:text-3xl">
                        R$ {plan.price}
                        <span className="text-gray-400 text-sm">/mês</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-600 text-white">
                        Economize
                      </Badge>
                      <p className="text-yellow-400 text-sm mt-1">
                        R$ {plan.oldPrice - plan.price}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a
                      href={buildWhatsAppLink(`MOTO ${plan.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Escolher este plano
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 text-center">
        <h3 className="text-white text-2xl md:text-3xl mb-4">
          🔥 Garanta Seu Plano Agora!
        </h3>
        <p className="text-white/90 mb-6">
          Entre em contato e escolha o plano ideal para você
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/553196787011" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-colors flex items-center gap-2"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <p className="text-white text-sm">
            📞 +55 31 9678-7011
          </p>
        </div>
      </div>

      {/* Rodapé */}
      <div className="max-w-7xl mx-auto mt-12 text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
        <p>© 2025 DETALHES PREMIUM CAR - Todos os direitos reservados</p>
        <p className="mt-2">✨ Qualidade Premium em cada detalhe</p>
      </div>
    </div>
  );
}
