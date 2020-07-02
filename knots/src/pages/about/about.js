import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import firstpic from '../../assets/History/macrame-history.jpg';
import secondpic from '../../assets/History/macrame-history2.jpg';
import { Li, AboutContainer, H1, P, Img, Container, Small } from './style';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

function About() {

    const [text, setText] = useState([])

    useEffect(() => {
        async function getApi() {
            const res = await api.get(`history`)
            console.log(res.data)
            setText(res.data)
            console.log(text)
        }

        getApi()
    }, [])



    return (
        <Container>
            <Header />
            <AboutContainer>
                {text.map(t => (
                    <Li key={t.id}>
                        <H1>{t.header}</H1>
                        <P>{t.firsttext}</P>
                        <P>{t.secondtext}</P>
                        <Img src={firstpic} alt={firstpic}></Img>
                        <Small><strong>Crafter : </strong>macrame history</Small>
                        <P>{t.thirdtext}</P>
                        <Img src={secondpic} alt={secondpic}></Img>
                        <Small><strong>Crafter : </strong>macrame history</Small>
                        <P>{t.fourthtext}</P>
                        <Small reference>{t.ref}</Small>
                        <Small reference>{t.reftwo}</Small>
                    </Li>
                ))}
            </AboutContainer>
            <Footer />
        </Container>
    );
}

export default About;