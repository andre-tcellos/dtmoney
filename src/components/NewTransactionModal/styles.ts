import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
    h2 { color: var(--text-title); font-size: 1.5rem; margin-bottom: 2rem; }
    input { width: 100%; padding: 0 1.5rem; height: 4rem; border-radius: .25rem; border: 1px solid var(--border-button); background-color: var(--background-color-button); font-weight: 400; font-size: 1rem;
        &::placeholder { color: var(--text-body); }
        &:not(:last-child) { margin-bottom: 1rem; }
    }
    button[type="submit"] { width: 100%; padding: 0 1.5rem; height: 4rem; background-color: var(--green); color: var(--shape); border-radius: .25rem; font-size: 1rem; font-weight: 600; transition: filter .2s;
        &:hover { filter: brightness(.9); }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin-bottom: 1rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: .5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
};

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
};

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem; border: 1px solid var(--border-button); border-radius: .25rem; display: flex; align-items: center; justify-content: center; transition: border-color .2s;

    background-color: ${(props) => props.isActive ? transparentize(0.8, colors[props.activeColor]) : 'transparent'};

    img { width: 20px; height: 20px; margin-right: 1rem; }
    span { display: inline-block; font-size: 1rem; color: var(--text-title); }
    &:hover { border-color: ${darken(0.1, '#d7d7d7')}; }
`;