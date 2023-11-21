import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import cristal2 from '../../assets/cristal2.webp';
import { BsStack } from 'react-icons/bs';

const ContainerFluid = styled.section`
    width: 100%;
    background-color: var(--color-roxo);
    padding: 64px 0px;

    @media (max-width: 1024px) {
        width: 100%;
    }

`

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 32px;

    @media (max-width: 768px) {
        margin-top: 16px;
    }

    @media (max-width: 425px) {
        grid-template-columns: auto;
        margin-top: 32px;
    }

    .icon{
        display: flex;
        gap: 8px;
    }

    svg{
        font-size: 32px;
    }

    .imageCenter{
        text-align: center;
        margin-top: 16px;
    }

    img{
        width: 250px;
        mix-blend-mode: lighten;
    }

    @media (max-width: 768px) {
        img{
            width: 150px;
            height: auto;
        }
    }

    @media (max-width: 425px) {
        img {
            width: 200px;
        }
    }
`

export default function Section1() {
    return (
        <ContainerFluid id='cases-de-sucesso'>
            <h3 align="center">NÃO É MÁGICA, É EXPERTISE!</h3>
            <Container>
                <Div>
                    <div>
                        <div className='icon'>
                            <BsStack />
                            <h4>UX</h4>
                        </div>
                        <p>
                            <b>Experiência do usuário:</b> é sobre tornar a experiência do usuário o mais fácil, eficiente e agradável possível, levando em consideração a usabilidade, a acessibilidade e o design.
                        </p>
                    </div>
                    <div className='imageCenter'>
                        <img width='250' height='238' src={cristal2} alt='Cristal' />
                    </div>
                    <div>
                        <div className='icon'>
                            <BsStack />
                            <h4>UI</h4>
                        </div>
                        <p>
                            <b>Interface do usuário:</b> é responsável pela apresentação visual e pela disposição dos elementos na tela para criar uma experiência atraente e fácil de usar.
                        </p>
                    </div>
                </Div>
            </Container>
        </ContainerFluid>
    )
}