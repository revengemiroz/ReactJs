import styled from 'styled-components';

export const Container = styled.div`
width:100%;
/* border:2px solid green; */
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

export const Items = styled.div`
/* border:2px solid green; */
width:100%;
max-width:1000px;
margin:20px 0;
display:flex;

justify-content:space-around;
align-items:center;
flex-wrap:wrap;
height:100%;
padding-bottom:40px;
background-color:#f5dee6;
border-radius:7px;
`

export const Card = styled.div`
/* border:2px solid green; */
width:350px;
height:350px;
margin:50px 0;
display:flex;
flex-direction:column;
`

export const Img = styled.img`
display:block;
width:100%;
height:100%;
border-radius:5px;
box-shadow: 12px 13px 43px -14px rgba(0,0,0,0.67);
`

export const Title = styled.span`
font-weight:600;
font-size:20px;
margin-top:10px;
text-align:center;
`

export const Price = styled.span`
font-weight:500;
text-align:center;
`