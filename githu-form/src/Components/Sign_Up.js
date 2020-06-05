import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from 'react-hook-form-devtools';
import styled from 'styled-components';
import errorpng from '../error@2x.png';
import Signin from '../Components/Sign_In';
import { withNamespaces } from 'react-i18next';
import i18n from '../i18n';


const Container = styled.div`
    background-color:#ffffff;
    color:hsl(212,9%,38%);
    line-height:24px;
    padding:24px;
    border-radius:3px;
    max-width:429px;
    margin:0px 10px;
`

const Label = styled.label`
    color: hsl(210, 12%, 16%);
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    margin: 0px 0px 5px;
    text-align: left;
    width:100%;
`

const InputContainer = styled.div`

margin-bottom:15px;
`

const Input = styled.input`
background-color:hsl(210,25%,98%);
border:1.11px solid hsl(213,1%,84%);
border-radius:5px;
color:hsl(210,12%,16%);
line-height:20px;
margin:0px 5px 0px 0px;
padding:10px;
width:100%;

&:focus{
  outline:none;
  border:1px solid #2188ff;
  box-shadow:inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3);
}
`

const P = styled.p`
margin-top:5px;
color:hsl(210,12%,16%);
font-size:11px;
line-height:15px;
width:100%;
text-align:left;
`

const PNote = styled.p`
margin-top:16px;
color:hsl(210,8%,45%);
font-size:11px;
line-height:15px;
width:100%;
`

const Button = styled.input.attrs({
    type: 'submit',

})`
background-color:hsl(134,61%,46%);
border:1.11px solid hsl(134,61%,46%);
padding:20px 32px;
width:100%;
margin:16px 0px;
color:white;
text-align:center;
font-weight:700;
line-height:22px;
font-size:14px;
border-radius:3px;
`

const A = styled.a`
    cursor: pointer;
    color:hsl(212, 97%, 43%);
    display: inline;
    font-size: 11.5px;
    line-height: 21px;
    font-weight:400;

&:hover{
    text-decoration:underline;
}
`


function Sign_Up({ t }) {

    const { register, errors, watch, handleSubmit, control, setError, clearError } = useForm({ nativeValidation: true })
    const username = watch('username')
    const [isBollean, setIsBollean] = useState(true)
    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 2))
        setIsBollean(!isBollean)
    }



    return (

        <div>


            {isBollean ? (

                <div className='formContainer'>



                    <>
                        <h1>{t('Built for developers')}</h1>

                        <DevTool control={control}></DevTool>

                        <Container>


                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div>


                                    <InputContainer>
                                        <Label htmlFor='username'>{t('Username')}</Label>
                                        <div className='iconContainer'>
                                            <Input
                                                id='username'
                                                name='username'
                                                // min='0'
                                                // onChange={async e => {
                                                //     const value = e.target.value;

                                                //     if (value.length > 8 && value.length <= 15) {
                                                //         clearError("username");
                                                //     } else {
                                                //         setError(
                                                //             "username",

                                                //         );
                                                //     }
                                                // }}

                                                ref={
                                                    register({
                                                        required: true,

                                                    })
                                                }
                                            ></Input>
                                            {errors.username && <img className='icon' src={errorpng}></img>}

                                        </div>
                                    </InputContainer>

                                    <InputContainer>
                                        <Label htmlFor='email'>{t('Email')}</Label>
                                        <div className='iconContainer'>
                                            <Input
                                                id='email'
                                                name='email'
                                                ref={
                                                    register({
                                                        required: true,
                                                        pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                                    })
                                                }
                                            ></Input>
                                            {errors.email && <img className='icon' src={errorpng}></img>}
                                        </div>
                                    </InputContainer>

                                    <InputContainer>
                                        <Label htmlFor='password'>{t('Password')}</Label>
                                        <div className='iconContainer'>
                                            <Input
                                                id='password'
                                                name='password'
                                                ref={
                                                    register({
                                                        required: true,
                                                        // maxLength: 15,
                                                        // minLength: 8,
                                                        // pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                                    })
                                                }
                                            >
                                            </Input>
                                            {errors.password && <img className='icon' src={errorpng}></img>}
                                        </div>
                                        <P>
                                            {t('Make sure its at least 15 characters OR at least 8 characters including a number and a lowercase letter.')} <A>{t('Learn more.')}</A>
                                        </P>
                                    </InputContainer>


                                    <Button value={t('Sign up for Github')}>
                                    </Button>

                                    <PNote>
                                        {t('By clicking “Sign up for GitHub”, you agree to our')} <A>{t('Terms of Service')}</A>{t('and')}<A> {t('Privacy Statement.')}</A>{t('We’ll occasionally send you account related emails.')}
                                    </PNote>

                                </div>

                            </form>
                        </Container>
                    </>
                </div >
            ) : (<Signin state={isBollean}></Signin>)}

        </div>
    );

}



export default withNamespaces()(Sign_Up);