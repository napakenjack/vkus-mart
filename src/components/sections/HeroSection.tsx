import React from 'react';
import { motion } from 'motion/react';
import { Section } from '../ui/Section';
import { CTAButton } from '../ui/CTAButton';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { useModal } from '../../context/ModalContext';

export const HeroSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <Section id="hero" className="pt-24 md:pt-32 pb-6 px-4 md:px-8 bg-v-cream overflow-hidden" noPadding>
      <div className="max-w-[1280px] mx-auto bg-v-burgundy rounded-[3rem] p-8 md:p-14 lg:p-20 text-white relative flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Visual background shape inside the rounded container */}
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 pointer-events-none rounded-r-[3rem] overflow-hidden">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200')] bg-cover mix-blend-overlay"></div>
        </div>

        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 lg:w-1/2"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-v-gold"></span> Франшиза премиального ритейла
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6 text-balance">
            Открой свой ВКУСМАРТ <br />
            <span className="text-v-gold">от 30 000 000 ₸ в год</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-[540px] text-pretty">
            Современный ритейл с доходом из 4 источников: магазин + производство + доставка + ретро-бонусы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <CTAButton 
              size="lg" 
              variant="hero"
              onClick={() => openModal('calculation', 'Получить расчёт (Hero)', 'hero')}
            >
              Получить расчёт
            </CTAButton>
          </div>
          
          <p className="text-[11px] text-white/50 font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-v-green-soft"></span>
            Свяжемся с вами в течение 24 часов
          </p>

          <div className="flex flex-wrap gap-8 mt-12 border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">от 60 дней</div>
              <div className="text-[10px] uppercase opacity-60 font-bold tracking-widest mt-1">Срок запуска</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">от 100 млн ₸</div>
              <div className="text-[10px] uppercase opacity-60 font-bold tracking-widest mt-1">Инвестиции</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white tracking-tight">4 канала</div>
              <div className="text-[10px] uppercase opacity-60 font-bold tracking-widest mt-1">Монетизации</div>
            </div>
          </div>
        </motion.div>

        {/* Right Visual Collage with Circular Modules */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative h-[400px] md:h-[500px] lg:h-[600px] lg:w-1/2 w-full mt-10 lg:mt-0"
        >
          {/* Main big image (circle) */}
          <div className="absolute inset-0 right-10 bottom-20 rounded-full overflow-hidden card-shadow bg-v-grey-light border-4 border-v-burgundy/10">
            <ImagePlaceholder src="/public/images/hero-interior-1.jpg" alt="Интерьер ВКУСМАРТ" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-v-red-dark/10 mix-blend-multiply"></div>
          </div>
          
          {/* Top right small image (rectangle with soft corners) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="absolute top-10 right-0 w-[45%] h-[40%] rounded-[2rem] overflow-hidden border-4 border-v-burgundy shadow-2xl z-20 bg-v-grey-light"
          >
            <ImagePlaceholder src="/public/images/hero-interior-2.jpg" alt="Витрина" className="w-full h-full object-cover" />
          </motion.div>
          
          {/* Bottom left image - Employee (circular) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="absolute bottom-0 left-[-20px] w-[50%] aspect-square rounded-full overflow-hidden border-4 border-v-burgundy shadow-2xl z-20 bg-v-grey-light"
          >
            <ImagePlaceholder src="/public/images/employee.jpg" alt="Сотрудник ВКУСМАРТ" className="w-full h-full object-cover" />
          </motion.div>

          {/* Floating Circle Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full flex items-center justify-center p-2 shadow-xl z-30 ring-8 ring-white/10"
          >
            <div className="w-full h-full border border-v-grey-light rounded-full flex items-center justify-center p-3">
              <img src="/public/images/logo-vkusmart.svg" alt="Вкусмарт" className="w-full h-auto" />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </Section>
  );
};
