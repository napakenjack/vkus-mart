import React from 'react';
import { Section } from '../ui/Section';
import { CTAButton } from '../ui/CTAButton';
import { useModal } from '../../context/ModalContext';
import { motion } from 'motion/react';

export const LaunchSection: React.FC = () => {
  const { openModal } = useModal();

  const steps = [
    {
      title: "Подбор локации",
      desc: "Вы подбираете 3 помещения — мы анализируем их потенциал."
    },
    {
      title: "Анализ трафика и аренды",
      desc: "Показываем реальный трафик — помогаем получить адекватные условия аренды."
    },
    {
      title: "Проектирование",
      desc: "Разрабатываем полный проект: планировка, оборудование, логика потоков."
    },
    {
      title: "Ремонт под контролем",
      desc: "Вы проводите ремонт — мы сопровождаем и контролируем реализацию."
    },
    {
      title: "Юридическая защита",
      desc: "Сопровождаем на всех этапах — защищаем ваши коммерческие интересы."
    },
    {
      title: "Найм и обучение",
      desc: "Открываем набор персонала — даём доступ к корпоративной системе обучения."
    },
    {
      title: "Обучение на практике",
      desc: "Ключевые сотрудники проходят стажировку на действующих магазинах сети."
    },
    {
      title: "Подготовка к открытию",
      desc: "Формируем эталонный ассортимент — делаем правильную выкладку товара."
    },
    {
      title: "Запуск IT и автоматизации",
      desc: "Настраиваем аналитику — чтобы вы видели проблемы до их возникновения."
    },
    {
      title: "Техническое открытие",
      desc: "Запускаем магазин — сопровождаем на месте в первые дни нагрузки."
    }
  ];

  return (
    <Section id="launch" className="bg-v-cream">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
        
        {/* Sticky Left Text */}
        <div className="lg:sticky lg:top-32">
          <div className="inline-flex items-center gap-2 bg-v-red/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-v-red-dark mb-8 border border-v-red/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-v-red-dark"></span> За 3 месяца
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-v-text mb-6 tracking-tight leading-tight text-balance">
            Пошаговый запуск вашего магазина
          </h2>
          <p className="text-base text-v-muted font-medium text-pretty leading-relaxed mb-8 max-w-sm">
            Вы проходите весь путь не в одиночку — безопасный старт с сопровождением на каждом из 10 ключевых этапов.
          </p>
          <CTAButton 
            variant="outline" 
            size="lg"
            onClick={() => openModal('launch_plan', 'План запуска (Timeline)', 'launch')}
          >
            Детальный план
          </CTAButton>
        </div>

        {/* Right Steps Card */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-v-grey-light shadow-card">
          <h3 className="text-xs font-bold uppercase tracking-widest text-v-muted mb-10">Шаги запуска</h3>
          <div className="space-y-6 md:space-y-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex gap-6 items-start group"
              >
                <div className="text-v-red font-bold text-2xl w-8 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 pb-6 md:pb-8 border-b border-v-grey-light/60 group-last:border-0 group-last:pb-0">
                  <h4 className="text-lg font-bold text-v-text mb-2">{step.title}</h4>
                  <p className="text-sm text-v-muted font-medium leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};
