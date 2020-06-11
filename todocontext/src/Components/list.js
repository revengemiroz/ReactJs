import React, { useState, useContext } from 'react';
import { taskContext } from "../Context/taskContext";
function List({ todos }) {

    const [isedit, setIsedit] = useState(null);
    const [eChange, setEChange] = useState();

    const hooks = useContext(taskContext)
    const { todo, setTodo } = hooks

    function deleted(id) {
        var filterdata = todo.filter(a => a.id !== id);
        setTodo(filterdata);
        console.log(filterdata);
    }

    function edit(id) {
        setIsedit(id);
    }

    function editChange(e) {
        e.preventDefault();
        setEChange(e.target.value);
    }

    function save(id) {
        // console.log(idx, todo)
        setIsedit(null);
        const todos = todo.find(todo => todo.id === id);
        let newTodos = [...todo];
        newTodos[newTodos.indexOf(todos)] = { id, todo: eChange };
        setTodo(newTodos);
    }

    return (
        <div className='allli'>
            <ul>
                {todo.length === 0 ? (
                    <span className='error'>no todos</span>
                ) : (
                        todo.map((a, idx) => (
                            <li key={a.id}>
                                <div className='dataContainer'>
                                    {isedit === a.id ? (

                                        <input className='edit' type='text' max='10' onChange={editChange} defaultValue={a.todo} />
                                    ) : (
                                            <span className='data'>
                                                {idx + 1}. {a.todo}{" "}
                                            </span>
                                        )}
                                    <div className='buttonContainer'>
                                        <button className='button' onClick={() => deleted(a.id)}>delete</button>

                                        {isedit === a.id ? (
                                            <button onClick={() => save(a.id)}>Save</button>
                                        ) : (
                                                <button onClick={() => edit(a.id)}>Edit</button>
                                            )}
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
            </ul>
        </div>
    );
}

export default List;