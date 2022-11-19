import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import iconHumburger from '../assets/img/global/burger.svg';

const Hamburger = styled.img`
    cursor: pointer;
    margin-right: 8px;
    @media (min-width: 1200px) {
        display: none;
    }
`;

function HumburgerBtn({ handleToggle }) {
    return (
        <Hamburger src={iconHumburger} onClick={handleToggle} />
    );
}

HumburgerBtn.propTypes = {
    handleToggle: PropTypes.func.isRequired,
};

export default HumburgerBtn;
