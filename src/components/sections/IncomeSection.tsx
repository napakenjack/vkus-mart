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
          <div className="inline-block bg-v-red text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 shadow-sm border border-v-red-dark">
            4 источника дохода
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-v-text mb-6 text-balance leading-tight">
            Один магазин —<br />4 потока дохода
          </h2>
          <p className="text-base text-v-muted font-medium text-pretty leading-relaxed max-w-sm">
            Вы зарабатываете не на одном магазине, а на системе, где каждый товар работает в нескольких каналах.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] p-6 md:p-10 border border-v-grey-light/50 shadow-card">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-v-muted mb-6">Источники дохода</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {sources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: source.delay }}
                className="flex items-center gap-5 p-5 bg-v-ivory/50 rounded-[1.5rem] border border-v-grey-light/30 hover:border-v-red/20 transition-colors group"
              >
                <div className="w-14 h-14 bg-v-red rounded-full flex shrink-0 items-center justify-center text-white shadow-[0_4px_12px_rgba(180,2,22,0.2)] group-hover:scale-105 transition-transform duration-300">
                  {source.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-v-text leading-snug mb-1">{source.title}</h3>
                  <p className="text-xs text-v-muted leading-tight font-medium">{source.text}</p>
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
        className="max-w-6xl mx-auto mt-10 bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-v-grey-light shadow-card relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-v-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="text-left max-w-xl relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-v-text mb-3">
            Вся прибыль —<br />остаётся у вас
          </h3>
          <p className="text-v-green-soft text-xs uppercase tracking-widest font-bold">
            <span className="w-2 h-2 inline-block rounded-full bg-v-green mr-2"></span>
            Мы работаем за фиксированное роялти
          </p>
        </div>
        <div className="shrink-0 relative z-10">
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
