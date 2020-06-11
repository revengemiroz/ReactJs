import React, { useState, useContext, useRef } from 'react';
import { taskContext } from "../Context/taskContext";

function Input() {

    const hooks = useContext(taskContext)
    const { value, setValue, todo, setTodo } = hooks
    const inputRef = useRef()

    function handleChange(e) {
        e.preventDefault();
        setValue(e.target.value);
    }


    function handleSubmit() {
        if (!value) return;

        setTodo([
            ...todo,
            {
                id: todo.length ? todo[todo.length - 1].id + 1 : 1,
                todo: value
            }
        ]);
        setValue("");

        inputRef.current.value = ''
    }

    return (
        <div className='inputContainer'>
            <input type='text' name='input' ref={inputRef} onChange={handleChange} placeholder='add todo'></input>
            <button className='add' onClick={handleSubmit}>Add</button>
        </div>
    );
}

export default Input;