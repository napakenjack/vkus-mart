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
        <h2 className="text-4xl md:text-5xl font-bold text-v-text mb-6 tracking-tight text-balance">
          Форматы ВКУСМАРТ, которые <span className="text-v-red">приносят прибыль</span>
        </h2>
        <p className="text-lg md:text-xl text-v-muted font-medium text-pretty leading-relaxed">
          Вы начинаете с формата <strong className="text-v-text">Daily</strong> — самого эффективного и быстрого для запуска в современном ритейле.
        </p>
      </div>

      {/* Main Format: DAILY */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="bg-v-red rounded-[2.5rem] p-2 text-2xl font-bold mb-10 overflow-hidden relative border border-v-grey-light"
      >
        <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-white/30 z-20">
          Флагманский формат
        </div>
        
        <div className="grid lg:grid-cols-[1fr_1.2fr] relative z-10 bg-v-cream rounded-[2.2rem] overflow-hidden">
          
          <div className="p-8 md:p-12 pb-0 md:pb-12 order-2 lg:order-1">
            <h3 className="text-4xl md:text-5xl font-bold text-v-burgundy mb-8 tracking-tighter border-b border-v-burgundy/10 pb-6">DAILY</h3>
            
            <div className="flex flex-col gap-5 mb-8 text-sm">
              <div className="flex justify-between items-center pb-2">
                <span className="text-v-muted font-medium">Площадь</span>
                <span className="font-bold text-v-text text-base">250–400 м²</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-v-muted font-medium">Инвестиции</span>
                <div className="bg-v-ivory text-v-red-dark px-4 py-1.5 rounded-full border border-v-gold/30 text-sm">от 100 млн ₸</div>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-v-muted font-medium">Окупаемость</span>
                <span className="font-bold text-v-text text-right">по бизнес-плану</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-v-muted font-medium">Паушальный взнос</span>
                <div className="bg-v-ivory text-v-red-dark px-4 py-1.5 rounded-full border border-v-gold/30 text-sm">15 млн ₸</div>
              </div>
            </div>

            <div className="mb-8 p-6 bg-white rounded-[1.5rem] border border-v-grey-light/50">
              <h4 className="text-[10px] font-bold text-v-muted uppercase tracking-widest mb-4">ВКЛЮЧЕНО В СИСТЕМУ:</h4>
              <ul className="grid grid-cols-2 gap-y-4 text-xs font-bold text-v-text">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-v-red"></span> Холодильное обор.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-v-red"></span> Стеллажное обор.</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-v-red"></span> IT & Кассы</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-v-red"></span> Кухонное обор.</li>
              </ul>
            </div>
          </div>
          
          <div className="h-[300px] md:h-auto order-1 lg:order-2">
            <ImagePlaceholder src="/public/images/daily-1.jpg" alt="Daily Формат" className="w-full h-full object-cover" />
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
          className="bg-v-cream rounded-3xl p-8 border border-v-grey-light/50 shadow-sm flex flex-col"
        >
          <div className="mb-6 h-[180px] rounded-xl overflow-hidden shadow-card">
             <ImagePlaceholder src="/public/images/super-1.jpg" alt="Super Формат" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-v-burgundy mb-4">SUPER</h3>
          <p className="text-v-muted text-xs mb-6 font-medium leading-relaxed">
            Подходит для более масштабных локаций с увеличенным ассортиментом и высокой плотностью трафика.
          </p>
          <div className="mt-auto space-y-4 text-xs">
            <div className="flex justify-between items-center font-medium border-b border-black/5 pb-3">
              <span className="text-v-muted">Площадь:</span>
              <span className="font-bold text-v-text">401–699 м²</span>
            </div>
            <div className="flex justify-between items-center font-medium border-b border-black/5 pb-3">
              <span className="text-v-muted">Инвестиции:</span>
              <span className="font-bold bg-white text-v-red px-3 py-1 rounded-full border border-v-grey-light">от 150 млн ₸</span>
            </div>
            <div className="flex justify-between items-center font-medium">
              <span className="text-v-muted">Взнос:</span>
              <span className="font-bold bg-white text-v-red px-3 py-1 rounded-full border border-v-grey-light">20 млн ₸</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-v-cream rounded-3xl p-8 border border-v-grey-light/50 shadow-sm flex flex-col"
        >
          <div className="mb-6 h-[180px] rounded-xl overflow-hidden shadow-card">
             <ImagePlaceholder src="/public/images/hyper-1.jpg" alt="Hyper Формат" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-v-burgundy mb-4">HYPER</h3>
          <p className="text-v-muted text-xs mb-6 font-medium leading-relaxed">
            Максимальный формат с полным ассортиментом продукции и высокой гарантированной выручкой для инвесторов.
          </p>
          <div className="mt-auto space-y-4 text-xs">
            <div className="flex justify-between items-center font-medium border-b border-black/5 pb-3">
              <span className="text-v-muted">Площадь:</span>
              <span className="font-bold text-v-text">700–1500 м²</span>
            </div>
            <div className="flex justify-between items-center font-medium border-b border-black/5 pb-3">
              <span className="text-v-muted">Инвестиции:</span>
              <span className="font-bold bg-white text-v-red px-3 py-1 rounded-full border border-v-grey-light">от 250 млн ₸</span>
            </div>
            <div className="flex justify-between items-center font-medium">
              <span className="text-v-muted">Взнос:</span>
              <span className="font-bold bg-white text-v-red px-3 py-1 rounded-full border border-v-grey-light">25 млн ₸</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-center bg-v-burgundy text-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_40px_rgba(128,1,31,0.2)]">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Мы не продаём «концепцию»</h3>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Вы заходите в уже работающий, проверенный на практике системный бизнес с доказанной экономикой.
        </p>
        <CTAButton 
          variant="hero" 
          size="lg"
          onClick={() => openModal('strategy', 'Стратегия (Formats)', 'formats')}
        >
          Получить стратегию развития на 3 года
        </CTAButton>
      </div>
    </Section>
  );
};
