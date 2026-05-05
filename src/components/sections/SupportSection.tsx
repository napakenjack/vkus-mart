import React from 'react';
import { Section } from '../ui/Section';
import { Users, Settings, Target } from 'lucide-react';
import { motion } from 'motion/react';

export const SupportSection: React.FC = () => {
  const cards = [
    {
      icon: <Users className="w-8 h-8 text-v-green-fresh" />,
      title: "50+ FMCG-специалистов",
      text: "Практический опыт команды в розничной торговле, собственном производстве и управлении сетью."
    },
    {
      icon: <Settings className="w-8 h-8 text-v-accent" />,
      title: "Отработанные процессы",
      text: "Вы не экспериментируете и не допускаете критических ошибок → работаете по системе, которая уже доказала эффективность."
    },
    {
      icon: <Target className="w-8 h-8 text-v-charcoal" />,
      title: "Контроль на уровне CEO",
      text: "Каждый проект сопровождается на уровне ключевых управленческих решений → строгий фокус на результате, а не на процессе."
    }
  ];

  return (
    <Section id="support" className="bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-v-green-deep mb-6 tracking-tight text-balance">
          Вы не открываете магазин в одиночку
        </h2>
        <p className="text-lg md:text-xl text-v-text-muted font-medium text-pretty leading-relaxed">
          Мы не просто передаём права на франшизу — мы полноценно участвуем в запуске и стратегическом развитии вашего бизнеса.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group flex flex-col p-10 bg-v-sand/10 rounded-3xl border border-v-sand/50 hover:bg-v-cream hover:border-v-sand transition-all duration-300"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-v-sand/40 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-v-charcoal mb-4 leading-tight">
              {card.title}
            </h3>
            <p className="text-v-text-muted leading-relaxed">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
