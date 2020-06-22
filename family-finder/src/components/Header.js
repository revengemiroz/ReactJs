import React from 'react';
import styled from 'styled-components';

const P = styled.p`
margin:0em 0 0.2em 0;
font-size:4.1rem;
line-height: 1.2em; 

`

function header(props) {
    return (
        <P style={{ marginTop: '20px' }}>
            <span style={{ color: '#e85f99' }}>find the </span><span style={{ color: '#65587f' }}>relatives</span>
        </P>
    );
}

export default header;