import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid rgb(232,236,239);
    border-radius: 1rem;
    max-height: 400px;
    display: block;
    overflow-x: auto;
    margin-bottom: 40px;
`;

const TH = styled.th`
    text-align: start;
    color: #6F798C;
    background-color: #F9FAFC;
    font-weight: 400;
    font-size: 14px;
    padding: 1rem;
    border-radius: 1px solid rgb(232,236,239);
    position: sticky;
    top: 0;
    vertical-align: bottom;

    &:first-of-type {
        border-top-left-radius: 1rem;
    }

    &:last-of-type {
        width: 100%;
    }
`;

const THEAD = styled.tr`
    padding: 1rem;
`;

const TD = styled.td`
    padding: 1rem;
    border-top: 1px solid rgb(232,236,239);
    color: #121F3E;
    font-size: 18px;
`;

function Tabel({ users }) {
    return (
        <Table>
            <thead>
                <THEAD>
                    <TH>Id</TH>
                    <TH>Name</TH>
                    <TH>Username</TH>
                    <TH>Email</TH>
                    <TH>Phone</TH>
                </THEAD>
            </thead>
            <tbody>
                {
                    users.map(({
                        id, username, name, phone, email,
                    }, index) => (
                        <tr key={index}>
                            <TD>{id}</TD>
                            <TD>{name}</TD>
                            <TD>{username}</TD>
                            <TD>{email}</TD>
                            <TD>{phone}</TD>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

Tabel.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabel;
