
'use client';

import { motion } from 'framer-motion';
import { Brain, Heart, Sparkles, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-lavender-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center px-4">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Icon */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="p-6 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-3xl shadow-2xl">
                  <Brain className="h-16 w-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Terapeuta A.I</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 mb-8 font-light"
            >
              Seu coach de mindfulness pessoal, disponível 24/7
            </motion.p>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Especializado em técnicas de mindfulness e terapia cognitivo-comportamental 
              para pessoas com TDAH, ansiedade e estresse. Com memória de conversas e 
              exercícios personalizados.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <button 
                onClick={() => scrollToSection('chatbot')}
                className="group bg-gradient-to-r from-purple-600 to-lavender-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Heart className="h-5 w-5 group-hover:animate-pulse" />
                <span>Começar Conversa</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/50 transition-all duration-300 border-2 border-purple-300 hover:border-purple-500"
              >
                Saiba Mais
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-gray-600">Disponibilidade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-gray-600">Privacidade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">∞</div>
                <div className="text-gray-600">Paciência</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-purple-600 hover:text-purple-800 transition-colors animate-bounce"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
