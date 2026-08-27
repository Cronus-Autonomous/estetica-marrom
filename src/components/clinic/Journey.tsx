import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, Sparkles, HeartHandshake, Smile } from "lucide-react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const steps = [
  { n: "01", icon: MessageCircle, title: "Consulta", text: "Escuta atenta e avaliação detalhada das suas necessidades." },
  { n: "02", icon: ClipboardCheck, title: "Plano personalizado", text: "Protocolo desenhado exclusivamente para você." },
  { n: "03", icon: Sparkles, title: "Tratamento", text: "Aplicação com tecnologia e cuidado em cada etapa." },
  { n: "04", icon: HeartHandshake, title: "Acompanhamento", text: "Suporte contínuo para garantir sua segurança e conforto." },
  { n: "05", icon: Smile, title: "Resultados", text: "Evolução natural e visível, respeitando sua expressão." },
];

export const Journey: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[#FFFDFC] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="block text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-[#B08A45] mb-4">
            Sua jornada
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#30242B]">
            Sua jornada começa <span className="italic text-[#642C4B]">aqui.</span>
          </h2>
        </motion.div>

        <div className="relative mt-16">
          {/* connector line desktop */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-[#E8DED4]" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#FFFDFC] border border-[#E0D4C8] flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-[#642C4B]" strokeWidth={1.4} />
                </div>
                <span className="font-serif text-sm text-[#B08A45] mb-1">{s.n}</span>
                <h3 className="font-serif text-lg text-[#30242B]">{s.title}</h3>
                <p className="mt-2 text-[13px] text-[#5c4f54] font-sans leading-relaxed max-w-[200px]">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;