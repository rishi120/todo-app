import React from 'react'

export default function Addtask() {
    return (
        <div className='lg:w-[100%] lg:flex lg:justify-center'>
            <div className='lg:w-[500px] border-2 border-blue-600 rounded-md mt-5 p-6 shadow z-10'>
                <input type="text" placeholder='Add Task' />
                <button type='button'>Add</button>
            </div>
        </div>
    )
}
