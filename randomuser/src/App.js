import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
flex-wrap: wrap;
padding:2em 2em 2em 2em;
background-color:white;
border-radius:10px;
`

const Small = styled.small`
color:#bbb;
`

const P = styled.p`
max-width:500px;
text-align:center;
color:white;
font-weight:700;
`

const Span = styled.span`
color:#6055a5;
font-weight:700;
font-size:2.5em;
margin-bottom:20px;
`

const Error = styled.span`
color:red;
font-size:12px;
margin:2em;
`
const Highlight = styled.span`
color:red;
font-weight:500;

`


const Input = styled.input`
border-radius: 5px;
border: 1.3px solid hsl(246, 25%, 77%);
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 500;
padding: 12px 20px;
display: block;
width:100%;

&:focus{
  border: 1.3px solid hsl(248, 32%, 49%);
  outline: none;
}
`

const Button = styled.input.attrs({ type: 'submit' })`
background-color: hsl(154, 59%, 51%);
border-radius: 5px;
border: 1px solid hsl(154, 59%, 45%);
box-shadow: 0 2px hsl(154, 59%, 45%);
color: #fff;
cursor: pointer;
display: block;
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 500;
padding: 15px 25px;
letter-spacing: 1px;
text-transform: uppercase;
width: 100%;
`



function App() {

  const [text, setText] = useState('')
  const { register, handleSubmit, watch, errors, getValues } = useForm()
  const onSubmit = data => {
    { setText(JSON.stringify(data, null, 6)) }
  }
  const [err, setErr] = useState(false);


  return (
    <div>
      <Container>
        <Span>
          This is my form
        </Span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='firstname'>First name</label>
          <Input
            id='firstname'
            name='firstname'
            placeholder='First Name'
            ref={register(
              {
                required: 'First name cannot be empty',
                maxLength: 10,

              }
            )}
          ></Input>

          {errors.firstname && <Error>{errors.firstname.message}</Error>}

          <br></br>

          <label htmlFor='lastname'>Last name</label>
          <Input
            id='lastname'
            name='lastname'
            placeholder='Last Name'
            ref={register(
              {
                required: 'Last name cannot be empty',
                maxLength: 10,

              }
            )}
          ></Input>


          {errors.lastname && <Error>{errors.lastname.message}</Error>}
          <br></br>

          <label htmlFor='email'>Email</label>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder='Email Address'
            ref={register({
              required: 'invalid email pattern',
              pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          ></Input>

          {errors.email && <Error>{errors.email.message}</Error>}
          <br></br>

          <label htmlFor='password'>Password</label>
          <Input
            id='password'
            name='password'
            type='text'
            placeholder='0 - 10 characters'
            ref={register({
              required: 'Password is required',
              validate: {
                greaterthan0: value => (value.length > 0),
                lessthan10: value => (value.length <= 10)
              }
            })}
          >
          </Input>
          {errors.password && <Error>{errors.password.message}</Error>}

          <br></br>

          <label htmlFor='Repassword'>Confirm Password</label>
          <Input
            id='Repassword'
            name='Repassword'
            type='password'
            placeholder='same as above duh!'
            ref={register({
              validate: {
                matchesPreviousPassword: value => {
                  const { password } = getValues()
                  return password === value || 'Passwords should match each other'
                }
              },
              required: 'Confirm Password is required'
            })}
          >
          </Input>
          {errors.Repassword && <Error>{errors.Repassword.message}</Error>}

          <br></br>

          <Button type='submit'></Button>

          <br></br>
          <Small>By clicking the button, you are agreeing to our <Highlight>Terms and Services</Highlight></Small>
        </form>
      </Container>
      <br></br>
      <P>{text}</P>
    </div>
  );
}

export default App;
