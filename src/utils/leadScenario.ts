import { LeadScenarioType, ScenarioDetails } from '../types';

export const SCENARIOS: Record<LeadScenarioType, ScenarioDetails> = {
  calculation: {
    title: 'Получите расчёт и план запуска',
    subtitle: 'Оставьте контакты — рассчитаем проект под вашу локацию и покажем шаги запуска.',
  },
  location: {
    title: 'Оценим вашу локацию',
    subtitle: 'Отправьте заявку — команда ВКУСМАРТ поможет оценить потенциал вашей точки.',
  },
  income: {
    title: 'Рассчитаем потенциальную прибыль',
    subtitle: 'Покажем, сколько может зарабатывать магазин в выбранном формате.',
  },
  presentation: {
    title: 'Получите презентацию франшизы',
    subtitle: 'Отправим подробную информацию о модели, форматах и условиях.',
  },
  strategy: {
    title: 'Получите стратегию развития на 3 года',
    subtitle: 'Покажем, как можно развивать бизнес вместе с сетью.',
  },
  launch_plan: {
    title: 'Получите план запуска магазина',
    subtitle: 'Покажем путь от выбора локации до открытия и сопровождения.',
  },
  default: {
    title: 'Стать партнёром ВКУСМАРТ',
    subtitle: 'Оставьте заявку, и мы свяжемся с вами в течение 24 часов.',
  },
};

export const getScenarioDetails = (type: LeadScenarioType): ScenarioDetails => {
  return SCENARIOS[type] || SCENARIOS.default;
};

export const getUTMParams = () => {
  if (typeof window === 'undefined') return '';
  const params = new URLSearchParams(window.location.search);
  const utmStr = params.toString();
  return utmStr ? `?${utmStr}` : '';
};
