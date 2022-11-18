import React from 'react';
import styled from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
    display: flex;
`;

function Dashboard() {
    return (
        <Container>
            <Sidebar />
            <Main />
        </Container>
    );
}

export default Dashboard;
