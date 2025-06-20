
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Heart, Shield, Clock } from 'lucide-react';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Brain,
      title: "TDAH",
      description: "Técnicas específicas para melhorar foco, organização e controle de impulsos."
    },
    {
      icon: Heart,
      title: "Ansiedade",
      description: "Exercícios de respiração e mindfulness para reduzir a ansiedade no dia a dia."
    },
    {
      icon: Shield,
      title: "Estresse",
      description: "Estratégias de relaxamento e gestão emocional para momentos difíceis."
    },
    {
      icon: Clock,
      title: "24/7",
      description: "Sempre disponível quando você precisar, sem agendamentos ou esperas."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Sobre o Terapeuta A.I</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um chatbot terapêutico inovador que combina inteligência artificial com 
            técnicas comprovadas de mindfulness e terapia cognitivo-comportamental, 
            especialmente desenvolvido para apoiar pessoas com TDAH, ansiedade e estresse.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-purple-50 to-lavender-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-100 to-lavender-100 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Por que escolher o Terapeuta A.I?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Memória de conversas:</strong> Lembra de suas sessões anteriores e evolução pessoal
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Exercícios personalizados:</strong> Técnicas adaptadas às suas necessidades específicas
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Linguagem natural:</strong> Conversa em português brasileiro de forma natural e empática
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Sem julgamentos:</strong> Ambiente seguro e acolhedor para expressar seus sentimentos
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-full flex items-center justify-center">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 bg-purple-100 rounded-lg p-3">
                      <p className="text-sm text-gray-700">Olá! Como você está se sentindo hoje?</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 justify-end">
                    <div className="flex-1 bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-gray-700">Estou me sentindo ansioso com o trabalho...</p>
                    </div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-full flex items-center justify-center">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 bg-purple-100 rounded-lg p-3">
                      <p className="text-sm text-gray-700">Vamos fazer um exercício de respiração juntos?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
