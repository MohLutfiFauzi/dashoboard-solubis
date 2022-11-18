import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../assets/img/global/logo.svg';

const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: fit-content;
`;

const LogoTitle = styled.h1`
    display: inline;
    font-weight: 800;
    font-size: 20px;
    line-height: 30px;
    color: #121F3E;
    margin-left: 16px;
`;

function Logo() {
    return (
        <Container>
            <img src={LogoIcon} alt="Logo Brand" />
            <LogoTitle>Solubis</LogoTitle>
        </Container>
    );
}

export default Logo;
