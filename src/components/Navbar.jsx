import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavTitle from './NavTitle';
import Searchbar from './Searchbar';
import Bell from './Bell';
import HumburgerBtn from './HumburgerBtn';

const Container = styled.nav`
    display: flex;
    align-items: center;
    padding: 40px 0;
`;

function Navbar({ handleUserSeacrh, userSearch }) {
    return (
        <Container>
            <HumburgerBtn />
            <NavTitle>Overview</NavTitle>
            <Searchbar handleUserSeacrh={handleUserSeacrh} userSearch={userSearch} />
            <Bell />
        </Container>
    );
}

Navbar.propTypes = {
    handleUserSeacrh: PropTypes.func.isRequired,
    userSearch: PropTypes.string.isRequired,
};

export default Navbar;
