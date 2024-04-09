import React from 'react';
import styled from 'styled-components';
import cristal from '../../assets/LogoHero.webp';
import Container from '../Container';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';

const Div = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    padding: 64px 0px;

    @media (max-width: 425px) {
        grid-template-columns: auto;
        gap: 40px;
        padding-bottom: 24px;

        h1{
            margin-bottom: 24px;
            text-align: center;
        }
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

    @media (max-width: 425px) {
        h2{
            font-size: 30px;
            line-height: 120%;
            text-align: center;
            padding: 0px;
            margin: 0px;
            box-sizing: border-box;

        }
    }

    img{
        width: 400px;
        height: auto;
        mix-blend-mode: lighten;
    }

    @media (max-width: 1024px){
        .div-image{
            text-align: center;
        }

        img{
            width: 80%;
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

const SocialProof = styled.div`
    margin-top: 24px;
    align-items: center;
    gap: 8px;

    .stars{
        color: var(--color-laranja);
        font-size: 16px;
    }

    .text p{
        font-size: 18px;
        color: var(--color-text);
    }

    @media (max-width: 425px) {
        margin-top: 16px;
        text-align: center;

        .stars{
            font-size: 12px;
        }

        .text p{
            font-size: 12px;
        }
    }    
`

export default function Hero() {
    return (
        <Container>
            <Div>
                <div>
                    <h1>Bem vindo à PixelMagic ⚡️</h1>
                    <h2>Criação de <span className='roxo'>SITES!</span></h2>
                    <h2>Anúncios no <span className='laranja'>INSTAGRAM!</span></h2>
                    <h2> <span className='rosa'>VISIBILIDADE + VENDAS</span></h2>
                    <SocialProof>
                        <div className='stars'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                        </div>
                        <div className='text'>
                            <p>Avaliações realizadas por nossos clientes!</p>
                        </div>
                    </SocialProof>
                </div>
                <div className='div-image'>
                    <img width='400' height='485' src={cristal} alt='Logo PixelMagic' />
                </div>
            </Div>
        </Container>
    )
}