import React, { useState } from 'react';
import axios from 'axios';
import Card from "./Card";
import styled from 'styled-components';

const InputContainer = styled.div`
width:100%;

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

    const [data, setData] = useState([])
    const [value, setValue] = useState()
    const [bool, setBool] = useState(null)

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleSubmit() {
        if (!value) return
        axios({
            method: 'get',
            url: `https://miroz.herokuapp.com/person/name/${value}`,

        }).then(response => {
            console.log(response.data)
            setData(response.data)

        })
            .catch(error => {
                console.log(error.response)
            });

        setBool(!bool)
    }

    return (
        <InputContainer>
            <Inputs onChange={handleChange} placeholder='Enter the First Name to Search'></Inputs>
            <Button className='bubbly-button' onClick={handleSubmit}>Search</Button>
            {!bool ? (
                <></>
            ) : (
                    <Card datas={data}></Card>
                )}
        </InputContainer>
    );
}

export default Input;