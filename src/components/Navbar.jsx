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

function Navbar({
    handleUserSeacrh, userSearch, handleToggle,
}) {
    return (
        <Container>
            <HumburgerBtn handleToggle={handleToggle} />
            <NavTitle>Overview</NavTitle>
            <Searchbar handleUserSeacrh={handleUserSeacrh} userSearch={userSearch} />
            <Bell />
        </Container>
    );
}

Navbar.propTypes = {
    handleUserSeacrh: PropTypes.func.isRequired,
    userSearch: PropTypes.string.isRequired,
    handleToggle: PropTypes.func.isRequired,
};

export default Navbar;
