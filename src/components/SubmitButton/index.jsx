import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: var(--color-rosa);
    border: none;
    border-radius: 8px;
    padding: 16px 48px;
    color: var(--color-text);
    font-weight: bold;
    cursor: pointer;
`

export default function SubmitButton({children}) {
    return (
        <Button>
            {children}
        </Button>
    )
}