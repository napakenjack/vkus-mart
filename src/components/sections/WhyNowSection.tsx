import React from 'react';
import { Section } from '../ui/Section';
import { CTAButton } from '../ui/CTAButton';
import { useModal } from '../../context/ModalContext';
import { motion } from 'motion/react';
import { TrendingUp, MapPin, Award, Maximize } from 'lucide-react';

export const WhyNowSection: React.FC = () => {
  const { openModal } = useModal();

  const reasons = [
    {
      icon: <TrendingUp className="w-8 h-8 text-v-red" />,
      title: "Рынок активно растёт",
      text: "Спрос на качественный современный ритейл формата «у дома» стабильно превышает предложение."
    },
    {
      icon: <MapPin className="w-8 h-8 text-v-red" />,
      title: "Сильные локации ограничены",
      text: "Лучшие места в спальных районах и ЖК комфорт-класса быстро занимаются."
    },
    {
      icon: <Award className="w-8 h-8 text-v-red" />,
      title: "Доказанный результат",
      text: "Формат Daily уже показывает плановую экономику на открытых точках."
    },
    {
      icon: <Maximize className="w-8 h-8 text-v-red" />,
      title: "Сеть масштабируется",
      text: "Подключаясь сейчас, вы получаете лучшие условия входа на старте федеральной экспансии."
    }
  ];

  return (
    <Section id="why-now" className="bg-v-burgundy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-v-red/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-v-red/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-3xl mb-16 mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-balance">
          Почему открывать ВКУСМАРТ <br className="hidden md:block" />нужно именно сейчас
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
        {reasons.map((reason, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white p-8 rounded-[2rem] border-none shadow-[0_10px_40px_rgba(0,0,0,0.1)] text-center group"
          >
            <div className="w-16 h-16 mx-auto bg-v-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-v-red transition-colors duration-300">
              {React.cloneElement(reason.icon as React.ReactElement, { className: "w-8 h-8 text-v-red group-hover:text-white transition-colors duration-300" })}
            </div>
            <h3 className="font-bold text-v-text text-xl mb-3">{reason.title}</h3>
            <p className="text-v-muted text-sm font-medium leading-relaxed">{reason.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto bg-white/10 p-10 md:p-14 rounded-[2.5rem] border border-white/20 backdrop-blur-md relative z-10">
        <p className="text-xl md:text-2xl font-bold text-white mb-8 text-balance leading-snug">
          Чем раньше вы заходите в партнёрство — тем сильнее ваша позиция на рынке города.
        </p>
        <CTAButton 
          variant="hero" 
          size="lg"
          onClick={() => openModal('calculation', 'Расчёт (WhyNow)', 'why-now')}
        >
          Получить расчёт и план запуска
        </CTAButton>
      </div>
    </Section>
  );
};
