import React from 'react';
import { Section } from '../ui/Section';
import { CTAButton } from '../ui/CTAButton';
import { useModal } from '../../context/ModalContext';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

export const SystemSection: React.FC = () => {
  const { openModal } = useModal();

  const systems = [
    {
      title: "Ассортимент и матрица",
      text: "Готовый набор товаров, проверенный на десятках действующих магазинов."
    },
    {
      title: "Централизованные закупки",
      text: "Работа с поставщиками на условиях крупной сети: лучшие цены, отсрочки, консигнация."
    },
    {
      title: "Система автозаказа",
      text: "Автоматическое управление остатками → меньше списаний и перегруза склада."
    },
    {
      title: "IT-система и аналитика",
      text: "Контроль продаж, остатков и ключевых показателей в режиме реального времени."
    },
    {
      title: "Собственное производство",
      text: "Готовая модель доготовки → до 50 высокомаржинальных позиций без сложного цеха."
    },
    {
      title: "Обучение персонала",
      text: "Готовые регламенты, видеоинструкции и жесткие сценарии работы."
    },
    {
      title: "Сопровождение специалистов",
      text: "Регулярные выездные аудиты, конкретные рекомендации и жесткий контроль показателей."
    },
    {
      title: "Подключение доставки",
      text: "Работа с онлайн-заказами (Wolt, Glovo, Яндекс) без собственной курьерской службы."
    }
  ];

  return (
    <Section id="system" className="bg-white">
      <div className="max-w-[1280px] mx-auto bg-v-sand rounded-3xl p-8 md:p-14 overflow-hidden relative border border-v-green-deep/5">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-v-accent/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-2xl mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-v-charcoal mb-4 tracking-tighter leading-none">
            Готовая бизнес-система <br/>под ключ
          </h2>
          <p className="text-xs md:text-sm text-v-charcoal/70 font-medium text-pretty leading-relaxed max-w-sm">
            Мы берем на себя IT, закупки и обучение персонала. Вы управляете прибылью.
          </p>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {systems.map((sys, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 border border-white/50"
            >
              <div className="flex flex-col gap-3">
                <span className="px-3 py-1 bg-white w-max rounded-full text-[10px] uppercase tracking-widest font-bold shadow-sm text-v-text-muted">
                  Система {idx + 1}
                </span>
                <h3 className="font-bold text-v-charcoal text-sm leading-tight">{sys.title}</h3>
                <p className="text-v-text-muted text-[11px] leading-relaxed">
                  {sys.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-black/5">
          <div className="text-left">
            <p className="text-base md:text-lg font-bold text-v-charcoal leading-tight">
              Вы подключаетесь к уже работающей системе
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <CTAButton 
              variant="primary" 
              onClick={() => openModal('presentation', 'Презентация (System)', 'system')}
              fullWidth
            >
              Скачать презентацию
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
};
