
'use client';

import { motion } from 'framer-motion';
import { Brain, Heart, Shield, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-lavender-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-white/20 rounded-2xl">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">Terapeuta A.I</span>
            </div>
            <p className="text-purple-100 leading-relaxed mb-6">
              Seu coach de mindfulness pessoal, disponível 24/7 para apoiar 
              seu bem-estar mental e emocional com técnicas comprovadas.
            </p>
            <div className="flex items-center space-x-2 text-purple-200">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Feito com carinho para seu bem-estar</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-purple-200 hover:text-white transition-colors"
              >
                Sobre o Terapeuta A.I
              </button>
              <button 
                onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-purple-200 hover:text-white transition-colors"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-purple-200 hover:text-white transition-colors"
              >
                Benefícios
              </button>
              <button 
                onClick={() => document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-purple-200 hover:text-white transition-colors"
              >
                Conversar Agora
              </button>
            </div>
          </motion.div>

          {/* Contact & Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Suporte</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-purple-300" />
                <span className="text-purple-200">100% Privado e Seguro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-300" />
                <span className="text-purple-200">Disponível 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-purple-700 pt-8"
        >
          <div className="bg-purple-800/50 rounded-2xl p-6 mb-8">
            <h4 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Aviso Importante</span>
            </h4>
            <p className="text-purple-100 leading-relaxed text-sm">
              <strong>O Terapeuta A.I é uma ferramenta de apoio ao bem-estar mental e não substitui 
              o acompanhamento profissional de psicólogos, psiquiatras ou outros profissionais de saúde mental.</strong> 
              Se você está passando por uma crise emocional grave, pensamentos suicidas ou qualquer 
              emergência psicológica, procure ajuda profissional imediatamente ou entre em contato 
              com os serviços de emergência (SAMU 192, CVV 188).
            </p>
          </div>

          <div className="text-center text-purple-300 text-sm">
            <p>&copy; 2024 Terapeuta A.I. Desenvolvido por Carlos com ❤️ para o bem-estar mental.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
