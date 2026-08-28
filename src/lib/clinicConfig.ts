// Centralized configuration for the clinic landing page.
// Edit these values to update the entire site.
import beforeFacial from "@/assets/before-facial.jpg";
import beforeFacial2 from "@/assets/before-facial2.jpg";
import heroimg from "@/assets/hero.png";

export const clinic = {
  name: "Veloura",
  tagline: "Estética Avançada",
  // WhatsApp number in international format, digits only.
  whatsappNumber: "5511999999999",
  whatsappDisplay: "+55 (11) 99999-9999",
  phone: "+55 (11) 3030-4040",
  email: "atendimento@veloura.com.br",
  address: "Rua das Camélias, 120 — Jardins, São Paulo · SP",
  addressShort: "Jardins, São Paulo",
  hours: [
    { day: "Segunda à Sexta", time: "09h — 19h" },
    { day: "Sábado", time: "09h — 16h" },
    { day: "Domingo", time: "Fechado" },
  ],
  mapsEmbed:
    "https://www.google.com/maps?q=Jardins+São+Paulo&output=embed",
  mapsLink: "https://maps.google.com/?q=Jardins+São+Paulo",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
    google: "https://google.com",
  },
  googleRating: {
    score: 4.9,
    count: 218,
    url: "https://google.com",
  },
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(
    message ?? "Olá! Gostaria de agendar uma avaliação."
  )}`;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Especialistas", href: "#especialistas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export type Treatment = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

export const treatments: Treatment[] = [
  {
    id: "rejuvenescimento",
    name: "Rejuvenescimento Facial",
    category: "Facial",
    description:
      "Uma abordagem avançada para suavizar sinais do tempo e devolver firmeza, luminosidade e naturalidade à pele.",
    image: "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/ed82589ca_generated_38596ff6.png",
  },
  {
    id: "harmonizacao",
    name: "Harmonização Facial",
    category: "Facial",
    description:
      "Protocolos delicados para equilibrar traços e valorizar a sua beleza com resultado sutil e elegante.",
    image: "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/33f25b361_generated_7b8b7ca2.png",
  },
  {
    id: "laser",
    name: "Laser & Fototerapia",
    category: "Tecnologia",
    description:
      "Tecnologia de precisão para tratar manchas, textura e vascular com segurança e conforto.",
    image: "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/2887bd121_generated_b3a00f8f.png",
  },
  {
    id: "corporal",
    name: "Tratamentos Corporais",
    category: "Corpo",
    description:
      "Cuidado completo para firmeza, contorno e bem-estar do corpo com protocolos personalizados.",
    image: "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/7a585ecf0_generated_e9080043.png",
  },
];

export type Doctor = {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  image: string;
};

export const doctors: Doctor[] = [
  {
    id: "dra-aishwarya",
    name: "Dra. Aishwara Vidal",
    title: "Dermatologista",
    specialty: "Estética avançada e laser",
    experience: "12 anos de experiência",
    image: "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/9438ddce6_generated_ac3d2d88.png",
  },
  {
    id: "dra-meera",
    name: "Dra. Marina Nunes",
    title: "Dermatologista",
    specialty: "Rejuvenescimento facial",
    experience: "9 anos de experiência",
    image: "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/9512a6b85_generated_17f3bc1d.png",
  },
  {
    id: "dra-rhea",
    name: "Dra. Helena Castro",
    title: "Especialista em Estética",
    specialty: "Harmonização e bioestimuladores",
    experience: "11 anos de experiência",
    image: "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/97cff2f89_generated_7c5d24c5.png",
  },
];

export type ResultPair = {
  id: string;
  treatment: string;
  description: string;
  timeframe: string;
  before: string;
  after: string;
};

export const results: ResultPair[] = [
  {
    id: "r1",
    treatment: "Rejuvenescimento Facial",
    description: "Pele mais luminosa e uniforme após protocolo personalizado.",
    timeframe: "8 semanas",
    before: beforeFacial,
    after: "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/d5c8c82f6_generated_3b02c0ef.png",
  },
  {
    id: "r2",
    treatment: "Tratamento de Manchas",
    description: "Redução visível de manchas com tecnologia de laser.",
    timeframe: "6 semanas",
    before: beforeFacial2,
    after: "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/ff2da31df_generated_ceb9e980.png",
  },
];

// Testimonials — structured to receive real Google Business Profile reviews.
// Replace `reviews` with data fetched from the Google Places API.
export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  verified?: boolean;
};

export type TestimonialData = {
  aggregate: { score: number; count: number; source: string };
  reviews: Review[];
  googleUrl: string;
};

export const testimonials: TestimonialData = {
  aggregate: {
    score: clinic.googleRating.score,
    count: clinic.googleRating.count,
    source: "Avaliações no Google",
  },
  googleUrl: clinic.googleRating.url,
  reviews: [
    {
      id: "t1",
      author: "Carla M.",
      rating: 5,
      text: "Atendimento impecável do início ao fim. Saí da consulta me sentindo ouvida e o resultado superou minhas expectativas, sempre com naturalidade.",
      date: "Março, 2026",
      verified: true,
    },
    {
      id: "t2",
      author: "Renata S.",
      rating: 5,
      text: "Profissionais extremamente cuidadosos. O protocolo foi explicado com clareza e respeitou o tempo da minha pele. Recomendo de olhos fechados.",
      date: "Fevereiro, 2026",
      verified: true,
    },
    {
      id: "t3",
      author: "Beatriz L.",
      rating: 5,
      text: "Ambiente sofisticado e acolhedor. Senti diferença já nas primeiras semanas. É um cuidado que transmite confiança em cada etapa.",
      date: "Janeiro, 2026",
      verified: true,
    },
  ],
};

export const heroImage = heroimg;
export const aboutImage = "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/6142bc0bf_generated_ef5f6ed8.png";
export const featuredImage = "https://media.base44.com/images/public/6a90a49240900e44c5b342f4/940f902e5_generated_02fadd40.png";