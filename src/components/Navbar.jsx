import React from 'react'
import styled from 'styled-components';

export default function Navbar() {
    const Header = styled.div`
    height: 50px;
    border-bottom: 1px solid #414347;
    padding-top: 10px;
    padding-left: 65px;
    text-align: left;
    color: black;
    font-size: 2rem;
    font-weight: bold;
    `;
    return (
        <Header>
            Genoma Profesional
        </Header>
    )
}
