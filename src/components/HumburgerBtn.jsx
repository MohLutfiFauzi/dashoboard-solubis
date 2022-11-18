import React from 'react';
import styled from 'styled-components';
import iconHumburger from '../assets/img/global/burger.svg';

const Hamburger = styled.img`
    cursor: pointer;
    margin-right: 8px;
    @media (min-width: 1000px) {
        display: none;
    }
`;

function HumburgerBtn() {
    return (
        <Hamburger src={iconHumburger} />
    );
}

export default HumburgerBtn;
