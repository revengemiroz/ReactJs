import React from 'react';
import { Container, FormContainer, Input, Form, InputContainer, TextArea } from './style';
import Footer from "../../components/footer/footer";
import { useForm } from 'react-hook-form';
import Header from '../../components/header/header';

function Contact() {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => console.log(data)
    return (
        <Container>
            <Header />
            <FormContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Input short name='firstname' placeholder='Enter your First Name' ref={register({
                                required: true
                            })} />
                            {errors.firstname && <span>First name is required</span>}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Input short name='lastname' placeholder='Enter your Last Name' ref={register({
                                required: true
                            })} />
                            {errors.lastname && <span>Last name is required</span>}
                        </div>
                    </InputContainer>
                    <Input name='email' placeholder='Enter your Email' ref={register({
                        required: true
                    })} />
                    {errors.email && <span>Email is required</span>}
                    <Input name='subject' placeholder='Subject of Discussion' ref={register({
                        required: true
                    })} />
                    {errors.subject && <span style={{ color: 'red' }}>Subject is required</span>}
                    <TextArea name='message' placeholder='message' ref={register({
                        required: true
                    })} />
                    {errors.message && <span>Message to send is required</span>}
                    <Input button name='submit' type='submit' value='Submit' />
                </Form>
            </FormContainer>
            <Footer></Footer>
        </Container >
    );
}

export default Contact;