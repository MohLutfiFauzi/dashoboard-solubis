import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LogoIcon from '../assets/img/global/logo.svg';
import Exit from '../assets/img/global/times.svg';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoTitle = styled.h1`
    display: inline;
    font-weight: 800;
    font-size: 20px;
    line-height: 30px;
    color: #121F3E;
    margin-left: 16px;
`;

const CloseBtn = styled.img`
    display: none;
    @media (max-width: 1200px) {
        margin-left: 1rem;
        cursor: pointer;
        transform: rotate(45deg);
        display: block;
    }
`;

function Logo({ handleToggleFalse }) {
    return (
        <Container>
            <img src={LogoIcon} alt="Logo Brand" />
            <LogoTitle>Solubis</LogoTitle>
            <CloseBtn src={Exit} onClick={handleToggleFalse} />
        </Container>
    );
}

Logo.propTypes = {
    handleToggleFalse: PropTypes.func.isRequired,
};

export default Logo;
