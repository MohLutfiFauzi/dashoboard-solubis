import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from './Navbar';
import ContentTitle from './ContentTitle';
import ContentDesc from './ContentDesc';
import Tabel from './Tabel';

const Container = styled.div`
    padding: 0 40px;
    flex: 0.8;

    @media (max-width: 1000px) {
        flex: 100%;
    }
`;

function Main() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userSearch, setUserSearch] = useState('');

    const handleUserSeacrh = (e) => {
        setUserSearch(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Navbar handleUserSeacrh={handleUserSeacrh} userSearch={userSearch} />
            <ContentTitle>Statistics</ContentTitle>
            <ContentDesc>Your Employees</ContentDesc>
            {loading ? <p>Loading ...</p> : <Tabel users={users.filter((user) => user.name.toLowerCase().includes(userSearch.toLowerCase()))} />}
        </Container>
    );
}

export default Main;
