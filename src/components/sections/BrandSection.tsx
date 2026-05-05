import React from 'react';
import { Section } from '../ui/Section';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export const BrandSection: React.FC = () => {
  return (
    <Section id="brand" className="bg-v-green-deep text-v-cream overflow-hidden" noPadding>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-center py-24 md:py-32">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight text-balance">
            Сильный бренд, который <span className="text-v-accent">продаёт</span>
          </h2>
          <p className="text-lg md:text-xl text-v-sand/80 font-medium text-pretty leading-relaxed mb-10">
            ВКУСМАРТ — это не просто магазин. Это узнаваемый бренд, который привлекает платёжеспособных клиентов и увеличивает частоту покупок.
          </p>

          <div className="space-y-6 mb-12">
            <h3 className="text-sm font-bold tracking-widest text-v-accent uppercase">Фирменный стиль разработан так, чтобы:</h3>
            <ul className="space-y-4 text-v-sand font-medium">
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-v-green-fresh shrink-0 mt-0.5" />
                <span>привлекать внимание с первого взгляда</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-v-green-fresh shrink-0 mt-0.5" />
                <span>выделяться среди устаревших конкурентов</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-v-green-fresh shrink-0 mt-0.5" />
                <span>максимально вызывать доверие у покупателей</span>
              </li>
              <li className="flex items-start gap-4">
                <Check className="w-5 h-5 text-v-green-fresh shrink-0 mt-0.5" />
                <span>увеличивать конверсию в спонтанную покупку</span>
              </li>
            </ul>
          </div>
          
          <div className="inline-block border-l-4 border-v-accent pl-6 py-2">
            <p className="text-white font-bold text-lg leading-relaxed text-balance">
              Каждый элемент — от вывески до упаковки —<br/> 
              работает на ваши продажи и узнаваемость.
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
          <div className="rounded-3xl overflow-hidden col-span-2 row-span-1 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-v-charcoal/40 to-transparent z-10 w-full h-full pointer-events-none"></div>
            <ImagePlaceholder src="/public/images/brand-packaging.jpg" alt="Упаковка ВКУСМАРТ" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
             <ImagePlaceholder src="/public/images/brand-cups.jpg" alt="Стаканы ВКУСМАРТ" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white flex items-center justify-center p-8">
             {/* Logo SVG Placeholder */}
             <div className="w-20 h-20 bg-v-green-deep rounded-2xl flex items-center justify-center text-v-accent font-bold text-5xl leading-none shadow-inner">
               В
             </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
};
