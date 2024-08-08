import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Home() {
    const [num,setNum]=useState(0);
    const randomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    const flipButton=()=>{
            setNum(randomNumber(0,1))
    }
  return (
    <div className='container'>
        <img src='https://as2.ftcdn.net/v2/jpg/06/08/69/33/1000_F_608693380_FMOM8H6Bn2GP7A56C0n1ztAeOwm9voy1.jpg' alt='image' height='500' width='500' className='img-fluid rounded mx-auto d-block  my-5 row'/>
        <div class="mb-3 row gap-3 rounded  ms-5">
            <div className='col-md '>
            <h3 for="exampleFormControlInput1" class="form-label fs-5 text-white ">Player 1 (Head)</h3>
            <input type="email" class="form-control bg-black text-warning w-75 align-items-center" id="exampleFormControlInput1" placeholder="Player 1"/>
            </div>
            <div className='col-md'>
            <label for="exampleFormControlInput1" class="form-label fs-5 text-white text-center">Player 2 (Tail)</label>
            <input type="email" class="form-control bg-black text-warning w-75" id="exampleFormControlInput1" placeholder="Player 2"/>
            </div>
         </div>
         <Link to='/flip' state={{num}}>
         <button type="button" class="btn btn-outline-warning align-items-center fs-5 p-2 my-5 rounded mx-auto d-block" onClick={flipButton}>Flip The Coin</button>
         </Link>
    </div>
  )
}