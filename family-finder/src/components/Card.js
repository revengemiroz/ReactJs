import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import maleIcon from '../assets/m.png';
import femaleIcon from '../assets/f.png'
import { renderContext } from "../Context/RenderContext";

const Container = styled.div`
display:flex;
justify-content:space-evenly;
align-items:flex-start;
flex-wrap:wrap;
margin:50px 0px;
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

const P = styled.div`
border:${props => props.show ? '2px solid #e85f99' : ''};
text-transform:capitalize;
margin-top:10px;
border-radius:3px;
width:100%;
display:${props => props.long ? '' : 'flex'};
justify-content:${props => props.long ? '' : 'center'};
align-items:${props => props.long ? '' : 'center'};
height:${props => props.long ? '20%' : props.short ? '10%' : ''};
word-wrap: break-word;

`
const PContainer = styled.div`
/* border:2px solid green; */
display:flex;
justify-content:space-between;
`
const genders = {
    male: maleIcon,
    female: femaleIcon
}

function findGender(gender) {
    const text = gender.toLowerCase();
    const icon = genders[text]
    return icon
}


function Card() {

    //use Context
    const hooks = useContext(renderContext)
    const { datas, isLoading, setIsLoading } = hooks


    return (
        <>
            {
                isLoading ?
                    <p>loading</p>
                    :
                    <Container>
                        {datas.map(a => (
                            <div className='c-subscribe-box u-align-center' key={a._id}>
                                <div className="rainbow"><span></span><span></span></div>

                                <Details className='c-subscribe-box__wrapper'>
                                    <ImgContainer>
                                        <img src={a.person_Image}></img>
                                    </ImgContainer>
                                    <P ><strong>Full Name :&nbsp;</strong>{a.FirstName} {a.LastName}</P>

                                    <PContainer>
                                        <P><strong>DOB :&nbsp;</strong> {a.DateOfBirth}</P>
                                        <P><strong>Married :&nbsp;</strong> {a.Married}</P>
                                    </PContainer>

                                    <PContainer>
                                        <P ><strong>Blood Group :&nbsp;</strong> <strong style={{ color: 'red' }}>{a.BloodGroup}</strong></P>
                                        <P ><strong>Gender :&nbsp;</strong><div className='iconContainer'><img className='icons' src={findGender(a.Gender)}></img></div></P>

                                    </PContainer>

                                    <PContainer>
                                        <P><strong>Age : &nbsp;</strong> {a.Age}</P>
                                        <P ><strong>Horoscope :&nbsp;</strong> {a.Horoscope}</P>
                                    </PContainer>

                                    <P long ><strong>Nata : </strong>{a.Nata}</P>
                                </Details>
                            </div>
                        ))}
                    </Container>
            }
        </>
    );
}

export default Card;