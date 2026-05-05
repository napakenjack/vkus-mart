import React from 'react';
import { Section } from '../ui/Section';
import { CTAButton } from '../ui/CTAButton';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { useModal } from '../../context/ModalContext';
import { motion } from 'motion/react';

export const FormatsSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <Section id="formats" className="bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-v-green-deep mb-6 tracking-tight text-balance">
          Форматы ВКУСМАРТ, которые <span className="text-v-action">приносят прибыль</span>
        </h2>
        <p className="text-lg md:text-xl text-v-text-muted font-medium text-pretty leading-relaxed">
          Вы начинаете с формата <strong className="text-v-charcoal">Daily</strong> — самого эффективного и быстрого для запуска в современном ритейле.
        </p>
      </div>

      {/* Main Format: DAILY */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="bg-v-sand rounded-[2.5rem] p-6 text-2xl font-bold md:p-12 mb-10 overflow-hidden relative border border-v-green-deep/5"
      >
        <div className="absolute top-0 right-0 bg-white shadow-sm text-v-charcoal text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-bl-2xl">
          Флагманский формат
        </div>
        
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 relative z-10">
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-v-charcoal mb-6 tracking-tighter">DAILY</h3>
            
            <div className="flex flex-col gap-4 mb-8 text-sm">
              <div className="flex justify-between border-b border-v-text-muted/10 pb-3">
                <span className="text-v-text-muted font-medium">Площадь</span>
                <span className="font-bold text-v-charcoal">250–400 м²</span>
              </div>
              <div className="flex justify-between border-b border-v-text-muted/10 pb-3">
                <span className="text-v-text-muted font-medium">Инвестиции</span>
                <span className="font-bold text-v-charcoal">от 100 млн ₸</span>
              </div>
              <div className="flex justify-between border-b border-v-text-muted/10 pb-3">
                <span className="text-v-text-muted font-medium">Окупаемость</span>
                <span className="font-bold text-v-charcoal text-right">по бизнес-плану</span>
              </div>
              <div className="flex justify-between border-b border-v-text-muted/10 pb-3">
                <span className="text-v-text-muted font-medium">Паушальный взнос</span>
                <span className="font-bold text-v-charcoal">15 млн ₸</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-[10px] font-bold text-[#5E625C] uppercase tracking-widest mb-4">ВКЛЮЧЕНО В СИСТЕМУ:</h4>
              <ul className="grid grid-cols-2 gap-y-3 text-xs font-bold text-v-charcoal">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-v-accent"></span> Холодильное обор.</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-v-accent"></span> Стеллажное обор.</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-v-accent"></span> IT & Кассы</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-v-accent"></span> Кухонное обор.</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[400px] md:h-[500px]">
            <div className="rounded-2xl overflow-hidden col-span-2 row-span-1 shadow-sm border border-white/40">
               <ImagePlaceholder src="/public/images/daily-1.jpg" alt="Daily Формат" className="hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-white/40">
               <ImagePlaceholder src="/public/images/daily-2.jpg" alt="Daily Витрина" className="hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-white/40">
               <ImagePlaceholder src="/public/images/daily-3.jpg" alt="Daily Производство" className="hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Secondary Formats */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 border border-v-green-deep/5 shadow-sm flex flex-col"
        >
          <div className="mb-6 h-[180px] rounded-xl overflow-hidden">
             <ImagePlaceholder src="/public/images/super-1.jpg" alt="Super Формат" />
          </div>
          <h3 className="text-2xl font-black text-v-charcoal mb-4">SUPER</h3>
          <p className="text-[#5E625C] text-xs mb-6 font-medium leading-relaxed">
            Подходит для более масштабных локаций с увеличенным ассортиментом и высокой плотностью трафика.
          </p>
          <div className="mt-auto space-y-3 text-xs">
            <div className="flex justify-between font-medium border-b border-black/5 pb-2"><span className="text-[#5E625C]">Площадь:</span> <span className="font-bold text-v-charcoal">401–699 м²</span></div>
            <div className="flex justify-between font-medium border-b border-black/5 pb-2"><span className="text-[#5E625C]">Инвестиции:</span> <span className="font-bold text-v-charcoal">от 150 млн ₸</span></div>
            <div className="flex justify-between font-medium pb-2"><span className="text-[#5E625C]">Взнос:</span> <span className="font-bold text-v-charcoal">20 млн ₸</span></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 border border-v-green-deep/5 shadow-sm flex flex-col"
        >
          <div className="mb-6 h-[180px] rounded-xl overflow-hidden">
             <ImagePlaceholder src="/public/images/hyper-1.jpg" alt="Hyper Формат" />
          </div>
          <h3 className="text-2xl font-black text-v-charcoal mb-4">HYPER</h3>
          <p className="text-[#5E625C] text-xs mb-6 font-medium leading-relaxed">
            Максимальный формат с полным ассортиментом продукции и высокой гарантированной выручкой для инвесторов.
          </p>
          <div className="mt-auto space-y-3 text-xs">
            <div className="flex justify-between font-medium border-b border-black/5 pb-2"><span className="text-[#5E625C]">Площадь:</span> <span className="font-bold text-v-charcoal">700–1500 м²</span></div>
            <div className="flex justify-between font-medium border-b border-black/5 pb-2"><span className="text-[#5E625C]">Инвестиции:</span> <span className="font-bold text-v-charcoal">от 250 млн ₸</span></div>
            <div className="flex justify-between font-medium pb-2"><span className="text-[#5E625C]">Взнос:</span> <span className="font-bold text-v-charcoal">25 млн ₸</span></div>
          </div>
        </motion.div>
      </div>

      <div className="text-center bg-v-charcoal text-white rounded-3xl p-10 md:p-14">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Мы не продаём «концепцию»</h3>
        <p className="text-lg text-v-sand/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Вы заходите в уже работающий, проверенный на практике системный бизнес с доказанной экономикой.
        </p>
        <CTAButton 
          variant="primary" 
          size="lg"
          onClick={() => openModal('strategy', 'Стратегия (Formats)', 'formats')}
        >
          Получить стратегию развития на 3 года
        </CTAButton>
      </div>
    </Section>
  );
};
