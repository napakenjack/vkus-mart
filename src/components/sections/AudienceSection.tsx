import React from 'react';
import { Section } from '../ui/Section';
import { CTAButton } from '../ui/CTAButton';
import { useModal } from '../../context/ModalContext';
import { UserCog, TrendingUp, Building2, XCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const AudienceSection: React.FC = () => {
  const { openModal } = useModal();

  const audiences = [
    {
      icon: <UserCog className="w-8 h-8 text-v-red" />,
      title: "Предпринимателям",
      text: "Которые хотят открыть собственный магазин и управлять бизнесом с понятной экономикой и жёсткой системой."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-v-burgundy" />,
      title: "Инвесторам",
      text: "Которые хотят получать стабильный долгосрочный доход в ритейле и делегировать часть операционного управления."
    },
    {
      icon: <Building2 className="w-8 h-8 text-v-gold" />,
      title: "Владельцам помещений",
      text: "Которые хотят превратить свою простаивающую площадь в работающий, привлекательный и прибыльный бизнес."
    }
  ];

  const painPoints = [
    "нет обмена и автоматического возврата товара",
    "новинки заходят слишком поздно или не заходят вообще",
    "ассортимент не анализируется на основе данных",
    "нет консигнации и нормальных условий поставок от брендов",
    "кассовые разрывы и давление на оборотные средства",
    "категории (например, фрукты) приходится отдавать в аренду"
  ];

  const solutions = [
    "централизованная работа с поставщиками и условия федеральной сети",
    "управление ассортиментом строго на основе big data",
    "регулярный ввод и тестирование новинок в сети",
    "выгодная консигнация и длинные отсрочки платежей",
    "система автозаказа и полный контроль остатков",
    "внутренняя поддержка высокомаржинальных категорий"
  ];

  return (
    <Section id="audience" className="bg-white">
      <div className="max-w-3xl mb-16 md:mb-20 text-center mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-v-text mb-6 tracking-tight text-balance">
          Кому подойдёт этот бизнес
        </h2>
        <p className="text-lg text-v-muted font-medium text-pretty leading-relaxed">
          Формат ВКУСМАРТ подходит тем, кто хочет зарабатывать на системном ритейле — без типичных ошибок одиночных магазинов.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-24 md:mb-32">
        {audiences.map((aud, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-v-cream p-8 md:p-10 rounded-[2rem] border border-v-grey-light flex flex-col items-center text-center shadow-sm hover:shadow-card transition-shadow"
          >
            <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm border border-v-grey-light">
              {aud.icon}
            </div>
            <h3 className="text-xl font-bold text-v-text mb-4">{aud.title}</h3>
            <p className="text-v-muted text-sm leading-relaxed font-medium">{aud.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Contrast Block */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 rounded-[2rem] overflow-hidden shadow-card bg-white border border-v-grey-light"
      >
        <div className="bg-v-cream p-8 md:p-12 border-b md:border-b-0 md:border-r border-v-grey-light flex flex-col">
          <h3 className="text-2xl font-bold text-v-text/80 mb-8 leading-tight pr-4">
            Если вы уже открывали магазин, вы сталкивались с этим:
          </h3>
          <ul className="space-y-5 flex-grow">
            {painPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <XCircle className="w-5 h-5 text-v-red-soft shrink-0 mt-0.5 opacity-80" />
                <span className="text-v-muted font-medium leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white p-8 md:p-12 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-v-red/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <h3 className="text-2xl font-bold text-v-burgundy mb-8 leading-tight pr-4 relative z-10">
            Что меняется с партнёрством ВКУСМАРТ:
          </h3>
          <ul className="space-y-5 flex-grow relative z-10">
            {solutions.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-v-green shrink-0 mt-0.5" />
                <span className="text-v-text font-bold leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <div className="mt-16 max-w-3xl mx-auto text-center px-4">
        <p className="text-xl font-bold text-v-text mb-8 text-pretty leading-relaxed">
          Вы не повторяете ошибки одиночных магазинов — вы работаете по системе, которая уже доказала свою эффективность.
        </p>
        <CTAButton 
          variant="primary" 
          size="lg"
          onClick={() => openModal('location', 'Оценить локацию (Audience)', 'audience')}
        >
          Оценить свою локацию
        </CTAButton>
      </div>
    </Section>
  );
};
