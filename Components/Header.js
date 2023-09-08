"use client"
import React from 'react'

const Header = (props) => {
  return (
    <>
    <div className='flex px-5 py-4 bg-slate-600 text-white align-middle justify-between'>
        <h1 className=' font-bold text-5xl'>{props.user}</h1>
        <ul className='flex gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
        </ul>
    </div>
    </>
  )
}

export default Header