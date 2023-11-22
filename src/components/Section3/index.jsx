import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import bola from '../../assets/bola.webp';

const DivScroll = styled.div`
    overflow-y: scroll;
    scroll-behavior: smooth;
    height: 353px;
    overflow-x: hidden;


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

const ContainerFluid = styled.section`
    width: 100%;
    background-color: var(--color-roxo);
    padding: 64px 0px;
`

const Div = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 425px) {
        grid-template-columns: auto;
    }

    .image{
        text-align: right;
        position: relative;
    }

    img{
        width: 350px;
        height: auto;
        mix-blend-mode: screen;
        position: sticky;
        top: 0;
        right: 0;
    }

    @media (max-width: 768px) {
        img{
            width: 300px;
        }
    }

    @media (max-width: 425px) {
        img {
            display: none;
        }
    }

    h4{
        margin-bottom: 32px;
    }

    .item{
        margin-bottom: 64px;
    }

    p{
        font-weight: bold;
    }
`

export default function Section3() {
    return (
        <ContainerFluid id='como-trabalhamos'>
            <DivScroll>
                <Container>
                    <Div>
                        <div>
                            <h4>Como trabalhamos?</h4>
                            <div className='item'>
                                <h5>1. Muita conversa</h5>
                                <p>
                                    Esta é a primeira etapa do processo mágico... Ops, de desenvolvimento.
                                    Aqui nós iremos conversar bastante, entender todo o seu projeto, qual é o público alvo do projeto e também quais são suas expectativas.
                                </p>
                            </div>
                            <div className='item'>
                                <h5>2. Protótipo</h5>
                                <p>
                                    Aqui vamos desenvolver um protótipo para o seu projeto.
                                    Isso significa que você já vai ter uma boa ideia de como ele será depois de pronto.
                                    Essa etapa é muito importante, pois sempre iremos enviar atualizações para que tudo fique perfeito!
                                </p>
                            </div>                        <div className='item'>
                                <h5>3. Desenvolvimento</h5>
                                <p>
                                    Já chegamos na parte de codificar, isso significa que seu projeto está se tornando realidade!
                                    Esta é a parte que os nerds trabalham para deixar seu projeto RÁPIDO, ACESSÍVEL e com um ótimo SEO.
                                </p>
                            </div>
                            <div className='item'>
                                <h5>4. Entrega</h5>
                                <p>
                                    ⚡ SHAZAM! ⚡
                                    <br />
                                    Agora seu projeto está totalmente finalizado. Mas isso ainda não é um adeus...
                                    <br />
                                    As técnologias estão em constante evolução, assim como sua marca e seus clientes. Pensando nisso a PixelMagic está totalmente aberta para seguir colaborando ainda mais com a evolução do seu projeto!
                                </p>
                            </div>
                        </div>
                        <div className='image'>
                            <img src={bola} alt='Cristal' width='350' height='353' loading='lazy' />
                        </div>
                    </Div>
                </Container>
            </DivScroll>
        </ContainerFluid>
    )
}