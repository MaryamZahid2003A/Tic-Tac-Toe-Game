import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Flip() {
    const location=useLocation();
    const { num, player1, player2 } = location.state || {};

    const [result,setResult]=useState(false)
    useEffect(()=>{
      const timer=setTimeout(()=>{
        setResult(true)
      },2000);
    },[])
  return (
    <div className="my-5">
        <img src='https://www.iconpacks.net/icons/1/free-heads-or-tails-icon-456-thumb.png' alt='image' height='200' width='200' className='img-fluid rounded mx-auto d-block  my-5 row'/>

     <div class="text-center">
        <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    {result && (
       <h1 className='text-danger fs-2 text-center my-4'>
            {num === 0 ? `${player1} Wins The Toss`: `${player2} Wins The Toss`}
        </h1>
     )}
     <div className='d-flex justify-content-center align-items-center '>
      <div className='text-white text-center my-0 mx-1 fs-4'> {player1} Head (  <img src='https://cdn-icons-png.flaticon.com/128/1828/1828665.png' height='20' width='20' /> )</div> : 

     <div className='text-white text-center my-0 mx-3 fs-4'> 
        {player2} Tail ( <img src='https://cdn-icons-png.flaticon.com/128/16750/16750043.png' width='20' height='20' />
     )</div>
     </div>
    <Link to='/game' state={{num,player1,player2}} className="text-decoration-none" >
         <button type="button" class="btn btn-outline-warning align-items-center fs-5 p-2 px-4 my-5 rounded mx-auto d-block text-decoration-none" >Start Game</button>
     </Link>
     <Link to='/' className="text-decoration-none" >
         <button type="button" class="btn btn-outline-warning align-items-center fs-5 px-5 my-5 rounded mx-auto d-block text-decoration-none" >Reset</button>
     </Link>
    </div>
  )
}
