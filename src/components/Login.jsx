import React from 'react'
import { Link } from 'react-router-dom'
import Registration from './Registration'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const[name , setname] =useState(" ");
  const[pass,setpass] = useState(" ");

  async function submit(e){
    e.preventDefault();
    console.log(name + pass)
    try{
         await axios.post("http://localhost:5001/login",{
          name,pass
          }
         )

    }
    catch(e){
         console.log(e);
    }
  }
  return (
    <div className='flex justify-center w-full'>
    <div className='text-black w-1/3 my-10 flex-col border rounded mx-8 bg-slate-400 justify-center' >  Please full all details very carefully
       <form method='pst'>
         Username : <input className=' my-4 mx-4' type='text'size={20} onChange={(e=>{setname(e.target.value)})} required /> <br/>
         password : <input className=' my-4 mx-4' type='text'size={20} onChange={(e=>{setpass(e.target.value)})} required /><br/>
         <div className='flex justify-center gap-10'>
           <button onClick={submit} className='bg-cyan-500 shadow-lg shadow-cyan-500/50
             my-2 rounded-md'>Submit</button>
           <Link className='bg-blue-500 shadow-lg shadow-blue-500/50 my-2 rounded-md' to="/registration">signup page</Link>
         </div>
       </form> 
     </div>  
     </div>
  )
}

export default Login