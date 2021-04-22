// Javascripts
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";

// CSSs
import { Container } from "./styles";

// Functions
export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    );
};