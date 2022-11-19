import React from 'react';
import styled from 'styled-components';
import { FiUsers } from 'react-icons/fi';
import PropTypes from 'prop-types';
import ButtonSideBar from './ButtonSideBar';
import Logo from './Logo';
import SidebarTitle from './SidebarTitle';

const Aside = styled.aside`
  background-color: #fff;
  padding: 50px 24px;
  padding-bottom: 250px;
  height: 100vh;
  z-index: 1;
  overflow-y: scroll;
  min-width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  
  @media (max-width: 1200px) {
      display: none;
      
      &.show {
        display: block;
    }
  }
`;

const CenterLogo = styled.div`
    display: flex;
    justify-content: center;
`;

const styleIcon = {
    marginRight: '20px',
    color: '#ffffff',
};

function Sidebar({ toggle, handleToggleFalse }) {
    return (
        <Aside className={toggle ? 'show' : ''}>
            <CenterLogo>
                <Logo handleToggleFalse={handleToggleFalse} />
            </CenterLogo>
            <SidebarTitle>Daily Use</SidebarTitle>
            <ButtonSideBar icon={<FiUsers size={18} style={styleIcon} />}>
                Employes
            </ButtonSideBar>
        </Aside>
    );
}

Sidebar.propTypes = {
    toggle: PropTypes.bool.isRequired,
    handleToggleFalse: PropTypes.func.isRequired,
};

export default Sidebar;
