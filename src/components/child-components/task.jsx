import React, { useContext } from 'react'
import { data } from "../master";

export default function Addtask() {
    const { inputFocus, handleInput, handleTask, errorMessage, searchTerm } = useContext(data);
    return (
        <div className='lg:w-[100%] lg:flex lg:justify-center'>
            <div className='lg:w-[500px] border-2 border-white rounded-md mt-5 p-6 shadow z-10'>
                <input type="text" value={searchTerm} placeholder='Create a new todo...' className={'lg:w-[100%] block p-3 border-2 border-blue-500 rounded-md shadow-md placeholder:text-sm placeholder:font-mono placeholder:text-gray-400' + `${errorMessage === false ? ' mb-5' : ' mb-2'}`} ref={inputFocus} onChange={(e) => handleInput(e)} />
                {errorMessage && <p className='text-sm text-red-500 font-sans pb-4'>Please add a task</p>}
                <div className=' grid place-items-end'>
                    <button type='button' className='lg:w-24 bg-blue-600 shadow-lg p-2 rounded-md text-white font-mono' onClick={handleTask}>Add</button>
                </div>

            </div>
        </div>
    )
}
