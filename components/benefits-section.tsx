
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Clock, 
  DollarSign, 
  Users, 
  Lock, 
  Smartphone, 
  TrendingUp,
  Heart,
  Star
} from 'lucide-react';

export default function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: Clock,
      title: "Disponível 24/7",
      description: "Acesso imediato sempre que precisar, sem agendamentos ou filas de espera.",
      highlight: "Sem espera"
    },
    {
      icon: DollarSign,
      title: "Custo Acessível",
      description: "Uma fração do custo de terapia tradicional, tornando o cuidado mental acessível.",
      highlight: "Economia"
    },
    {
      icon: Lock,
      title: "Privacidade Total",
      description: "Suas conversas são completamente privadas e confidenciais.",
      highlight: "100% Seguro"
    },
    {
      icon: Smartphone,
      title: "Fácil de Usar",
      description: "Interface simples e intuitiva, acessível de qualquer dispositivo.",
      highlight: "Simplicidade"
    },
    {
      icon: Users,
      title: "Sem Julgamentos",
      description: "Ambiente acolhedor onde você pode se expressar livremente.",
      highlight: "Acolhimento"
    },
    {
      icon: TrendingUp,
      title: "Progresso Contínuo",
      description: "Acompanhamento do seu desenvolvimento emocional ao longo do tempo.",
      highlight: "Evolução"
    }
  ];

  const testimonials = [
    {
      name: "Maria S.",
      text: "O Terapeuta A.I me ajudou muito com minha ansiedade. Sempre disponível quando preciso!",
      rating: 5
    },
    {
      name: "João P.",
      text: "Como pessoa com TDAH, as técnicas de foco realmente funcionam. Recomendo!",
      rating: 5
    },
    {
      name: "Ana L.",
      text: "Finalmente encontrei uma forma acessível de cuidar da minha saúde mental.",
      rating: 5
    }
  ];

  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Por que Escolher o Terapeuta A.I?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra os benefícios únicos de ter um coach de mindfulness 
            sempre ao seu alcance, quando e onde você precisar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-purple-50 to-lavender-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-purple-100">
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-purple-500 to-lavender-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {benefit.highlight}
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-100 to-lavender-100 rounded-3xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Terapeuta A.I vs. Terapia Tradicional
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold mb-6 text-center gradient-text">Terapeuta A.I</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Disponível 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Acesso imediato</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Custo acessível</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Privacidade total</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Sem julgamentos</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold mb-6 text-center text-gray-700">Terapia Tradicional</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-600">Horários limitados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-600">Listas de espera</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✗</span>
                  </div>
                  <span className="text-gray-600">Custo elevado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">~</span>
                  </div>
                  <span className="text-gray-600">Depende do profissional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">~</span>
                  </div>
                  <span className="text-gray-600">Pode haver constrangimento</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-12 gradient-text">
            O que nossos usuários dizem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-center space-x-2">
                  <Heart className="h-4 w-4 text-purple-500" />
                  <span className="font-semibold text-gray-800">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
