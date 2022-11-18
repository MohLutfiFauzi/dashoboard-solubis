import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #121F3E;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-right: auto;
`;

function NavTitle({ children }) {
    return (
        <Container>
            <Title>{children}</Title>
        </Container>
    );
}

NavTitle.propTypes = {
    children: PropTypes.string.isRequired,
};

export default NavTitle;
