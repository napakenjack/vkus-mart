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
    <Section id="system" className="bg-v-cream">
      <div className="max-w-[1280px] mx-auto overflow-hidden relative">
        <div className="relative z-10 max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-v-text mb-4 tracking-tight leading-tight">
            Готовая бизнес-система <br/>под ключ
          </h2>
          <p className="text-sm md:text-base text-v-muted font-medium text-pretty leading-relaxed max-w-lg">
            Мы берем на себя IT, закупки и обучение персонала. Вы управляете прибылью.
          </p>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {systems.map((sys, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white rounded-[2rem] p-8 border border-v-grey-light shadow-card relative hover:shadow-[0_20px_40px_rgba(128,1,31,0.06)] transition-all"
            >
              <div className="flex flex-col gap-5">
                <div className="w-10 h-10 bg-v-burgundy/5 text-v-burgundy rounded-full flex items-center justify-center font-bold text-sm border border-v-burgundy/10">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-v-red text-base leading-tight mb-3">{sys.title}</h3>
                  <p className="text-v-muted text-sm leading-relaxed font-medium">
                    {sys.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-card border border-v-grey-light">
          <div className="text-left">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-v-red block"></span>
              <p className="text-xl md:text-2xl font-bold text-v-text leading-tight">
                Вы подключаетесь к уже работающей системе
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <CTAButton 
              variant="outline" 
              size="lg"
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
