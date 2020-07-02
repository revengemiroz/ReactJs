import styled from 'styled-components';

export const Container = styled.div`
background-color:#f0f0f5;
padding:30px 0;
width:100%;
border-radius:5px;
max-width:1000px;
display:flex;
flex-direction:column;
justify-content:center;
margin-bottom:20px;
`

export const IconContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;

`

export const A = styled.a`
&:hover{
  
  transition:0.3s ease;  
}
`

export const EmailContainer = styled.div`
margin-top:30px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const InputContainer = styled.div`

width:100%;
display:flex;
justify-content:center;
align-items:center;
`

export const Input = styled.input`
padding:0.7em 0 0.7em 1.2em;
border-radius:5px;
outline:0;
margin:1em;
border:2px solid #2f2f2f;
`

export const Button = styled.button`
padding:0.7em 1em;
background-color:#fce4ec;
color:#2f2f2f;
font-weight:700;
border-radius:5px;
border:2px solid #2f2f2f;
`

export const Links = styled.div`
margin-top:20px;
text-align:center;
width:100%;
`