import React, { useEffect, useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Header from "./components/Header";
import Card from "./components/Card";
import Display from "./components/Display";
import Input from "./components/Input";
import { StateProvider } from './Context/RenderContext';

function App() {

  return (
    <StateProvider>
      <div className="App">
        <Header></Header>
        <Input></Input>
        <Display></Display>
      </div>
    </StateProvider>
  );
}

export default App;
