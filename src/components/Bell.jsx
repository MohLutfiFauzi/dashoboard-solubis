import React from 'react';
import styled from 'styled-components';
import iconBell from '../assets/img/global/bell.svg';

const BellIcon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 46px;
  height: 46px;
  background: #fff;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
`;

function Bell() {
    return (
        <BellIcon>
            <img src={iconBell} alt="Icon Bell" />
        </BellIcon>
    );
}

export default Bell;
