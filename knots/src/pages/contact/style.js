import styled from 'styled-components';

export const Container = styled.div`
border:2px solid green;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`

export const FormContainer = styled.div`
/* border:2px solid green; */
width:100%;
max-width:1000px;
margin:10px 0;
`

export const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:1.9em 10% 0 10%;
background-color:#fce4ec;
border-radius:5px;
`
export const InputContainer = styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;

@media screen and (max-width:375px){
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
}
`

export const Input = styled.input`
width:100%;
max-width:${props => props.button ? '500px' : props => props.short ? '350px' : ''};
margin:20px 0px;
padding:1em 0 1em 1.5em;
border-radius:5px;
outline:none;
border:1px solid black;
background-color:${props => props.button ? '#f0f0f5' : ''};

@media screen and (max-width:375px){
margin:7px 0px;
}
`

export const TextArea = styled.textarea`
width:100%;
padding:1em 0 1em 1.5em;
max-width:${props => props.button ? '500px' : ''};
min-height:200px;
max-height:250px;
max-width:800px;
min-width:400px;
border:1px solid black;
`