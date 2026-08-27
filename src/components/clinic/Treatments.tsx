import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { treatments, whatsappLink } from "@/lib/clinicConfig";
import { SectionHeader } from "./SectionHeader";
import { useReducedMotion } from "@/lib/useReducedMotion";

export const Treatments: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section id="tratamentos" className="bg-[#FFFDFC] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Nossos tratamentos"
          title={
            <>
              Tratamentos pensados para revelar{" "}
              <span className="italic text-[#642C4B]">o melhor de você.</span>
            </>
          }
          description="Protocolos personalizados para cuidar da sua pele, valorizar sua beleza e entregar resultados naturais."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((t, i) => (
            <motion.article
              key={t.id}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-2xl border border-[#E8DED4] bg-[#FFFDFC] overflow-hidden hover:shadow-[0_24px_50px_-24px_rgba(48,36,43,0.25)] hover:border-[#D9C9A8] transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#F3E6DF]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B08A45] mb-2">
                  {t.category}
                </span>
                <h3 className="font-serif text-xl text-[#30242B] leading-snug">
                  {t.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5c4f54] font-sans flex-1">
                  {t.description}
                </p>
                <a
                  href={whatsappLink(`Olá! Gostaria de saber mais sobre ${t.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-sans font-medium text-[#642C4B] group-hover:gap-3 transition-all duration-300"
                >
                  Conhecer tratamento
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;