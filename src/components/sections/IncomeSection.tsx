import React from 'react';
import { Section } from '../ui/Section';
import { CTAButton } from '../ui/CTAButton';
import { useModal } from '../../context/ModalContext';
import { ShoppingCart, Utensils, Truck, Banknote } from 'lucide-react';
import { motion } from 'motion/react';

export const IncomeSection: React.FC = () => {
  const { openModal } = useModal();

  const sources = [
    {
      icon: <ShoppingCart className="w-5 h-5 text-white" />,
      title: "Розничные продажи",
      text: "Стабильный поток ежедневной выручки",
      delay: 0
    },
    {
      icon: <Utensils className="w-5 h-5 text-white" />,
      title: "Собственное производство",
      text: "Высокая маржинальность категории «фреш»",
      delay: 0.1
    },
    {
      icon: <Truck className="w-5 h-5 text-white" />,
      title: "Собственная доставка",
      text: "+20–40% к выручке без расширения площади",
      delay: 0.2
    },
    {
      icon: <Banknote className="w-5 h-5 text-white" />,
      title: "Ретро-бонус от поставщиков",
      text: "Дополнительный доход без вложений",
      delay: 0.3
    }
  ];

  return (
    <Section id="income" className="bg-v-cream">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
        <div className="text-left mb-8 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold text-v-charcoal mb-6 text-balance leading-tight">
            Один магазин —<br />4 потока дохода
          </h2>
          <p className="text-base text-v-text-muted font-medium text-pretty leading-relaxed max-w-sm">
            Вы зарабатываете не на одном магазине, а на системе, где каждый товар работает в нескольких каналах.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 border border-v-green-deep/5 shadow-sm">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-v-text-muted mb-6">Источники дохода</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {sources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: source.delay }}
                className="flex items-center gap-4 p-4 bg-v-cream rounded-2xl"
              >
                <div className="w-12 h-12 bg-v-green-deep rounded-xl flex shrink-0 items-center justify-center text-white shadow-sm">
                  {source.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-v-charcoal leading-snug mb-1">{source.title}</h3>
                  <p className="text-xs text-v-text-muted leading-tight font-medium">{source.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-8 bg-v-charcoal rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-v-green-deep shadow-xl"
      >
        <div className="text-left max-w-xl">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
            Вся прибыль —<br />остаётся у вас
          </h3>
          <p className="text-v-sand/80 text-[11px] uppercase tracking-widest font-bold">
            Мы работаем за фиксированное роялти
          </p>
        </div>
        <div className="shrink-0">
          <CTAButton 
            variant="primary" 
            size="lg"
            onClick={() => openModal('income', 'Узнать доход (Income)', 'income')}
          >
            Узнать потенциал прибыли
          </CTAButton>
        </div>
      </motion.div>
    </Section>
  );
};
