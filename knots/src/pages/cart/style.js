import styled from 'styled-components';

export const Container = styled.div`
width:100%;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`

export const CartContainer = styled.div`
background-color:#fce4ec;

width:100%;
max-width:1000px;
margin:20px 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:20px;
border-radius:7px;

h1{
    color:#2f2f2f;
}

button{
    padding:15px 25px 15px 25px;
    border-radius:5px;
    background-color:white;
    font-weight:600;
    border:2px solid #2f2f2f;
    font-size:22px;
    margin:25px 0 0 0;
    cursor:pointer;
}


@media screen and (max-width:400px){
  h1{
      font-size:20px;
  }
}
`

export const CartItem = styled.div`
width:100%;
min-width:900px;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
margin:10px 0;

div:nth-child(3){
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width:400px){
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content:space-between;
margin:30px 0;

div:nth-child(2){
display:flex;
flex-direction:row;
width:100%;
max-width:330px;
justify-content:space-between;
margin-top:15px;

h3{
    font-size:18px;
}

span{
    font-size:12px;
   
}

}

div:nth-child(3){
display:flex;
flex-direction:row;
width:100%;
max-width:300px;
flex-wrap:wrap;
justify-content:space-between;
}
}
`

export const Product = styled.div`

`