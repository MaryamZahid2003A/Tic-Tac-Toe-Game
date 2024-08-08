import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Flip() {
    const location=useLocation();
    const{num,flipButton}=location.state || {}
  return (
    <div className="my-5">
        <img src='https://www.iconpacks.net/icons/1/free-heads-or-tails-icon-456-thumb.png' alt='image' height='200' width='200' className='img-fluid rounded mx-auto d-block  my-5 row'/>

     <div class="text-center">
        <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <h1  className='text-danger fs-2 text-center my-5'>{num === 0? "Player 1 Win The Toss " : "Player 2 Win The Toss"}</h1>
    <Link to='/game' state={{num}} >
         <button type="button" class="btn btn-outline-warning align-items-center fs-5 p-2 px-4 my-5 rounded mx-auto d-block text-decoration-none" >Start Game</button>
     </Link>
     <Link to='/' >
         <button type="button" class="btn btn-outline-warning align-items-center fs-5 px-5 my-5 rounded mx-auto d-block text-decoration-none" >Reset</button>
     </Link>
    </div>
  )
}
