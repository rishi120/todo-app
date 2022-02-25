import React from 'react'

export default function Addtask() {
    return (
        <div className='lg:w-[100%] lg:flex lg:justify-center'>
            <div className='lg:w-[500px] border-2 border-white rounded-md mt-5 p-6 shadow z-10'>
                <input type="text" placeholder='Add Task' className='lg:w-[100%] block p-4 border-2 border-blue-500 rounded-md mb-5 shadow-md placeholder:text-sm placeholder:font-mono placeholder:text-gray-400' />
                <button type='button' className='lg:w-40 bg-blue-600 shadow-lg p-2 rounded-md text-white font-mono'>Add</button>
            </div>
        </div>
    )
}
