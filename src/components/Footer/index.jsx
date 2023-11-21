import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Box = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 8px 0px;

    ul{
        display: flex;
        gap: 16px;
    }

    @media (max-width: 425px) {
        ul{
            justify-content: right;
        }
    }

    svg{
        font-size: 24px;
    }
    
`

export default function Footer() {
    return (
        <Container>
            <Box>
                <p>PixelMagic 2023</p>
                <ul>
                    <li>
                        <a href='https://www.instagram.com/pixelmagicsites/' aria-label='Link para o Instagram da PixelMagic' target='_blank' rel='noreferrer'>
                            <BsInstagram />
                        </a>
                    </li>
                    <li>
                        <a href='https://wa.me/5535984323737' aria-label='Link para o Instagram da PixelMagic' target='_blank' rel='noreferrer'>
                            <BsWhatsapp />
                        </a>
                    </li>
                </ul>
            </Box>
        </Container>
    )
}