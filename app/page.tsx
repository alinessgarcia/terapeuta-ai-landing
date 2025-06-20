
'use client';

import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import FeaturesSection from '@/components/features-section';
import BenefitsSection from '@/components/benefits-section';
import ChatbotSection from '@/components/chatbot-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <BenefitsSection />
      <ChatbotSection />
      <Footer />
    </main>
  );
}
