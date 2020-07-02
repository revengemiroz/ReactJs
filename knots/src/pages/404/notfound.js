import React from 'react';
import error from '../../assets/a-removebg-preview.png';
import { Container, ImgContainer } from './style';

function Notfound(props) {
    return (
        <Container>
            <h1>404 page not found</h1>
            <ImgContainer>
                <img style={{ width: '100%', height: '100%', display: 'block' }} img src={error} ></img>
            </ImgContainer>
        </Container>
    );
}

export default Notfound;