import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [deafault, change]= useState(false)

    const show = ()=>{
        change(!deafault)
    }

  return (
    <>
<div className=" flex justify-center items-center min-h-screen ">
  <div className=" w-[550px] h-[600px] bg-gradient-to-r from-[#757575] to-[#efefef] rounded-xl flex-col justify-center items-center gap-2 p-4 border-[#3ff9fb] border-4">
      <h2 className=' items-center font-HeadFont text-4xl font-extrabold text-white'>Become a Member Today!</h2>
      <h2 className='mt-3 items-center font-HeadFont text-xl font-medium text-white'>Name</h2>
<div className="">
  <input className=' w-[400px] h-[50px] items-center mt-5 rounded-lg' type="text" />
</div>
      
      <h2 className='mt-3 items-center font-HeadFont text-xl font-medium text-white'>Email</h2>
<div className="">
<input className=' w-[400px] h-[50px] items-center mt-5 rounded-lg' type="email" />
</div>
      
      <h2 className='mt-3 items-center font-HeadFont text-xl font-medium text-white'>Password</h2>
<div className=" relative w-[400px]">
{
  deafault?
  <FaEyeSlash onClick={show} className=' absolute top -[50%] right-5 translate-y-[130%] text-2xl' />
  :
    <FaRegEye onClick={show} className=' absolute top -[50%] right-5 translate-y-[130%] text-2xl' />
}
  <input className=' w-[400px] h-[50px] items-center mt-5 rounded-lg' type={deafault? "text":'password'} />
  </div>      
      
      
  </div>
</div>
    </>
  )
}

export default Signup