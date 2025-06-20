
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function ChatbotSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="chatbot" className="section-padding bg-gradient-to-br from-purple-50 to-lavender-50">
      <div className="w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-2xl">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Converse com o Terapeuta A.I
            </h2>
            <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Comece sua jornada de bem-estar mental agora mesmo. O Terapeuta A.I está 
            pronto para te ouvir e oferecer suporte personalizado.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <div className="flex items-center space-x-2 text-green-600">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">Online agora</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-600">
              <ArrowRight className="h-4 w-4" />
              <span>Resposta imediata</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-600">
              <ArrowRight className="h-4 w-4" />
              <span>100% Confidencial</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-purple-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-lavender-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Terapeuta A.I</h3>
                    <p className="text-purple-100 text-sm">Seu coach de mindfulness pessoal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Online</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <iframe
                src="https://apps.abacus.ai/chatllm/?appId=12de7b552a&hideTopBar=2"
                className="w-full border-0"
                style={{ minHeight: '800px', height: '80vh' }}
                title="Terapeuta A.I - Chat"
                allow="microphone; camera"
                loading="lazy"
              />
              
              {/* Loading overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-lavender-50 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Carregando o Terapeuta A.I...</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Dicas para uma melhor experiência
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Seja honesto</h4>
                <p className="text-gray-600 text-sm">Compartilhe seus sentimentos verdadeiros para receber o melhor suporte.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Pratique regularmente</h4>
                <p className="text-gray-600 text-sm">Use os exercícios sugeridos no seu dia a dia para melhores resultados.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Seja paciente</h4>
                <p className="text-gray-600 text-sm">O bem-estar mental é uma jornada. Celebre pequenos progressos.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
