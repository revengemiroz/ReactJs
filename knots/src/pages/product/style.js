import styled from 'styled-components';

export const Container = styled.div`
width:100%;
/* border:2px solid green; */
display:flex;
flex-direction:column;
align-items:center;
`

export const ProductDetails = styled.div`
/* border:2px solid green; */
margin:20px 0;
width:100%;
height:100%;
max-width:1000px;
display:flex;
flex-direction:row;
justify-content:space-between;
background-color:#fce4ec;
border-radius:7px;
padding:0px 0 20px 40px;

@media screen and (max-width:400px){

display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
height:100%;
min-height:1450px;
padding:10px 0 0 0;

}
`

export const Description = styled.div`
display:flex;
flex-direction:column;
margin:auto 0;
/* border:2px solid green; */

>span{
    font-weight:700;
    font-size:27px;
}

>p{
    margin:25px 0;
    max-width:400px;
    font-size:19px;
}

@media screen and (max-width:400px){
    padding:0 20px;
    width:100%;
    text-align:center;
    margin:0;

span{
    font-weight:700;
    font-size:18px;
    margin-bottom:10px;
}

    p{
    margin:0px 0;
    font-size:16px;
}
}
`

export const CartDetails = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin:10px 0;
/* border:2px solid green; */
width:100%;


h1{
    /* border:2px solid green; */
    width:100%;
    text-align:center;
    margin:30px 0 0 0;
}

span{
    font-size:28px;
    font-weight:400;
    margin:10px 0;
    /* border:2px solid green; */
    width:100%;
    text-align:center;
}

button{
    /* border:2px solid green; */
    padding:10px 20px 10px 20px;
    font-size:22px;
    font-weight:700;
    color:white;
    border:2px solid #2f2f2f;
    background-color:#f8bbd0;
    border-radius:5px;
}

@media screen and (max-width:400px){
   
    h1{
    /* border:2px solid green; */
    font-size:24px;
    width:100%;
    text-align:center;
    margin:10px 0 0 0;
}

span{
    font-size:25px;
    font-weight:400;
    margin:10px 0;
    /* border:2px solid green; */
    width:100%;
    text-align:center;
}

}
`

export const Image = styled.div`
width:500px;
height:800px;


@media screen and (max-width:400px){
width:300px;
height:400px;
}
`

export const Details = styled.div`
margin:10px 0;
width:100%;

span{
    font-weight:700;
    font-size:20px;
}

p{
    font-weight:500;
    font-size:18px;
}

@media screen and (max-width:400px){

display:flex;
width:100%;
flex-direction:column;
margin:10px 0;

span{
    font-weight:700;
    font-size:17px;
}

p{
    font-weight:500;
    font-size:16px;
}

}
`