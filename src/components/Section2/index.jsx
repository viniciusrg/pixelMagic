import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import unifenas from '../../assets/UNIFENAS.png';
import oticazafra from '../../assets/OticasZafra.png';
import lexprime from '../../assets/PortalLexPrime.png';
import { BsLink45Deg } from 'react-icons/bs';

const DivScroll = styled.section`
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 670px;


    &::-webkit-scrollbar {
        width:0px;
    }
 
    &::-webkit-scrollbar-track {
        background:transparent;
    }
 
    &::-webkit-scrollbar-thumb {
        background: transparent;
    }

`

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 64px 0px;
    justify-content: center;

    @media (max-width: 768px) {
        gap: 24px;
    }

    @media (max-width: 425px) {
        grid-template-columns: auto;
    }

    :nth-child(1){
        order: 2;
    }

    :nth-child(2){
        order: 1;
    }

    .image img{
        width: 610px;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    @media (max-width: 1024px) {
        .image img{
            width: 500px;
        }
    }

    @media (max-width: 768px) {
        .image img {
            width: 100%;
        }
    }

    h3{
        text-align: center;
    }

    ul{
        display: flex;
        flex-direction: row;
        gap: 8px;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 425px) {
        ul{
            margin-top: 8px;
        }
    }

    li{
        border-bottom: 2px solid var(--color-roxo);
        padding: 4px 16px;
        font-size: 12px;
    }

    .rosa{
        border-color: var(--color-rosa);
    }

    .laranja{
        border-color: var(--color-laranja);
    }

    p{
        max-width: 400px;
        font-size: 18px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 32px;
        text-align: justify;
    }

    @media (max-width: 425px) {
        p{
            font-size: 16px;
        }
    }

    .icon-link{
        color: var(--color-rosa);
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 16px;
        text-align: right;
    }

    .icon-link svg{
        font-size: 18px;
        margin-right: 2px;
    }

    .icon-link a{
        align-items: center;
        display: flex;
        justify-content: right;
    }

    .icon-link a:hover{
        transition: .5s;
        transform: scale(1.05);
    }
`

export default function Section2() {
    return (
        <DivScroll className='scroll'>
            <Container>
                <Div>
                    <div className='image'>
                        <img src={unifenas} alt='Case UNIFENAS' width='610' height='542' loading='lazy' />
                    </div>
                    <div className='content'>
                        <h3>UNIFENAS</h3>
                        <ul>
                            <li>Landing Page</li>
                            <li className='rosa'>Front-End</li>
                            <li className='laranja'>Formulário</li>
                        </ul>
                        <p>
                            Para o vestibular de 2021, desenvolvemos uma página de inscrição incrível, com altíssima taxa de conversão para a universidade UNIFENAS.
                            O modelo segue sendo utilizado e atualizado anualmente.
                        </p>
                        <div className='icon-link'>
                            <a href='https://medicina.unifenas.br' aria-label='Acessar medicina.unifenas.br' target='_balank'>
                                <BsLink45Deg />
                                medicina.unifenas.br
                            </a>
                        </div>
                    </div>
                </Div>

                {/* Case 2 */}

                <Div>
                    <div className='image'>
                        <img src={oticazafra} alt='Case Óticas Zafra' width='610' height='542' loading='lazy' />
                    </div>
                    <div className='content'>
                        <h3>Óticas Zafra</h3>
                        <ul>
                            <li>Loja Online</li>
                            <li className='rosa'>Front-End</li>
                            <li className='laranja'>Checkout</li>
                        </ul>
                        <p>
                            E-commerce totalmente personalizado, com funcionalidades de cupons de desconto, promoções, newsletter e muito mais! Desenvolvido com as tecnologias WordPress e WooCommerce.
                        </p>
                        <div className='icon-link'>
                            <a href='https://oticaszafra.com.br/' aria-label='Acessar oticaszafra.com.br' target='_balank'>
                                <BsLink45Deg />
                                oticaszafra.com.br
                            </a>
                        </div>
                    </div>
                </Div>

                {/* Case 3 */}

                <Div>
                    <div className='image'>
                        <img src={lexprime} alt='Case UNIFENAS' width='610' height='542' loading='lazy' />
                    </div>
                    <div className='content'>
                        <h3>Lex Prime</h3>
                        <ul>
                            <li>Blog</li>
                            <li className='rosa'>Front-End</li>
                            <li className='laranja'>NewsLetter</li>
                        </ul>
                        <p>
                            O site Lex Prime é um portal de notícias voltado para o mundo jurídico. O site conta com funcionalidades de blog, posts e newsletter. A prioridade do projeto foi um ótimo SEO e acessibilidade.
                        </p>
                        <div className='icon-link'>
                            <a href='https://lexprime.com.br/' aria-label='Acessar lexprime.com.br' target='_balank'>
                                <BsLink45Deg />
                                lexprime.com.br/
                            </a>
                        </div>
                    </div>
                </Div>
            </Container>
        </DivScroll>
    )
}