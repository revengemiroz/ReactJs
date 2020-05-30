import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
    margin-top:1em;
    color:#222;
    background-color:transparent;
    font-weight:700;
    border-radius:5px;
    font-size:1.5rem;
    padding:0.5em 1em 0.5em 1em;
    text-transform:capitalize;
    cursor: pointer;

    &:hover{
        transition:0.3s linear;
        color:white;
        background-color:#222;
    }
`
const P = styled.p`
    border:1px solid #f2f1f1;
    padding:0.5em;
`

function DisplayData() {
    const [advices, setAdvices] = useState()

    useEffect(() => {
        api()
    }, [advices])



    function api() {
        axios.get(`https://api.adviceslip.com/advice`)
            .then(res => {
                console.log(res)
                setAdvices(res.data.slip.advice)
            })
    }

    return (
        <div>
            <P>{advices}</P>
            <Button onClick={api}>Get random advice</Button>
        </div>
    );
}

export default DisplayData;