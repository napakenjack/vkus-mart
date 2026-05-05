import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-v-burgundy px-6 md:px-10 h-auto py-6 md:h-20 md:py-0 flex flex-col md:flex-row items-center justify-between text-white/50 text-[10px] font-medium uppercase tracking-[0.2em] gap-6 text-center md:text-left">
      <div>© {new Date().getFullYear()} ВКУСМАРТ. Все права защищены</div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <a 
          href="#privacy" 
          onClick={(e) => {
             e.preventDefault();
             window.location.hash = '#privacy';
             window.scrollTo(0, 0);
          }} 
          className="hover:text-white transition-colors"
        >
          Политика конфиденциальности
        </a>
        <a href="#" className="hover:text-white transition-colors">Презентация .PDF</a>
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
      </div>
    </footer>
  );
};
