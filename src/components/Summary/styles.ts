import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;
    margin-bottom: 4rem;

    div {
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: .25rem;
        color: var(--text-title);

        &:last-of-type {
            background-color: var(--green);
            color: #fff;
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        strong {
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
    }
`;