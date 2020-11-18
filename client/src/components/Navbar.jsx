import React from 'react'
import styled from 'styled-components';

export default function Navbar() {
    const Header = styled.div`
    height: 50px;
    border-bottom: 1px solid #414347;
    padding-top: 10px;
    text-align: center;
    color: white;
    `;
    return (
        <Header>
            Navigation
        </Header>
    )
}
