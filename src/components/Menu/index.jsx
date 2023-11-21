import React from 'react';
import styled from 'styled-components';
import Container from '../Container';

const Div = styled.nav`
    width: 100%;
    padding: 64px 0px;

    @media (max-width: 425px) {
        padding-top: 0px;
    }

    ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 425px) {
        ul {
            flex-wrap: wrap;
            gap: 16px;
        }
    }

    li{
        font-weight: bold;
    }

    li:last-child{
        padding: 4px 16px;
        text-align: center;
        border-bottom: 3px solid var(--color-roxo);
    }

    @media (max-width: 425px) {
        li:last-child{
            width: 100%;
        }
    }

    @media (max-width: 425px) {
        li{
            font-size: 12px;
        }
    }
`

export default function Menu() {
    return (
        <Container>
            <Div>
                <ul>
                    <li><a href='#cases-de-sucesso' aria-label='Cases de sucesso'>Cases de sucesso</a></li>
                    <li><a href='#como-trabalhamos' aria-label='Como trabalhamos'>Como trabalhamos</a></li>
                    <li><a href='#precisa-de-ajuda' aria-label='Precisa de ajuda?'>Precisa de ajuda?</a></li>
                    <li><a href='#comecar-projeto' aria-label='Começar projeto'>Começar projeto</a></li>
                </ul>
            </Div>
        </Container>
    )
}