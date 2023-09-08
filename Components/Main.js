"use client"
import React, { useState } from 'react'


const Main = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  let submitHandler = (e) => {
    e.preventDefault()

    setmainTask([...mainTask, { task, desc }]);

    settask("");
    setdesc("");
    console.log(mainTask)
  }
  let renderTask = <h3>No Task Available</h3>

  if (mainTask.length > 0) {

    renderTask = mainTask.map((t, i) => {
      const deleteHandler = (i) => {
        let copyTask = [...mainTask];
        copyTask.splice(i, 1);
        setmainTask(copyTask)
      }
      return (
        <li key={i} className='flex justify-between items-center m-5'>
          <div className='flex justify-between w-2/3'>
            <h2 className=' text-xl font-semibold'>{t.task}</h2>
            <h3 className=' text-lg font-semibold'>{t.desc}</h3>
          </div>
          <button onClick={() => {
            deleteHandler(i)
          }} className=' bg-red-600 text-white font-bold px-3 py-1 rounded'>Delete</button>
        </li>)
    });

  }

  return (
    <>
      <h1 className=' text-center bg-gray-500 m-5 text-2xl'> My ToDo List</h1>
      <form className=' text-center' onSubmit={submitHandler}>
        <input type='text' required className='border-zinc-500 border-2 p-1 m-5 ' placeholder='Enter Your Task' value={task} onChange={(e) => {
          settask(e.target.value);
        }} />
        <input type='text' required className='border-zinc-500 border-2 p-1 m-5 ' placeholder='Enter Description' value={desc} onChange={(e) => {
          setdesc(e.target.value);
        }} />
        <button className='m-5 border-zinc-800 border-2 rounded p-3'>Add</button>
      </form>

      <div className=' text-white p-5 bg-slate-500'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default Main