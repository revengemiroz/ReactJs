import React, { useState, useContext } from 'react';
import axios from 'axios';
import Card from "./Card";
import styled from 'styled-components';
import { renderContext } from "../Context/RenderContext";

const InputContainer = styled.div`
width:100%;
/* border:2px solid green; */
padding:0.5em;
display:flex;
justify-content:center;
`

const Inputs = styled.input`
width:300px;
padding:0.6em 0 0.6em 1em;
border-radius:7px;
outline:none;
border:2px solid #f8764f;
`

const Button = styled.button`

`

function Input() {

    const [value, setValue] = useState()

    //useContext
    const hooks = useContext(renderContext)
    const { datas, setDatas, isLoading, setIsLoading } = hooks


    function handleChange(e) {
        setValue(e.target.value.toLowerCase())
    }

    function handleSubmit() {
        if (!value) return
        setIsLoading(true)
        axios({
            method: 'get',
            url: `https://miroz.herokuapp.com/person/name/${value}`,

        }).then(response => {
            console.log(response.data)

            setDatas(response.data)
            setIsLoading(false)
        })
            .catch(error => {
                console.log(error.response)
            });
    }

    return (
        <InputContainer>
            <Inputs onChange={handleChange} placeholder='Enter the First Name to Search'></Inputs>
            <Button className='bubbly-button' onClick={handleSubmit}>Search</Button>
        </InputContainer>
    );
}

export default Input;