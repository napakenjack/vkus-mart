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
      icon: <TrendingUp className="w-8 h-8 text-v-green-fresh" />,
      title: "Рынок активно растёт",
      text: "Спрос на качественный современный ритейл формата «у дома» стабильно превышает предложение."
    },
    {
      icon: <MapPin className="w-8 h-8 text-v-accent" />,
      title: "Сильные локации ограничены",
      text: "Лучшие места в спальных районах и ЖК комфорт-класса быстро занимаются."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Доказанный результат",
      text: "Формат Daily уже показывает плановую экономику на открытых точках."
    },
    {
      icon: <Maximize className="w-8 h-8 text-v-charcoal" />,
      title: "Сеть масштабируется",
      text: "Подключаясь сейчас, вы получаете лучшие условия входа на старте федеральной экспансии."
    }
  ];

  return (
    <Section id="why-now" className="bg-v-sand/20">
      <div className="max-w-3xl mb-16 mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-v-green-deep mb-6 tracking-tight text-balance">
          Почему открывать ВКУСМАРТ <br className="hidden md:block" />нужно именно сейчас
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {reasons.map((reason, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-v-sand/50 card-shadow hover:border-v-sand transition-all text-center group"
          >
            <div className="w-16 h-16 mx-auto bg-v-sand/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {reason.icon}
            </div>
            <h3 className="font-bold text-v-charcoal text-xl mb-3">{reason.title}</h3>
            <p className="text-v-text-muted text-sm font-medium leading-relaxed">{reason.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center max-w-2xl mx-auto bg-white p-10 md:p-14 rounded-[2.5rem] border border-v-sand/60 card-shadow">
        <p className="text-xl md:text-2xl font-bold text-v-charcoal mb-8 text-balance leading-snug">
          Чем раньше вы заходите в партнёрство — тем сильнее ваша позиция на рынке города.
        </p>
        <CTAButton 
          variant="primary" 
          size="lg"
          onClick={() => openModal('calculation', 'Расчёт (WhyNow)', 'why-now')}
        >
          Получить расчёт и план запуска
        </CTAButton>
      </div>
    </Section>
  );
};
