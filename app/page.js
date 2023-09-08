"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'
import Main from '@/Components/Main'


const page = () => {
  const [user, setuser] = useState("Shubham");
  
  return (
    <>
    <Header user={user}/>
    <Main/>
    <hr/>
    {/* <Output/> */}
    
    </>
  )
}

export default page