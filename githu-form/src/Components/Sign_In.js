import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import SignUp from '../Components/Sign_Up';
import Reset from './Reset_Password';

const SignInDiv = styled.div`
background-color:#f9f9f9;
/* border:2px solid green; */
width:100%;
height:100vh;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
`

const Logo = styled.div`
color:rgb(51,51,51);
padding:32px 0px 24px 0px;
`

const Title = styled.p`
display:block;
font-size:24px;
letter-spacing:-0.5px;
line-height:36px;
font-weight:300;

`

const Div = styled.div`
border: 1px solid rgb(216,222,226);
border-radius:5px;
padding:20px 20px 20px 20px;
width:308px;
margin:16px 0px 0px;
font-size:14px;
background-color:white;

`

const InputContainer = styled.div`
display:flex;
flex-direction:column;
`

const Label = styled.label`
    color: hsl(36, 41, 46);
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    text-align: left;
`

const LabelContainer = styled.div`
color:rgb(36,41,46);
display:flex;
justify-content:space-between;
`

const Input = styled.input`
background-color:transparent;
border:1.11px solid hsl(213,1%,84%);
border-radius:5px;
color:hsl(210,12%,16%);
line-height:20px;
margin:7px 0px 15px 0px;
padding:6px 8px;
width:100%;

&:focus{
  outline:none;
  border:1px solid #2188ff;
  box-shadow:inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3);
}

&::placeholder{
color:#afb4b9;
}
`

const Button = styled.input.attrs({
    type: 'submit',

})`
background-color:#28a745;
background-image:linear-gradient(-180deg,#34d058,#28a745 90%);
background-position:-7px 50%;
border:1.11px solid rgba(27,31,35,0.5);
padding:6px 12px;
width:100%;
margin:5px 0px 0px 0px;
color:white;
text-align:center;
font-weight:600;
letter-spacing:normal;
font-size:14px;
line-height:20px;
border-radius:3.5px;
white-space:nowrap;
cursor: pointer;

&:focus{
  outline:none;
  border:1px solid #2188ff;
  box-shadow:inset 0 1px 2px #28a745, 0 0 0 0.2em rgba(52,208,88,.4);
}
`

const New = styled.div`
border: 1px solid rgb(216,222,226);
margin:16px 10px;
padding:15px 20px;
width:308px;
border-radius:5px;
color:rgb(36,41,46);
text-align:center;
font-size:14px;
line-height:21px;
`

const A = styled.a`
    cursor: pointer;
    color:${props => props.contact ? '#586069' : 'hsl(212, 97%, 43%)'};
    display: inline;
    font-size: ${props => props.list || props.forgot ? '12px' : '14px'};
    line-height: 21px;
    font-weight:${props => props.createandaccount ? '400' : (props.list ? '0' : '600')};

&:hover{
    text-decoration:underline;
}
`

const Links = styled.div`
/* border:2px solid green; */
width:100%;
margin-top:24px;
padding:40px;
text-align:center;
`

const Ul = styled.ul`
display:flex;
justify-content:center;
flex-direction:row;
`

const Li = styled.li`
list-style:none;
margin:0px 10px 0px 10px;
font-size:12px;
display:inline;
line-height:18px;
color:rgb(3,102,214);
cursor:pointer;
`

function Sign_In(state) {

    const { register, handleSubmit, errors } = useForm()
    const [isBollean, setIsBollean] = useState(state)
    const [forgot, setForgot] = useState(true)


    const onSubmit = data => {
        // alert(JSON.stringify(data));
        alert(JSON.stringify(data, null, 2))
        setIsBollean(!isBollean)
    }

    const onResetPass = data => {
        alert(JSON.stringify(data, null, 2))

        setForgot(!forgot)
    }

    return (
        <div>
            {isBollean ? (


                <SignInDiv className='SignIn'>
                    <Logo>
                        <svg height="48" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="48" aria-hidden="true">
                            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </Logo>

                    {forgot ? (
                        <>
                            <Title>Sign in to GitHub</Title>
                            <form key={1} onSubmit={handleSubmit(onSubmit)}>
                                <Div>
                                    <InputContainer>
                                        <Label htmlFor='username'>Username or email address</Label>
                                        <Input id='username' name='username' type='text' ref={register}></Input>
                                    </InputContainer>

                                    <div>
                                        <LabelContainer>
                                            <Label htmlFor='password'>Password</Label>

                                            <A forgot onClick={() => {

                                                setForgot(!forgot)
                                            }}>Forgot password?</A>
                                        </LabelContainer>

                                        <Input id='password' name='password' type='text' ref={register}></Input>
                                    </div>

                                    <Button value='Sign in'></Button>

                                </Div>
                            </form>

                            <New>
                                <p>New to Github? <A createandaccount onClick={onSubmit}>Create an account.</A></p>
                            </New>
                        </>
                    ) : (
                            <>
                                <Title>Reset your password</Title>
                                <form key={2} onSubmit={handleSubmit(onResetPass)}>
                                    <Div>
                                        <InputContainer>
                                            <Label htmlFor='email'>Enter your user account's verified email address and we will send you a password reset link.</Label>
                                            <Input id='email' name='email' type='text' ref={register} placeholder='Enter your email address'></Input>
                                        </InputContainer>



                                        <Button value='Send password reset email' reset></Button>

                                    </Div>
                                </form>


                            </>
                        )}

                    <Links>
                        <Ul>
                            <Li>
                                <A list>Terms</A>
                            </Li>

                            <Li>
                                <A list>Privacy</A>
                            </Li>

                            <Li>
                                <A list>Security</A>
                            </Li>

                            <Li >
                                <A contact list>Contact GitHub</A>
                            </Li>
                        </Ul>
                    </Links>

                </SignInDiv >
            ) : (
                    <SignUp></SignUp>
                )}
        </div>
    );
}

export default Sign_In;