import React, { useEffect, useState } from 'react';
import Header from "../../components/header/header";
import Footer from '../../components/footer/footer';
import { Container, Profile, ProfileInfo, Question, ShowCase, Products, Pic, Description, Title, Start } from './style';
import ProfilePic from '../../assets/japa.jpg';
import Api from '../../services/api';
import macramebeginner from '../../assets/macrame-beginner.jpeg';
import macramewall from '../../assets/macrame-wall.jpeg';
import macramehanger from '../../assets/macrame-hanger.jpeg';
import macramecords from '../../assets/macrame-cords.jpeg';

function Home(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await Api.get('homepage')
            console.log(res.data)
            setData(res.data)
        }

        getData()
    }, [])
    return (
        <Container>
            <Header />
            <Profile>
                <img src={ProfilePic}></img>
                {data.map(a => (
                    <ProfileInfo key={a.id}>
                        <h1 >Hi, I'm {a.name}</h1>
                        <span>{a.profile}</span>
                        <button>Want to know More ?</button>
                    </ProfileInfo>
                ))}
            </Profile>


            {data.map(a => (
                <Question key={a.id + 1}>
                    <h2>{a.question}</h2>
                    <p>{a.question2}</p>
                    <p>{a.paragraph}</p>
                </Question>
            ))}

            <ShowCase>
                <Start >Let's get started...</Start>

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <Products>
                        <Title>Beginners Double Half Hitch Knots</Title>
                        <div style={{ width: '300px', height: '400px', display: 'block', overflow: 'hidden' }}>
                            <Pic src={macramebeginner}></Pic>
                        </div>
                        <Description>If you've chosen to take the first steps to learning a new craft, fantastic! Welcome aboard, here is what you need to know in Basic steps Knot 6- How To Tie Double Half Hitch Knots</Description>
                    </Products>

                    <Products>
                        <Title>Beginners Double Half Hitch Knots</Title>
                        <div style={{ width: '300px', height: '400px' }}>
                            <Pic src={macramewall}></Pic>
                        </div>
                        <Description>If you've chosen to take the first steps to learning a new craft, fantastic! Welcome aboard, here is what you need to know in Basic steps Knot 6- How To Tie Double Half Hitch Knots</Description>
                    </Products>

                    <Products>
                        <Title>Beginners Double Half Hitch Knots</Title>
                        <div style={{ width: '300px', height: '400px' }}>
                            <Pic src={macramehanger}></Pic>
                        </div>
                        <Description>If you've chosen to take the first steps to learning a new craft, fantastic! Welcome aboard, here is what you need to know in Basic steps Knot 6- How To Tie Double Half Hitch Knots</Description>
                    </Products>

                    <Products>
                        <Title>Beginners Double Half Hitch Knots</Title>
                        <div style={{ width: '300px', height: '400px' }}>
                            <Pic src={macramecords}></Pic>
                        </div>
                        <Description>If you've chosen to take the first steps to learning a new craft, fantastic! Welcome aboard, here is what you need to know in Basic steps Knot 6- How To Tie Double Half Hitch Knots</Description>
                    </Products>

                </div>
            </ShowCase>

            <Footer />
        </Container >
    );
}

export default Home;