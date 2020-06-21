import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import styled from 'styled-components';
import Card from './Card'
import { renderContext } from "../Context/RenderContext";


function Display() {

    //use Context    
    const hooks = useContext(renderContext)
    const { datas, setDatas } = hooks

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        axios({
            method: 'get',
            url: 'https://miroz.herokuapp.com/person',

        }).then(response => {
            console.log(response.data)
            setDatas(response.data)

        })
            .catch(error => {
                console.log(error.response)
            });
    }


    return (
        <Card></Card>
    );
}

export default Display;