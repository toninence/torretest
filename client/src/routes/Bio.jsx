import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Card from '../components/Card';

export default function Bio() {
    const [data, setData] = useState(null);

    const getBio = () => {
        axios.get('http://localhost:3001/toninence')
            .then(response => {
                console.log(response);
                setData(response.data);
            })
    }
    
    const Name = styled.h1`
    margin: 0;
    font-size: 1em;
    text-align: center;
    color: white;
    `;
    useEffect(() => {
        if (data === null) getBio();
    })
    return (
        <Container>
            <Navbar/>
            {data && <Card data={data}/>}
            <Name>
                {data && data.name}
            </Name>
        </Container>
    )
}
