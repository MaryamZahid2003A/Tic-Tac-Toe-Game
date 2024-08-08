import React, { useState } from 'react'
import './App.css'
import { useLocation } from 'react-router-dom'
export default function Game() {
    const location=useLocation();
    let [num,setNum]=useState(location.state || {});
    const [cells, setCells] = useState(Array(9).fill(null));
    let [Value,setValue]=useState(0);
    let [count,setCount]=useState(0);
    const [newCount,setNewCount]=useState(5);
    const [bool,setBool]=useState(false)

    let Num=num;
    // 0 For Head(X) And 1 For Tail(O)
     const  check=(turn)=>{
        if (cells[turn]===null){
            const newArray=[...cells]
            newArray[turn]=Num;
            setCells(newArray)
            setCount(count+1);
            console.log(count)
            if (count>4 || count===9){
                //conditions to win the game
                //Check Diagonals Condition 
                if ((cells[0]===0 && cells[4]===0 && cells[8]===0) || (cells[0]===1 && cells[4]===1 && cells[8]===1) ){
                    console.log('entered')
                    if (num===0){
                        setBool(true)
                    }
                    else{
                        setBool(true)
                    }
                }
             

            }
           
            setNum(Num=>Num===0? 1: 0)  

        }
    }
  return (
    <div className='  container d-flex justify-content-center align-items-center my-5'>
        <div className='rounded mx-auto d-block  '>
            <div className='gridWidth'> 
                {['1','2','3','4','5','6','7','8','9'].map((index)=>(
                    <button class="p-4 ms-0 bg-warning rounded-2 my-1 text-black"    onClick={() => check(index-1)}>
                        {cells[index-1]===null? 
                        <h1 className='p-2'></h1>:
                        <div>{cells[index-1]? 
                            <img src='https://cdn-icons-png.flaticon.com/128/1828/1828665.png' key={index} height='30' width='30'/>:
                            <img src='https://cdn-icons-png.flaticon.com/128/1055/1055183.png' key={index} width='30' height='30'/>
                        }</div>}
                     </button>
            ))}</div>   
        </div>
        <h1>{bool?<h1 className='bg-warning'>Player {num} win the match</h1> : <h1>no</h1>}</h1> 
    </div>
  )
}

