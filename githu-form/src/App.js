import React, { useState, useEffect } from 'react';
import SignUp from './Components/Sign_Up.js';
import styled from 'styled-components';
import i18n from "./i18n";
import { withNamespaces } from 'react-i18next';

const Div = styled.div`
background-color:#2b3137;
height:100%;
width:100%;
position:relative;
border:2px solid green;
`

const Nav = styled.nav`
position:absolute;
width:100%;
border:2px solid green;
`

const Button = styled.select`
width:50px;
height:50px;
`


function App() {

  const [lang, setLang] = useState('en')

  useEffect(() => {
    changeLanguage(lang)

  }, [lang])

  const changeLanguage = lng => {
    i18n.changeLanguage(`${lng}`)
  }

  const handleChange = (e) => {
    setLang(e.target.value)
    const language = lang
    changeLanguage(lang)
  }

  return (
    <Div className='app'>
      <Nav>
        {/* <Button onClick={() => {
          changeLanguage('in')
        }}>in</Button> */}
        <select
          value={lang}
          onChange={handleChange}>
          <option selected value='en'>English</option>
          <option value='in'>India</option>
          <option value='rm'>Romanian</option>
          <option value='np'>Nepali</option>
        </select>

        <p>{lang}</p>
      </Nav>


      <SignUp></SignUp>

    </Div>
  );
}

export default withNamespaces()(App);