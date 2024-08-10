import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Performance() {
    const location=useLocation();
    const {player1Win,player2Win,total,player1,player2,tieMatch}=location.state || {};
    console.log(player1Win);
    console.log(player2Win);
  return (
    <div className='bg-dark my-5 ms-5 me-5'>
        <h1 className='text-warning text-center'>Performance Table</h1>
      <table class="table  table-dark table-bordered table-hover table-responsive" >
  <thead>
    <tr className='text-center'>
      <th scope="col" className='text-info'></th>
      <th scope="col" className='text-warning fs-5'>{player1}</th>
      <th scope="col" className='text-warning fs-5'>{player2}</th>
      <th scope="col" className='text-warning fs-5'>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr  className='text-center'>

      <th scope="col" className='text-info'>Win</th>

      <td className='text-success fs-5'>{player1Win}</td>
      <td className='text-success fs-5'>{player2Win}</td>
      <td className='text-success fs-5'>{total}</td>
    </tr>
    <tr  className='text-center'>
      <th scope="col" className='text-info'>Loss</th>

      <td className='text-danger fs-5'>{tieMatch===0 ? total-player1Win : total-tieMatch-player1Win }</td>
      <td className='text-danger fs-5'>{tieMatch===0 ? total-player2Win : total-tieMatch-player2Win }</td>
      <td className='text-danger fs-5'>{total}</td>
    </tr>
    <tr  className='text-center'>
      <th scope="col" className='text-info'>Draw</th>
      <td className='text-warning fs-5'>Draw Matches : {tieMatch===0? '0': tieMatch}</td>
    </tr>
  </tbody>
</table>
<Link to='/' className="text-decoration-none" >
         <p type="button" class=" align-items-center text-danger fs-4 rounded mx-auto d-block  text-center py-3" >Back Page</p>
        </Link>
    </div>
  )
}
