import React, { useContext } from 'react';
import { TaskProvider } from "./Context/taskContext";
import Display from "./Components/display";
import Input from './Components/input'
import './App.css';


function App() {


  return (
    <TaskProvider>
      <div className='App'>
        <Input></Input>
        <Display></Display>
      </div>
    </TaskProvider>



  );
}

export default App;
