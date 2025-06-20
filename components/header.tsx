
'use client';

import { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100"
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-lavender-600 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Terapeuta A.I</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('funcionalidades')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('chatbot')}
              className="bg-gradient-to-r from-purple-600 to-lavender-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
            >
              Conversar Agora
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-purple-100"
          >
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('funcionalidades')}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('chatbot')}
                className="bg-gradient-to-r from-purple-600 to-lavender-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium text-center"
              >
                Conversar Agora
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
