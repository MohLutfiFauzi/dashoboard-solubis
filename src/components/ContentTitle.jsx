import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #121F3E;

  &:first-of-type {
    margin-top: 5px;
  }
`;

function ContentTitle({ children }) {
    return (
        <Title>{children}</Title>
    );
}

ContentTitle.propTypes = {
    children: PropTypes.string.isRequired,
};

export default ContentTitle;
