import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

export default function Navbar(props) {

    const newPage = (val) => {

        props.newPage(val)

    }

    return (
        <div className='bg-black w-screen p-3 flex items-center z-50 fixed '>

            
            <h1 className='text-white font-sans text-4xl mr-4'>
                A
            </h1>
            <div>
                <Sidebar newPage={newPage} />
            </div>

            <h1 className='text-white font-sans text-xl'>
                Abhay Chandra
            </h1>
        </div>
    )
}
