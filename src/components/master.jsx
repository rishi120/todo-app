import React, { useState, useEffect, createContext, useRef } from 'react'
import Todo from "./child-components/todo";

const data = createContext();

function Mastercomponent() {
    const inputFocus = useRef();
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleInput = (event) => {
        const searchKeyWord = event.target.value;
        setSearchTerm(searchKeyWord);
        setErrorMessage(false);
    }

    const handleTask = () => {
        if (searchTerm === '') {
            setErrorMessage(true);
            setTimeout(() => {
                inputFocus.current.focus();
            }, 300);
        }
        else {
            const newTodos = [...tasks, { searchTerm }];
            setTasks(newTodos);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            inputFocus.current.focus();
        }, 300);

    }, [])

    const inputComponentValues = {
        inputFocus,
        handleInput,
        searchTerm,
        handleTask,
        errorMessage
    }

    return (
        <section className='p-4'>
            <h1 className=' pb-3 font-sans text-2xl font-semibold'>A simple Todo App</h1>
            <hr />
            <data.Provider value={inputComponentValues}>
                <Todo tasks={tasks} />
            </data.Provider>
        </section>
    )
}

export default Mastercomponent
export { data };