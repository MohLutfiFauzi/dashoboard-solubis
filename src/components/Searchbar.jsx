import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import iconSearch from '../assets/img/global/search.svg';

const Container = styled.div`
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 46px;
    padding: 0 18px;
    width: 100%;
    background: #fff;
    border-radius: 100px;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-style: italic;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  color: #ABB3C4;
  width: 100%;
`;

const Icon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: auto;
`;

function Searchbar({ handleUserSeacrh, userSearch }) {
    return (
        <Container>
            <Input placeholder="Search name" onChange={handleUserSeacrh} value={userSearch} />
            <Icon>
                <img src={iconSearch} alt="icon search" />
            </Icon>
        </Container>
    );
}

Searchbar.propTypes = {
    handleUserSeacrh: PropTypes.func.isRequired,
    userSearch: PropTypes.string.isRequired,
};

export default Searchbar;
