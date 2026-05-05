import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LeadScenarioType } from '../types';
import { LeadFormModal } from '../components/LeadFormModal';

interface ModalContextType {
  openModal: (scenario: LeadScenarioType, sourceButton: string, sectionId: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    scenario: LeadScenarioType;
    sourceButton: string;
    sectionId: string;
  }>({
    scenario: 'default',
    sourceButton: '',
    sectionId: '',
  });

  const openModal = (scenario: LeadScenarioType, sourceButton: string, sectionId: string) => {
    setModalData({ scenario, sourceButton, sectionId });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <LeadFormModal
        isOpen={isOpen}
        onClose={closeModal}
        scenario={modalData.scenario}
        sourceButton={modalData.sourceButton}
        sectionId={modalData.sectionId}
      />
    </ModalContext.Provider>
  );
};
