import React, { useState, useEffect, createContext, useRef } from 'react'
import Todo from "./child-components/todo";
import moment from 'moment';

const data = createContext();

function Mastercomponent() {
    const inputFocus = useRef();
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [taskComplete, setTaskComplete] = useState(false);
    const [activeColor, setActiveColor] = useState(false);
    const [storeCurrentDateAndTime, setStoreCurrentDateAndTime] = useState("");
    

    // function to render the current date and time with auto update.
    function updateDateAndTime() {
        const date = new Date();
        date.getHours();
        date.getMinutes();
        date.getSeconds();
        const formatDataAndTime = "DD-MMM-YYYY h:mm:ss A";
        const getDateAndTime = moment(date).format(formatDataAndTime);
        return getDateAndTime;
    }
    useEffect(() => {
        setInterval(() => {
            setStoreCurrentDateAndTime(updateDateAndTime());
        }, 1000);
    }, [storeCurrentDateAndTime]);

    const cloneOriginalArray = [...tasks];

    const handleInput = (event) => {
        const searchKeyWord = event.target.value;
        setSearchTerm(searchKeyWord);
        setErrorMessage(false);
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

    const handleDeleteAll = (task) => {
        let copyOfOriginalArray = [...tasks];
        task.forEach((data) => {
            copyOfOriginalArray = [...copyOfOriginalArray].filter((filteredData) => filteredData.searchTerm !== data.searchTerm);
        });
        setTasks(copyOfOriginalArray);
    }

    return (
        <section className='p-4'>
            <h1 className=' pb-3 font-sans text-2xl font-semibold'>A Simple Todo App</h1>
            <hr />
            <data.Provider value={inputComponentValues}>
                <Todo tasks={tasks} handleTaskDelete={handleTaskDelete} handleTaskComplete={handleTaskComplete} taskComplete={taskComplete} activeColor={activeColor} storeCurrentDateAndTime={storeCurrentDateAndTime} handleDeleteAll={handleDeleteAll} />
            </data.Provider>
        </section>
    )
}

export default Mastercomponent
export { data };