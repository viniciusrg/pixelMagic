import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    width: 1250px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    

    @media (max-width: 1024px){
        width: 100%;
        padding: 0px 32px;
    }
`

export default function Container({ children }) {
    return (
        <ContainerDiv>
            {children}
        </ContainerDiv>
    )
}