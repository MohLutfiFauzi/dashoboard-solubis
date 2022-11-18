import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Desc = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ABB3C4;
  margin-top: 6px;
  margin-bottom: 1.5rem;
`;

function ContentDesc({ children }) {
    return (
        <Desc>{children}</Desc>
    );
}

ContentDesc.propTypes = {
    children: PropTypes.string.isRequired,
};

export default ContentDesc;
