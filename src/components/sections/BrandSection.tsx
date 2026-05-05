import React from 'react';
import { Section } from '../ui/Section';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export const BrandSection: React.FC = () => {
  return (
    <Section id="brand" className="bg-v-burgundy text-white overflow-hidden" noPadding>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-center py-24 md:py-32">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
            Премиальный формат <br/><span className="text-v-gold">Grocerant</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-medium text-pretty leading-relaxed mb-10">
            ВКУСМАРТ — это больше, чем современный ритейл. Это гибрид магазина и ресторана, который переосмысляет ежедневные покупки и повышает средний чек.
          </p>

          <div className="space-y-6 mb-12">
            <h3 className="text-sm font-bold tracking-widest text-v-gold uppercase">Архитектурный дизайн разработан, чтобы:</h3>
            <ul className="space-y-4 text-white/90 font-medium text-sm md:text-base">
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-v-gold shrink-0 mt-0.5" />
                <span>создавать премиальную атмосферу благодаря архитектурному свету</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-v-gold shrink-0 mt-0.5" />
                <span>выделяться среди стандартных гипермаркетов и магазинов "у дома"</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-v-gold shrink-0 mt-0.5" />
                <span>подчеркивать свежесть продуктов зоны фреш и собственного производства</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-v-gold shrink-0 mt-0.5" />
                <span>задерживать гостя внутри пространства, стимулируя спонтанные покупки</span>
              </li>
            </ul>
          </div>
          
          <div className="inline-block border-l-4 border-v-gold pl-6 py-2">
            <p className="text-white font-bold text-lg leading-relaxed text-balance">
              Каждый элемент работает на статус и восприятие —<br/> 
              от премиальных материалов до расстановки стеллажей.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] md:h-[600px] grid grid-cols-2 grid-rows-2 gap-4"
        >
          <div className="rounded-[2rem] overflow-hidden col-span-2 row-span-1 shadow-2xl relative border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-v-burgundy/60 to-transparent z-10 w-full h-full pointer-events-none"></div>
            <ImagePlaceholder src="https://images.unsplash.com/photo-1581515286576-96dd6dc9dfa7?auto=format&fit=crop&q=80&w=1200" alt="Интерьер ВКУСМАРТ" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" />
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-xl border border-white/10">
             <ImagePlaceholder src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Архитектурный свет" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" />
          </div>
          <div className="rounded-[2rem] border border-white/10 overflow-hidden shadow-xl bg-v-grey-light flex items-center justify-center p-8">
             <img src="/public/images/logo-vkusmart.svg" alt="ВКУСМАРТ Лого" className="w-3/4 max-w-[120px] object-contain opacity-90" />
          </div>
        </motion.div>

      </div>
    </Section>
  );
};
