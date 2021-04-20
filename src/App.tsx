import { useState } from 'react';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";

// Indicando elemento Root para o Modal por questão de Assessibilidade
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  };

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  };

  return (
      <>
        {/* Header com Repasse de Função - Elemento Filho controlando informação do componente Pai!! */}
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
            <h2>Cadastrar Transação</h2>
        </Modal>
        <GlobalStyle />
      </>
    );
};