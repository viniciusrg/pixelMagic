import React from 'react';
import styled from 'styled-components';

const Box = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid var(--color-text);
    background-color: transparent;
    color: var(--color-text);
    padding: 16px 0px;
    padding-left: 16px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;

    &::placeholder{
        color: var(--color-text);
        opacity: .75;
        font-weight: 400;
    }

    &:focus{
        outline: none;
    }
`

export default function Input ({placeholder, type, name, value, onChange}) {
    return (
        <Box placeholder={placeholder} type={type} name={name} value={value} onChange={onChange} />
    )
}