import React from 'react'
import './App.css'
import { useLocation } from 'react-router-dom'
export default function Game() {
    const location=useLocation();
    const {num}=location.state || {};
    // 0 For Head(X) And 1 For Tail(O)

  return (
    <div className='container '>
        <div className='rounded '>
           <div className='gridWidth'> {['1','2','3','4','5','6','7','8','9'].map((turn)=>(
                    <button class="p-5 ms-0 bg-warning rounded-2 my-1 text-black"><h1 className={num===0? 'XTurn': 'oTurn'}>{num===0? 'X' : '0'}</h1></button>
           ))}</div> 
        </div>
       
      
    </div>
  )
}
