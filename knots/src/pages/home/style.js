import styled from 'styled-components';

export const Container = styled.div`
width:100%;
border:2px solid green;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100%;
`

export const Profile = styled.div`
/* border:2px solid green; */
width:100%;
max-width:1000px;
margin:20px 0;
display:flex;

@media screen and (max-width:375px){
    display:flex;
    flex-direction:column;
}
`

export const ProfileInfo = styled.div`
/* border:2px solid green; */
width:100%;
padding:20px 40px 20px 40px;
text-align:center;
background-color:#fce4ec;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
 
 h1{
color: #474547;

 }

span{
font-size:20px;
margin-top:20px;
}

button{
max-width:400px;
padding:15px 20px 15px 20px;
border-radius:7px;
outline:none;
font-weight:600;
font-size:15px;
letter-spacing:1.5px;
background-color:white;
margin-top:30px;
}
`

export const Question = styled.div`
width:100%;
max-width:1000px;
margin:0px 0 20px 0px;
padding:10px;
text-align:center;
background-color:#fce4ec;
border-radius:5px;

h2{
color:#2f2f2f;
font-size:30px;
}

p:nth-child(2){
    margin:10px 0;
    font-weight:600;
    font-size:20px;
    color:#2f2f2f;
}

p:last-child{
    color:#2f2f2f;
}
`

export const Start = styled.h1`
margin: 0px 0 20px 0px;
text-align: center;
width: 100%;
line-height: 35px;
`

export const ShowCase = styled.div`
background-color:#fce4ec;
border-radius:5px;
width:100%;
max-width:1000px !important;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-bottom:20px;
padding:30px 50px 20px 50px;
`

export const Products = styled.div`
width:300px;
height:610px;
overflow:hidden;
border:2px solid #2f2f2f;
border-radius:5px;
margin:25px;
box-shadow: 12px 10px 23px -14px rgba(0,0,0,0.67);
`
export const Title = styled.h3`
text-align:center;
color:#474547;
padding:7px 17px 7px 17px;
line-height:22px;
`
export const Pic = styled.img`
width:100%;
height:100%;
display:block;
border-radius:10px 10px 0 0;

`
export const Description = styled.p`
text-align:center;
line-height:20px;
padding:15px 20px 15px 20px;
`

