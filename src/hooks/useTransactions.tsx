// Javascripts
import { api } from "../services/api";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// Interfaces
interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
};

//type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;
type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
};

interface TransactionProviderProps {
    children: ReactNode;
};

// Variáveis
const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

// Functions
export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions').then(response => setTransactions(response.data.transactions));
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        });
        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    };

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
};

export function useTransactions() {
    const context = useContext(TransactionsContext);
    return context;
};