import styled from 'styled-components';

export const Container = styled.div`
/* border:2px solid green; */
width:100%;
max-width:1000px;
border-radius:5px;
background-color:#f0f0f5;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:20px;
`

export const Logos = styled.div`
/* border:2px solid green; */
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
max-width:600px;
`

export const List = styled.div`
/* border:2px solid green; */
width:100%;
max-width:300px;


`

export const Ul = styled.ul`
display:flex;
flex-direction:row;
justify-content:space-between;

@media screen and (max-width:375px){
    display:flex;
    flex-direction:column;
    font-size:17px;
}
`
export const Li = styled.li`

list-style:none;
`

export const Cart = styled.div`
/* border:2px solid green; */
width:100%;
max-width:150px;
display:flex;
justify-content:space-between;
align-items:center;
margin-right:20px;

span{
    font-weight:600;
    font-size:32px;
}

@media screen and (max-width:375px){
    display:flex;
    flex-direction:column;
    margin-right:0px;
}
`