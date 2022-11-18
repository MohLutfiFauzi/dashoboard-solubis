import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SidebarItem = styled.a`
  text-decoration: none;
  display: block;
  background: #4640DE;
  height: 46px;
  border-radius: 16px;
  padding: 0 11px;
  margin-bottom: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const TextItem = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: #fff;
`;

function ButtonSideBar({ icon, children }) {
  return (
    <SidebarItem>
      {icon}
      <TextItem>
        {children}
      </TextItem>
    </SidebarItem>
  );
}

ButtonSideBar.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default ButtonSideBar;
