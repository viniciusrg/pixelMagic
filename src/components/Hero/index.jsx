import React from 'react';
import styled from 'styled-components';
import cristal from '../../assets/LogoHero.webp';
import Container from '../Container';

const Div = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    padding: 64px 0px;

    @media (max-width: 425px) {
        grid-template-columns: auto;
        gap: 64px;
    }

    .roxo{
        color: var(--color-roxo);
    }

    .rosa{
        color: var(--color-rosa);
    }

    .laranja{
        color: var(--color-laranja);
    }

    img{
        width: 400px;
        height: auto;
        mix-blend-mode: lighten;
    }

    @media (max-width: 1024px){
        img{
            width: 100%;
        }
    }

    @media (max-width: 425px) {
        img {
            width: 200px;
            text-align: center;
        }

        .div-image {
            text-align: center;
        }
    }
`

export default function Hero() {
    return (
        <Container>
            <Div>
                <div>
                    <h1>Bem vindo à PixelMagic ⚡️</h1>
                    <h2>Desenvolvimento <span className='roxo'>WEB</span></h2>
                    <h2>Apenas para os <span className='rosa'>MELHORES</span></h2>
                    <h2>Projetos <span className='laranja'>ONLINE!</span></h2>
                </div>
                <div className='div-image'>
                    <img width='400' height='485' src={cristal} alt='Logo PixelMagic' />
                </div>
            </Div>
        </Container>
    )
}