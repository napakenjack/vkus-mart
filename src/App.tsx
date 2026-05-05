import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ModalProvider } from './context/ModalContext';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    if (currentHash === '#privacy') {
      return <PrivacyPage />;
    }
    return <HomePage />;
  };

  return (
    <ModalProvider>
      {renderPage()}
    </ModalProvider>
  );
}

