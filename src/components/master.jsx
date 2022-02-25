import React from 'react'
import Todo from "./child-components/todo";

function Mastercomponent() {
    return (
        <section className='p-4'>
            <h1 className=' pb-3 font-sans text-2xl font-semibold'>A simple Todo App</h1>
            <hr />
            <Todo />
        </section>
    )
}

export default Mastercomponent