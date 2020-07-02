import styled from 'styled-components';

export const Li = styled.li`
list-style:none;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

export const Container = styled.div`
width:100%;
border:2px solid green;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`

export const AboutContainer = styled.div`
background-color:#fce4ec;
padding:30px 35px 20px 35px;
border-radius:7px;
width:100%;
margin:15px 15px;

@media screen and (min-width:1080px){
    max-width:1000px;
    padding:70px 50px 20px 40px;
}
`

export const H1 = styled.h1`
font-size:50px;
color:#474547;
line-height:1em;
margin-bottom:30px;
`

export const P = styled.p`
font-size:20.8px;
line-height:1.3em;
margin:15px 0 20px 0;
color:#474547;
`

export const Img = styled.img`
margin:10px 10px 10px 10px;
display:block;
border-radius:5px;
box-shadow: 12px 13px 43px -14px rgba(0,0,0,0.67);


@media screen and (max-width:433px){
height:100%;
width:100%;
}
`

export const Small = styled.small`
text-align:center;
margin:${props => props.reference ? '0px 0px 10px 0' : '20px 0 10px 0'};
`