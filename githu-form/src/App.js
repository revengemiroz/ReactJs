import React, { useState, useEffect } from 'react';
import SignUp from './Components/Sign_Up.js';
import styled from 'styled-components';
import i18n from "./i18n";
import { withNamespaces } from 'react-i18next';
import Navigation from "./Components/Nav";

const Div = styled.div`
/* background-color:#2b3137; */
height:100%;
width:100%;
position:relative;
`
const Small = styled.small`
text-align:center;
margin:0px 50px;
`
function App() {


  return (
    <div className='app'>

      <Navigation></Navigation>
      <SignUp></SignUp>

      <Small >no proper validation is implemented yet.</Small>
    </div >
  );
}

export default withNamespaces()(App);