import React from 'react';
import { Container, IconContainer, A, EmailContainer, Input, InputContainer, Button, Links } from './style';
import { BrowserRouter, Link, Switch, Route, NavLink, Router } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faYoutube, faFacebookSquare, faPinterestSquare } from "@fortawesome/free-brands-svg-icons"
import Contact from '../../pages/contact/contact';

const facebook = <FontAwesomeIcon icon={faFacebookSquare} size='3x' color='#2f2f2f' />
const instagram = <FontAwesomeIcon icon={faInstagram} size='3x' color='#2f2f2f' />
const youtube = <FontAwesomeIcon icon={faYoutube} size='3x' color='#2f2f2f' />
const pinterest = <FontAwesomeIcon icon={faPinterestSquare} size='3x' color='#2f2f2f' />


function Footer() {
    return (


        <Container>
            <IconContainer>
                <A href='https://www.instagram.com/p/CBxfNL0lhW9/'>{facebook}</A>
                <a href='https://www.instagram.com/p/CBxfNL0lhW9/'>{instagram}</a>
                <a href='https://www.instagram.com/p/CBxfNL0lhW9/'>{youtube}</a>
                <a href='https://www.instagram.com/p/CBxfNL0lhW9/'>{pinterest}</a>
            </IconContainer>

            <EmailContainer>
                <h2>Join the Tribe</h2>
                <InputContainer>
                    <Input placeholder='Enter Your Email..'></Input>
                    <Button>Subscribe</Button>
                </InputContainer>
            </EmailContainer>

            <Links>
                <Link style={{ fontSize: '20px' }} to='/'>Shop</Link>
                <Link style={{ margin: '0px 70px', fontSize: '20px' }} to='/about'>About</Link>
                <Link style={{ fontSize: '20px' }} to="/contact">Contact</Link>



            </Links>
        </Container>

    );
}



export default Footer;