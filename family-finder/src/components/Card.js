import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
margin:0px 40px;
height:100vh;
`

const Cards = styled.div`
width:350px;
height:600px;
background-color:#f7f8fc;
/* border:2px solid green;
border-radius:20px; */
`

const ImgContainer = styled.div`
width:100%;
height:300px;
display:block;
overflow:hidden;
`

const Details = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;

`

const P = styled.p`
/* border:2px solid green; */
margin-top:10px;
height:${props => props.long ? '22%' : '10%'};
`
const PContainer = styled.div`
/* border:2px solid green; */
display:flex;
justify-content:space-evenly;
`

function Card({ datas }) {
    const [isBollean, setIsBollean] = useState(null)
    return (
        <Container>
            {datas.map(a => (
                <div className='c-subscribe-box u-align-center' key={a._id}>
                    <div className="rainbow"><span></span><span></span></div>

                    <Details className='c-subscribe-box__wrapper'>
                        <ImgContainer>
                            <img src={a.person_Image}></img>
                        </ImgContainer>
                        <P><strong>Full Name :</strong> {a.FirstName} {a.LastName}</P>

                        <PContainer>
                            <P><strong>Age :</strong> {a.Age}</P>
                            <P><strong>Gender</strong> : {a.Gender} </P>
                            <P><strong>Married :</strong> {a.Married}</P>
                        </PContainer>

                        <P><strong>Date of Birth :</strong> {a.DateOfBirth}</P>


                        <PContainer>
                            <P ><strong>Blood Group :</strong> {a.Description}</P>
                            <P ><strong>Horoscope :</strong> {a.Description}</P>
                        </PContainer>

                        <P long><strong>Nata : </strong>{a.Nata}</P>
                    </Details>
                </div>
            ))}
        </Container>

    );
}

export default Card;