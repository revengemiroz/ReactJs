import React, { useState, useEffect } from 'react';
import i18n from "../i18n";
import { withNamespaces } from 'react-i18next';
import styled from 'styled-components';


const NavBar = styled.nav`
position:relative;
width:100%;

background-color:red;
/* border:2px solid green; */
`

const Select = styled.select`
position:absolute;
right:20px;
top:12px;
padding:3px 0px 5px 3px;
border-radius:3px;
font-weight:700;
font-size:12px;
letter-spacing:0.1em;
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
`

const Option = styled.option`
font-weight:700;

&:hover{
    background-color:#222;
    color:white;
    
}
`

function Nav() {

    const [lang, setLang] = useState('en')

    const handleChange = (e) => {
        setLang(e.target.value)
        changeLanguage(lang)
    }

    const changeLanguage = lng => {
        i18n.changeLanguage(`${lng}`)
    }

    useEffect(() => {
        changeLanguage(lang)
    }, [lang])


    return (
        <NavBar>
            <Select
                value={lang}
                onChange={handleChange}>
                <Option selected value='en'>English</Option>
                <Option value='in'>India</Option>
                <Option value='rm'>Romanian</Option>
                <Option value='np'>Nepali</Option>
            </Select>

        </NavBar>
    );
}

export default Nav;