// Javascrits
import Modal from "react-modal";
import { useState } from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { TransactionProvider } from "./hooks/useTransactions";
import { NewTransactionModal } from "./components/NewTransactionModal";

// CSSs
import { GlobalStyle } from "./styles/global";

// Indicando elemento Root para o Modal por questão de Assessibilidade
Modal.setAppElement('#root');

// Functions
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  };

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  };

  return (
      <TransactionProvider>
        {/* Header com Repasse de Função - Elemento Filho controlando informação do componente Pai!! */}
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        
        <Dashboard />

        {/* NewTransactionModal com Repasse de Função - Elemento Filho controlando informação do componente Pai!! */}
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
        
        <GlobalStyle />
      </TransactionProvider>
    );
};