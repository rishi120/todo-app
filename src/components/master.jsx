import React, { useState, useEffect, createContext, useRef } from 'react'
import Todo from "./child-components/todo";

const data = createContext();

function Mastercomponent() {
    const inputFocus = useRef();

    const handleInput = (event) => {
        console.log(event.target.value);
    }

    useEffect(() => {
        setTimeout(() => {
            inputFocus.current.focus();
        }, 300);

    }, [])

    const inputComponentValues = {
        inputFocus,
        handleInput
    }

    return (
        <section className='p-4'>
            <h1 className=' pb-3 font-sans text-2xl font-semibold'>A simple Todo App</h1>
            <hr />
            <data.Provider value={inputComponentValues}>
                <Todo />
            </data.Provider>
        </section>
    )
}

export default Mastercomponent
export { data };