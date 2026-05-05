import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { CTAButton } from './ui/CTAButton';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Доход', href: '#income' },
    { label: 'Система', href: '#system' },
    { label: 'Франшиза', href: '#franchise-includes' },
    { label: 'Запуск', href: '#launch' },
    { label: 'Форматы', href: '#formats' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    // Smooth scroll for anchors
    if (href.startsWith('#') && window.location.hash !== '#privacy') {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('#') && window.location.hash === '#privacy') {
      // If on privacy page, go to home then scroll
      window.location.hash = '';
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white border-b border-v-green-deep/10 shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <div 
              className="flex items-center gap-2 cursor-pointer z-50 relative"
              onClick={() => { window.location.hash = ''; window.scrollTo(0,0); }}
            >
              <span className={`font-black text-2xl tracking-tighter ${scrolled ? 'text-v-green-deep' : 'text-v-charcoal'}`}>
                ВКУСМАРТ
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-[#5E625C]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-colors hover:text-v-green-fresh ${
                    scrolled ? 'text-[#5E625C]' : 'text-v-charcoal/80'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <div className="text-xs font-bold">+7 (700) 000-00-00</div>
              <div 
                className="text-[10px] text-[#5E625C] uppercase tracking-tighter cursor-pointer hover:text-v-green-fresh transition-colors"
                onClick={() => openModal('calculation', 'Заказать звонок (Header)', 'header-phone')}
              >
                Заказать звонок
              </div>
            </div>
            <CTAButton 
              size="sm" 
              variant="hero"
              onClick={() => openModal('calculation', 'Получить расчёт (Header)', 'header')}
            >
              Получить расчёт
            </CTAButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-v-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-v-cream pt-24 px-5 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-2xl font-bold tracking-tight text-v-green-deep mb-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-v-green-fresh transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto pb-10">
              <CTAButton 
                fullWidth 
                size="lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal('calculation', 'Получить расчёт (Mobile Menu)', 'header-mobile');
                }}
              >
                Получить расчёт проекта
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
