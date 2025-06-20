
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Terapeuta A.I - Seu Coach de Mindfulness 24/7",
  description: "Chatbot terapêutico especializado em mindfulness para pessoas com TDAH, ansiedade e estresse. Disponível 24 horas por dia, 7 dias por semana.",
  keywords: "terapeuta, AI, mindfulness, TDAH, ansiedade, estresse, meditação, bem-estar mental",
  authors: [{ name: "Carlos" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Terapeuta A.I - Seu Coach de Mindfulness 24/7",
    description: "Chatbot terapêutico especializado em mindfulness para pessoas com TDAH, ansiedade e estresse.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
