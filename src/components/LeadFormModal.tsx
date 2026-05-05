import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { LeadScenarioType, LeadPayload } from '../types';
import { getScenarioDetails, getUTMParams } from '../utils/leadScenario';
import { CTAButton } from './ui/CTAButton';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  scenario: LeadScenarioType;
  sourceButton: string;
  sectionId: string;
}

export const LeadFormModal: React.FC<LeadFormModalProps> = ({
  isOpen,
  onClose,
  scenario,
  sourceButton,
  sectionId,
}) => {
  const details = getScenarioDetails(scenario);
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

    // Basic validation
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
      sourceButton,
      scenarioType: scenario,
      sectionId,
      pageUrl: window.location.href,
      utm: getUTMParams(),
      createdAt: new Date().toISOString(),
    };

    try {
      // ---------------------------------------------------------
      // NOTE: This is a placeholder for future amoCRM integration.
      // Do not expose secrets here. Use env vars or serverless functions.
      // ---------------------------------------------------------
      const webhookUrl = (import.meta as any).env.VITE_CRM_WEBHOOK_URL || '';
      
      console.log('--- LEAD DATA (Prepared for amoCRM) ---', payload);

      if (webhookUrl) {
         await fetch(webhookUrl, {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(payload),
         });
      } else {
        // Simulate network delay for demo
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setSuccess(true);
      
      // Optionally reset form after 3 seconds and close
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: '', phone: '', email: '', consent: true });
        onClose();
      }, 4000);

    } catch (err) {
      console.error('Submit error:', err);
      setError('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-v-charcoal/60 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-lg bg-v-cream rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-v-text-muted hover:text-v-charcoal bg-v-sand/30 hover:bg-v-sand/80 rounded-full transition-colors z-20"
            aria-label="Закрыть"
          >
            <X size={20} />
          </button>

          <div className="p-8 md:p-10 overflow-y-auto">
            {success ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-v-green-fresh/10 text-v-green-fresh rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-v-green-deep mb-3">Спасибо! Заявка отправлена.</h3>
                <p className="text-v-text-muted">Мы свяжемся с вами в течение 24 часов.</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-v-green-deep tracking-tight mb-3 pr-8 text-balance">
                    {details.title}
                  </h3>
                  <p className="text-v-text-muted text-pretty">
                    {details.subtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-v-charcoal mb-1.5 ml-1">
                      Имя <span className="text-v-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-white border border-v-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-v-green-fresh/50 focus:border-v-green-fresh transition-all"
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-v-charcoal mb-1.5 ml-1">
                      Телефон <span className="text-v-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-white border border-v-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-v-green-fresh/50 focus:border-v-green-fresh transition-all"
                      placeholder="+7 (999) 000-00-00"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-v-charcoal mb-1.5 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-white border border-v-sand rounded-xl focus:outline-none focus:ring-2 focus:ring-v-green-fresh/50 focus:border-v-green-fresh transition-all"
                      placeholder="ivan@example.com"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-2 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <p>{error}</p>
                    </div>
                  )}

                  <div className="pt-2">
                    <CTAButton 
                      type="submit" 
                      variant="primary" 
                      fullWidth 
                      disabled={loading}
                      className={loading ? 'opacity-80' : ''}
                    >
                      {loading ? 'Отправка...' : 'Стать партнёром по франшизе'}
                    </CTAButton>
                    <p className="text-center text-xs text-v-text-muted mt-3">
                      Свяжемся с вами в течение 24 часов
                    </p>
                  </div>

                  <div className="flex items-start gap-3 pt-4">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-v-green-fresh rounded border-v-sand focus:ring-v-green-fresh"
                      required
                    />
                    <label htmlFor="consent" className="text-xs text-v-text-muted cursor-pointer leading-tight">
                      Даю согласие на обработку персональных данных в соответствии с{' '}
                      <a href="#privacy" onClick={onClose} className="text-v-green-deep underline hover:text-v-green-fresh transition-colors">
                        Политикой конфиденциальности
                      </a>
                    </label>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
