import React from 'react'
import { useLocation } from 'react-router-dom'

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
      <th scope="col" className='text-success'>{player1}</th>
      <th scope="col" className='text-success'>{player2}</th>
      <th scope="col" className='text-success'>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr  className='text-center'>

      <th scope="col" className='text-info'>Win</th>

      <td className='text-warning'>{player1Win}</td>
      <td className='text-warning'>{player2Win}</td>
      <td className='text-warning'>{total}</td>
    </tr>
    <tr  className='text-center'>
      <th scope="col" className='text-info'>Loss</th>

      <td className='text-warning'>{tieMatch===0 ? total-player1Win : total-tieMatch-player1Win }</td>
      <td className='text-warning'>{tieMatch===0 ? total-player2Win : total-tieMatch-player2Win }</td>
      <td className='text-warning'>{total}</td>
    </tr>
    <tr  className='text-center'>
      <th scope="col" className='text-info'>Draw</th>
      <td className='text-warning'>Draw Matches : {tieMatch===0? '0': tieMatch}</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}
