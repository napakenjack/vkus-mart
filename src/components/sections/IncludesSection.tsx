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
      icon: <Package className="w-6 h-6 text-v-accent" />,
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
      icon: <LineChart className="w-6 h-6 text-blue-500" />,
      title: "ПРОДАЖИ И УПРАВЛЕНИЕ",
      items: [
        { label: "Выставление товара", desc: "потенциал категории не «на глаз», а на основе данных" },
        { label: "Система автозаказа", desc: "автоматическое умное управление остатками" },
        { label: "Закуп для запуска", desc: "формирование идеальной стартовой товарной матрицы" },
        { label: "Работа с поставщиками", desc: "договоры на оптимальных условиях крупной сети" },
      ]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-v-green-fresh" />,
      title: "СИСТЕМА И КОНТРОЛЬ",
      items: [
        { label: "IT-система управления", desc: "тотальный контроль показателей и динамики продаж" },
        { label: "Биометрический контроль", desc: "прозрачность работы и графика сотрудников" },
        { label: "Должностные инструкции", desc: "база регламентов, которые реально работают" },
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6 text-v-green-deep" />,
      title: "СОПРОВОЖДЕНИЕ ПАРТНЁРА",
      items: [
        { label: "Еженедельные выезды", desc: "аудит магазина и конкретные шаги по росту выручки" },
        { label: "Практическое управление", desc: "не теория, а реальные действия для увеличения прибыли" },
      ]
    }
  ];

  return (
    <Section id="franchise-includes" className="bg-v-charcoal text-v-cream">
      <div className="max-w-3xl mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight text-balance">
          Что входит во франшизу
        </h2>
        <p className="text-lg text-v-sand/70 font-medium text-pretty leading-relaxed">
          Вы получаете не просто франшизу, а полностью настроенную систему запуска, управления и масштабирования.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
        {groups.map((group, gIdx) => (
          <motion.div 
            key={gIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: gIdx * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              {group.icon}
              <h3 className="font-bold text-white tracking-widest uppercase text-sm">{group.title}</h3>
            </div>
            <ul className="space-y-6">
              {group.items.map((item, iIdx) => (
                <li key={iIdx} className="flex flex-col">
                  <span className="font-semibold text-v-accent mb-1">{item.label}</span>
                  <span className="text-sm text-v-sand/60 leading-relaxed">— {item.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="border border-white/10 bg-white/5 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm">
        <p className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-8">
          Вы не собираете бизнес по частям — вы получаете систему, где уже продумано всё: от стройки до увеличения продаж.
        </p>
        <CTAButton 
          variant="primary" 
          onClick={() => openModal('launch_plan', 'План запуска (Includes)', 'includes')}
        >
          Получить план запуска магазина
        </CTAButton>
      </div>
    </Section>
  );
};
