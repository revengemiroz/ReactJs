import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Header from "./components/Header";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  function getData() {
    axios({
      method: 'get',
      url: 'https://miroz.herokuapp.com/person',

    }).then(response => {
      console.log(response.data)
      setData(response.data)
      // imgs.push(response.data[0].person_Image)
      // console.log(imgs)

      // var image = new Image();
      // image.src = imgs[0];
      // document.body.appendChild(image);
    })
      .catch(error => {
        console.log(error.response)
      });
  }

  console.log(data)

  return (
    <div className="App">
      <Header></Header>

      <Input></Input>
      <Card datas={data}></Card>
    </div>
  );
}

export default App;
