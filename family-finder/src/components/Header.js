import React from 'react';
import styled from 'styled-components';

const P = styled.p`
margin:0.5em 0 0.2em 0;
font-size:5rem;
`

function header(props) {
    return (
        <P>
            <span style={{ color: '#e85f99' }}>find the </span><span style={{ color: '#65587f' }}>relatives</span>
        </P>
    );
}

export default header;