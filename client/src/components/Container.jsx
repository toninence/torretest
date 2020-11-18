import React from 'react';
import styled from 'styled-components';

export default function Container({children}) {
    const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 5px;
    `;
    return (
        <Container>
            {children}
        </Container>
    )
}
