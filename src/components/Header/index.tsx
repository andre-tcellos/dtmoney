// Imagens
import logoImg from '../../assets/logo.svg';

// CSSs
import { Container, Content } from './styles';

// Interfaces
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
};

// Functions
export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="DT Money"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    );
};