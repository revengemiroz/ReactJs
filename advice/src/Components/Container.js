import React from 'react';
import DisplayData from './DisplayData';
import styled from 'styled-components';

const DivContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
`

const H1 = styled.h1`
    margin-bottom:0.5em;
    color:#222;
    padding:0;
    box-sizing:border-box;
`

function Container() {
    return (
        <div>
            <DivContainer>
                <H1>Visit daily for not so great advice </H1>

                <DisplayData></DisplayData>
            </DivContainer>
        </div>
    );
}

export default Container;