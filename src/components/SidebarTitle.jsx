import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h2`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 21px;
  color: #ABB3C4;
  margin-top: 40px;
  margin-bottom: 12px;
`;

function SidebarTitle({ children }) {
  return (
    <Title>{children}</Title>
  );
}

SidebarTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SidebarTitle;
