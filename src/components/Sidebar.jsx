import React from 'react';
import styled from 'styled-components';
import { FiUsers } from 'react-icons/fi';
import ButtonSideBar from './ButtonSideBar';
import Logo from './Logo';
import SidebarTitle from './SidebarTitle';

const Aside = styled.aside`
  background-color: #fff;
  padding: 50px 24px;
  padding-bottom: 250px;
  height: 100vh;
  overflow-y: scroll;
  flex: 0.2;
  min-width: 200px;

  @media (max-width: 1000px) {
    display: none;
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

function Sidebar() {
    return (
        <Aside>
            <CenterLogo>
                <Logo />
            </CenterLogo>
            <SidebarTitle>Daily Use</SidebarTitle>
            <ButtonSideBar icon={<FiUsers size={18} style={styleIcon} />}>
                Employes
            </ButtonSideBar>
        </Aside>
    );
}

export default Sidebar;
