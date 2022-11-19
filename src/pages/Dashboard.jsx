import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
    display: flex;
`;

function Dashboard() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(true);
    };

    const handleToggleFalse = () => {
        setToggle(false);
    };

    return (
        <Container>
            <Sidebar toggle={toggle} handleToggleFalse={handleToggleFalse} />
            <Main handleToggle={handleToggle} />
        </Container>
    );
}

export default Dashboard;
