
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Waves, 
  Scan, 
  Target, 
  MessageCircle, 
  Calendar, 
  BookOpen,
  Zap,
  Shield
} from 'lucide-react';

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Waves,
      title: "Exercícios de Respiração",
      description: "Técnicas guiadas de respiração para reduzir ansiedade e promover relaxamento instantâneo.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Scan,
      title: "Body Scan",
      description: "Meditações de varredura corporal para aumentar a consciência e liberar tensões.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Foco e Concentração",
      description: "Exercícios específicos para melhorar o foco e a atenção, especialmente úteis para TDAH.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: MessageCircle,
      title: "Conversas Terapêuticas",
      description: "Diálogos empáticos baseados em técnicas de terapia cognitivo-comportamental.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Rotinas Personalizadas",
      description: "Criação de rotinas de mindfulness adaptadas ao seu estilo de vida e necessidades.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BookOpen,
      title: "Diário Emocional",
      description: "Acompanhamento do seu progresso emocional com insights e reflexões guiadas.",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Técnicas de Emergência",
      description: "Estratégias rápidas para momentos de crise, ataques de pânico ou estresse agudo.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Ambiente Seguro",
      description: "Espaço confidencial e sem julgamentos para explorar seus sentimentos e pensamentos.",
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section id="funcionalidades" className="section-padding bg-gradient-to-br from-purple-50 to-lavender-50">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Funcionalidades Principais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra todas as ferramentas e técnicas que o Terapeuta A.I oferece 
            para apoiar seu bem-estar mental e emocional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-purple-100">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Como Funciona?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Inicie a Conversa</h4>
                <p className="text-gray-600">
                  Comece falando sobre como você está se sentindo ou o que está te preocupando.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Receba Orientação</h4>
                <p className="text-gray-600">
                  O Terapeuta A.I oferece exercícios e técnicas personalizadas para sua situação.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Pratique e Evolua</h4>
                <p className="text-gray-600">
                  Pratique as técnicas sugeridas e acompanhe seu progresso ao longo do tempo.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
