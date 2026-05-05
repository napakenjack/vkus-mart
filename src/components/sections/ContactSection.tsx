import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { CTAButton } from '../ui/CTAButton';
import { LeadPayload } from '../../types';
import { getUTMParams } from '../../utils/leadScenario';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consent: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Пожалуйста, заполните обязательные поля (Имя и Телефон).');
      return;
    }
    if (!formData.consent) {
      setError('Необходимо согласие на обработку персональных данных.');
      return;
    }

    setLoading(true);

    const payload: LeadPayload = {
      ...formData,
      sourceButton: 'Стать партнёром по франшизе (Footer Form)',
      scenarioType: 'default',
      sectionId: 'contact',
      pageUrl: window.location.href,
      utm: getUTMParams(),
      createdAt: new Date().toISOString(),
    };

    try {
      const webhookUrl = (import.meta as any).env.VITE_CRM_WEBHOOK_URL || '';
      console.log('--- LEAD DATA (Footer Form to amoCRM) ---', payload);

      if (webhookUrl) {
         await fetch(webhookUrl, {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(payload),
         });
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: '', phone: '', email: '', consent: true });
      }, 5000);

    } catch (err) {
      console.error('Submit error:', err);
      setError('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" className="bg-v-cream pb-24">
      <div className="max-w-[1024px] mx-auto bg-white rounded-[2.5rem] p-8 md:p-12 border-2 border-v-burgundy shadow-card flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-v-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

        <div className="w-full md:w-5/12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-v-text mb-4 tracking-tight leading-none">
            Готовы начать?
          </h2>
          <p className="text-sm md:text-base text-v-muted font-medium">
            Оставьте заявку и получите детальный финансовый расчет для вашего города, консультацию по форматам и план запуска.
          </p>
          <div className="mt-8 pt-8 border-t border-v-grey-light hidden md:block">
            <div className="text-[10px] font-bold text-v-muted uppercase tracking-widest mb-1">Остались вопросы?</div>
            <a href="tel:+77000000000" className="text-xl font-bold text-v-burgundy hover:text-v-red transition-colors">
              +7 (700) 000-00-00
            </a>
          </div>
        </div>

        <div className="w-full md:w-7/12 relative z-10">
          {success ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-v-ivory p-8 rounded-2xl text-center border border-v-gold/20"
            >
              <div className="w-12 h-12 bg-v-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-v-text mb-2">Заявка отправлена</h3>
              <p className="text-sm text-v-muted font-medium">Мы свяжемся с вами в течение 24 часов.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-v-ivory border-none rounded-xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-v-red focus:outline-none transition-all placeholder:text-v-muted"
                    placeholder="Ваше имя *"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-v-ivory border-none rounded-xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-v-red focus:outline-none transition-all placeholder:text-v-muted"
                    placeholder="+7 (___) ___-__-__ *"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-v-ivory border-none rounded-xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-v-red focus:outline-none transition-all placeholder:text-v-muted"
                    placeholder="E-mail (необязательно)"
                  />
                </div>

                <div className="flex flex-col">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-v-burgundy text-white px-8 py-4 sm:h-full rounded-xl font-bold uppercase text-[11px] tracking-widest shadow-lg hover:shadow-xl hover:bg-v-red active:scale-95 transition-all text-center flex flex-col justify-center items-center h-16 sm:h-auto"
                  >
                    {loading ? 'Отправка...' : <span>Стать <br className="hidden sm:block"/> партнером</span>}
                  </button>
                </div>
              </div>

              {error && (
                <div className="flex items-start gap-2 p-3 bg-red-50 text-red-700 rounded-xl text-sm font-bold">
                  <AlertCircle size={16} className="shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <div className="flex items-start gap-3 mt-2">
                <input
                  type="checkbox"
                  id="contact_consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 text-v-red rounded border-v-grey-light focus:ring-v-red"
                  required
                />
                <label htmlFor="contact_consent" className="text-xs text-v-muted cursor-pointer leading-tight font-medium">
                  Даю согласие в соответствии с{' '}
                  <a href="#privacy" onClick={(e) => { e.preventDefault(); window.location.hash = '#privacy'; window.scrollTo(0,0); }} className="text-v-burgundy underline hover:text-v-red transition-colors">
                    Политикой конфиденциальности
                  </a>
                </label>
              </div>
            </form>
          )}
        </div>

      </div>
    </Section>
  );
};
