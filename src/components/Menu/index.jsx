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
            gap: 32px;
        }

        a {
            display: none;
        }

        a:last-child {
            display: block;
        }
    }

    li{
        font-weight: bold;
    }

    a:last-child{
        padding: 24px 32px;
        text-align: center;
        /* border-bottom: 3px solid var(--color-roxo); */
        background-color: var(--color-roxo);
        border-radius: 8px;
        transition: .5s;
    }

    a:last-child:hover{
        transform: scale(1.05);
    }

    @media (max-width: 425px) {
        a:last-child{
            width: 100%;
        }
    }

    @media (max-width: 425px) {
        li{
            font-size: 16px;
        }
    }
`

export default function Menu() {
    return (
        <Container>
            <Div>
                <ul>
                    <a href='#cases-de-sucesso' aria-label='Cases de sucesso'><li>Cases de sucesso</li></a>
                    <a href='#como-trabalhamos' aria-label='Como trabalhamos'><li>Como trabalhamos</li></a>
                    <a href='#precisa-de-ajuda' aria-label='Precisa de ajuda?'><li>Precisa de ajuda?</li></a>
                    <a href='#comecar-projeto' aria-label='Orçamento GRÁTIS'><li>Orçamento GRATUITO</li></a>
                </ul>
            </Div>
        </Container>
    )
}