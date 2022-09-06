import React from 'react'
import Addtask from "./task";

const Todo = ({ tasks, handleTaskDelete, handleTaskComplete, taskComplete, activeColor, storeCurrentDateAndTime }) => {

    return (
        <div>
            <Addtask />
            <div className=' lg:w-[500px] m-auto h-[380px] relative border-[1px] rounded-md mt-7'>
                <ul className=' lg:w-[500px] m-auto p-6 h-[350px] overflow-y-auto relative'>
                    <li className=' flex justify-between'><h1 className='pb-2 text-blue-800 font-semibold'>Tasks ({tasks.length})</h1> <p className=' text-[10px] text-blue-800 flex items-center'>{storeCurrentDateAndTime}</p></li>
                    {tasks.map((newtasks, index) => {
                        return (
                            <>
                                <li key={index} className=" capitalize list-disc pt-4 pb-1 flex items-center w-[100%] relative" style={taskComplete[index] ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 cursor-pointer" onClick={() => handleTaskComplete(index)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" style={activeColor[index] ? { color: "#f00" } : { color: "#000" }} />
                                    </svg>
                                    {newtasks.searchTerm}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-0 cursor-pointer" onClick={() => handleTaskDelete(newtasks)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </li>
                                <hr className=' w-[95%] ml-6 last:hidden' />
                            </>
                        )
                    })}
                </ul>
                <div className=' flex justify-around absolute w-[100%] bottom-3 bg-white border-t-[1px] py-1'>
                    <button type='button' className='lg:w-24 bg-transparent p-2 text-blue-800 font-mono text-sm border-b-2'>All</button>
                    <button type='button' className='lg:w-24 bg-transparent p-2 text-blue-800 font-mono text-sm border-b-2'>Active</button>
                    <button type='button' className='lg:w-24 bg-transparent p-2 text-blue-800  font-mono text-sm border-b-2'>Completed</button>
                </div>
            </div>
        </div>
    )
}

export default Todo