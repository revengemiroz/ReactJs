import React, { useContext, useState } from 'react';
import { taskContext } from "../Context/taskContext";
import List from "./list";

function Display(props) {

    return (
        <div >
            <List />
        </div>
    );
}

export default Display; 
