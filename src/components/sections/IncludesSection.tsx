import React from 'react';
import { Section } from '../ui/Section';
import { CTAButton } from '../ui/CTAButton';
import { useModal } from '../../context/ModalContext';
import { Package, LineChart, ShieldCheck, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const IncludesSection: React.FC = () => {
  const { openModal } = useModal();

  const groups = [
    {
      icon: <Package className="w-6 h-6 text-white" />,
      title: "ЗАПУСК МАГАЗИНА",
      items: [
        { label: "Проектировка магазина", desc: "эффективная планировка под продажи и клиентский поток" },
        { label: "Сопровождение стройки", desc: "контроль всех этапов реализации архитектурного проекта" },
        { label: "Проектирование света", desc: "по фирменной методике, напрямую влияющей на продажи" },
        { label: "Создание зоны производства", desc: "модель «вкусного» производства внутри магазина" },
        { label: "Детальный просчёт локации", desc: "анализ трафика и потенциала точки до инвестиций" },
      ]
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: "ПРОДАЖИ И УПРАВЛЕНИЕ",
      items: [
        { label: "Выставление товара", desc: "потенциал категории не «на глаз», а на основе данных" },
        { label: "Система автозаказа", desc: "автоматическое умное управление остатками" },
        { label: "Закуп для запуска", desc: "формирование идеальной стартовой товарной матрицы" },
        { label: "Работа с поставщиками", desc: "договоры на оптимальных условиях крупной сети" },
      ]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "СИСТЕМА И КОНТРОЛЬ",
      items: [
        { label: "IT-система управления", desc: "тотальный контроль показателей и динамики продаж" },
        { label: "Биометрический контроль", desc: "прозрачность работы и графика сотрудников" },
        { label: "Должностные инструкции", desc: "база регламентов, которые реально работают" },
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "СОПРОВОЖДЕНИЕ ПАРТНЁРА",
      items: [
        { label: "Еженедельные выезды", desc: "аудит магазина и конкретные шаги по росту выручки" },
        { label: "Практическое управление", desc: "не теория, а реальные действия для увеличения прибыли" },
      ]
    }
  ];

  return (
    <Section id="franchise-includes" className="bg-white">
      <div className="max-w-3xl mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-v-text mb-6 tracking-tight text-balance">
          Что входит во франшизу
        </h2>
        <p className="text-lg text-v-muted font-medium text-pretty leading-relaxed">
          Вы получаете не просто франшизу, а полностью настроенную систему запуска, управления и масштабирования.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {groups.map((group, gIdx) => (
          <motion.div 
            key={gIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: gIdx * 0.1 }}
            className="bg-v-cream rounded-2xl p-8 border-t-4 border-t-v-red shadow-card"
          >
            <div className="flex items-center gap-4 mb-8 border-b border-v-grey-light pb-6">
              <div className="w-12 h-12 rounded-full bg-v-burgundy flex items-center justify-center shadow-inner">
                {group.icon}
              </div>
              <h3 className="font-bold text-v-burgundy tracking-widest uppercase text-sm">{group.title}</h3>
            </div>
            <ul className="space-y-6">
              {group.items.map((item, iIdx) => (
                <li key={iIdx} className="flex flex-col">
                  <span className="font-bold text-v-text mb-1">{item.label}</span>
                  <span className="text-sm text-v-muted font-medium leading-relaxed">— {item.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="border border-v-red/20 bg-v-red/5 rounded-[2rem] p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-v-red/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <p className="text-xl md:text-2xl font-bold text-v-text leading-relaxed mb-8 relative z-10">
          Вы не собираете бизнес по частям — вы получаете систему, где уже продумано всё: от стройки до увеличения продаж.
        </p>
        <div className="relative z-10">
          <CTAButton 
            variant="primary" 
            size="lg"
            onClick={() => openModal('launch_plan', 'План запуска (Includes)', 'includes')}
          >
            Получить план запуска магазина
          </CTAButton>
        </div>
      </div>
    </Section>
  );
};
