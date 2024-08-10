import React, { useState } from 'react';

import {AiOutlineClose,AiOutlineMenuFold} from 'react-icons/ai';

const Navbar = () => {
  const[toggle,settoggle]=useState(false);
  return (
    <div className=' fixed-top bg-cyan-200 flex justify-between text-slate-300 shadow-lg shadow-indigo-500/40  color: rgb(226 232 240); '>
      <div className=' text-orange-700 text-2xl px-4'>Signup$Login</div>
      {
        toggle?
        <AiOutlineClose onClick={()=>settoggle(!toggle)} className=' text-black
         my-2 md:hidden block text-xl  right-2' />
        : <AiOutlineMenuFold onClick={()=>settoggle(!toggle)} className=' text-black
         my-2 md:hidden block text-xl  right-2' />

      }
      <div>
      
      </div>
      
      <div className='color-white'>
        <ul className='hidden md:flex justify-center gap-10 px-5 text-slate-900 my-2'>
          <li className=' hover:bg-black text-white'>Home </li>
          <li className=' hover:bg-black text-white'>About </li>
          <li className=' hover:bg-black text-white'>Login </li>
        </ul>
        
        <ul className= {` duration-500 md:hidden fixed left-[-100] top-[30px] w-full
         h-full bg-slate-300 text-slate-900 text-xl ${toggle ? 'left-0' : 'left-[-100]'}`}>
        <li className=' my-8 mx-8 hover:bg-black text-white'>Home </li>
        <li className=' my-8 mx-8 hover:bg-black  text-white'>About </li>
        <li className=' my-8 mx-8 hover:bg-slate-600  text-white'>Login </li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar;