import React, { useState, useEffect, createContext, useRef } from 'react'
import Todo from "./child-components/todo";

const data = createContext();

function Mastercomponent() {
    const inputFocus = useRef();
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [taskComplete, setTaskComplete] = useState(false);
    const [activeColor, setActiveColor] = useState(false);

    const cloneOriginalArray = [...tasks];

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
            const newTodos = [...tasks, { searchTerm, taskComplete }];
            setTasks(newTodos);
            setSearchTerm('');
            setTimeout(() => {
                inputFocus.current.focus();
            }, 300);
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

    const handleTaskDelete = (newtasks) => {
        setTasks([...cloneOriginalArray].filter((data) => data.searchTerm !== newtasks.searchTerm))
        setTimeout(() => {
            inputFocus.current.focus();
        }, 300);
    }

    const handleTaskComplete = (index) => {
        setTaskComplete({
            ...taskComplete,
            [index]: !taskComplete[index]
        });
        setActiveColor({
            ...activeColor,
            [index]: !activeColor[index]
        })
    }

    return (
        <section className='p-4'>
            <h1 className=' pb-3 font-sans text-2xl font-semibold'>A Simple Todo App</h1>
            <hr />
            <data.Provider value={inputComponentValues}>
                <Todo tasks={tasks} handleTaskDelete={handleTaskDelete} handleTaskComplete={handleTaskComplete} taskComplete={taskComplete} activeColor={activeColor} />
            </data.Provider>
        </section>
    )
}

export default Mastercomponent
export { data };