import React from 'react'
import { Link } from 'react-router-dom';
import Login from './Login';
import { useState } from 'react';
import axios from 'axios';


const Registration = () => {
    const[name , setname] =useState(" ");
    const[pass,setpass] = useState(" ");
    const[gmail,setgmail] = useState("");

    async function submit(e){
      e.preventDefault();
      console.log(name + pass +" "+gmail)
      try{
           await axios.post("http://localhost:5001/registration",{
            name,pass,gmail
            
            }
           )

      }
      catch(e){
           console.log(e);
      }
    }


  return (
    <div className=' bg-neutral-300 flex justify-center align-middle w-full h-full'>
     <div className='text-black my-10 flex-col border rounded mx-8 shadow-lg shadow-cyan-500/50' >  Please fill all details very carefully
       <form method='post'>
         FullName:<br/> <input className=' pb-2 border-b-2 border-black' type='text'size={40} name="name"
         onChange={(e)=>{setname(e.target.value)}}  required /> <br/>
         FatherName:<br/> <input className=' pb-2 border-b-2 border-black' type='text'size={40} name='fname' required /><br/>
         phonenumber:<br/> <input className=' pb-2 border-b-2 border-black  ' type='text'size={40} name='phone' required /><br/>
         Gmail:<br/> <input className=' pb-2 border-b-2 border-black' type='email'size={40} name='gmail'
         onChange={(e)=>{setgmail(e.target.value)}} required /><br/>
         Rollnumber: <br/><input className=' pb-2  border-b-2 border-black' type='mail'size={40} name='roll'required /><br/>
         Make a strog password: <br/><input className=' pb-2  border-b-2 border-black' type='password'size={40} name='roll'
         onChange={(e)=>{setpass(e.target.value)}}required /><br/>
         <div className='flex justify-center gap-10'>
           <button onClick={submit} className='bg-cyan-500 shadow-lg shadow-cyan-500/50
             my-2 rounded-md'>Submit</button>
           <Link className='bg-blue-500 shadow-lg shadow-blue-500/50 my-2 rounded-md' to="/registration/login">Login page</Link>
         </div>
        
       </form>
     </div>
    </div>
  )
}

export default Registration