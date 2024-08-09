import React, { useEffect, useState } from 'react'
import './App.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
export default function Game() {
    const location = useLocation();
    const { num, player1, player2 } = location.state || {};
    const [cells, setCells] = useState(Array(9).fill(null));
    const[player1Win,setPlayer1Win]=useState(0)
    const[player2Win,setPlayer2Win]=useState(0)
    let [count, setCount] = useState(1);
    const [bool, setBool] = useState(false);
    const [currentNum, setCurrentNum] = useState(num);
    const [originalNum,setOriginalNum]=useState(num);
    const [turn,setTurnMessage]=useState('')
    const [tie,setTie]=useState(false)
    // 0 For Head(X) And 1 For Tail(O)
    const check = (turn) => {
        if (cells[turn] === null && !bool) {
            const newArray = [...cells];
            newArray[turn] = currentNum;
            setCells(newArray);
            setCount(count + 1);
            checkConditions(newArray, count);
            setCurrentNum(currentNum => currentNum === 0 ? 1 : 0);
        }
    }
    const checkConditions = (updatedCells, current) => {
        if (current >= 4 || current === 9) {
            if ((updatedCells[0] === 0 && updatedCells[4] === 0 && updatedCells[8] === 0) || (updatedCells[0] === 1 && updatedCells[4] === 1 && updatedCells[8] === 1)) {
                if (currentNum===0){
                    setPlayer1Win(player1Win+1)
                }
                else if (currentNum===1){
                    setPlayer2Win(player2Win+1)
                }
                setBool(true);

                return;
            }
            else if ((updatedCells[2] === 0 && updatedCells[4] === 0 && updatedCells[6] === 0) || (updatedCells[2] === 1 && updatedCells[4] === 1 && updatedCells[6] === 1)) {
                if (currentNum===0){
                    setPlayer1Win(player1Win+1)
                }
                else if (currentNum===1){
                    setPlayer2Win(player2Win+1)
                }
                setBool(true);
                return;
            }
            else if ((updatedCells[0] === 0 && updatedCells[1] === 0 && updatedCells[2] === 0) || (updatedCells[0] === 1 && updatedCells[1] === 1 && updatedCells[2] === 1)) {
                if (currentNum===0){
                    setPlayer1Win(player1Win+1)
                }
                else if (currentNum===1){
                    setPlayer2Win(player2Win+1)
                }
                setBool(true);
                return;
            }
            else if ((updatedCells[3] === 0 && updatedCells[4] === 0 && updatedCells[5] === 0) || (updatedCells[3] === 1 && updatedCells[4] === 1 && updatedCells[5] === 1)) {
                if (currentNum===0){
                    setPlayer1Win(player1Win+1)
                }
                else if (currentNum===1){
                    setPlayer2Win(player2Win+1)
                }
                setBool(true);
                return;
            }
            else if ((updatedCells[6] === 0 && updatedCells[7] === 0 && updatedCells[8] === 0) || (updatedCells[6] === 1 && updatedCells[7] === 1 && updatedCells[8] === 1)) {
                if (currentNum===0){
                    setPlayer1Win(player1Win+1)
                }
                else if (currentNum===1){
                    setPlayer2Win(player2Win+1)
                }
                setBool(true);
                return;
            }
            else if ((updatedCells[0] === 0 && updatedCells[3] === 0 && updatedCells[6] === 0) || (updatedCells[0] === 1 && updatedCells[3] === 1 && updatedCells[6] === 1)) {
                if (currentNum===0){
                    setPlayer1Win(player1Win+1)
                }
                else if (currentNum===1){
                    setPlayer2Win(player2Win+1)
                }
                setBool(true);
                return;
            }
            else if ((updatedCells[1] === 0 && updatedCells[4] === 0 && updatedCells[7] === 0) || (updatedCells[1] === 1 && updatedCells[4] === 1 && updatedCells[7] === 1)) {
                if (currentNum===0){
                    setPlayer1Win(player1Win+1)
                }
                else if (currentNum===1){
                    setPlayer2Win(player2Win+1)
                }
                setBool(true);
                return;
            }
            else if ((updatedCells[2] === 0 && updatedCells[5] === 0 && updatedCells[8] === 0) || (updatedCells[2] === 1 && updatedCells[5] === 1 && updatedCells[8] === 1)) {
                if (currentNum===0){
                    setPlayer1Win(player1Win+1)
                }
                else if (currentNum===1){
                    setPlayer2Win(player2Win+1)
                }
                setBool(true);
                return;
            }
        }
    }
    useEffect(() => {
        setTurnMessage(currentNum === 0 ? `${player1}'s Turn!` : `${player2}'s Turn!`);
    }, [currentNum, player1, player2]);
     useEffect(()=>{
        console.log('hello')
            const checkTie=()=>{ 
                if (cells[0]!==null &&
                    cells[1]!==null &&
                    cells[2]!==null &&
                    cells[3]!==null &&
                    cells[4]!==null &&
                    cells[5]!==null &&
                    cells[6]!==null &&
                    cells[7]!==null &&
                    cells[8]!==null && bool===false
                ){
                    setTie(true);   
                }
            }
            checkTie()
        },[cells])
        
        const Reset=()=>{
            setCells(Array(9).fill(null))
            setBool(false)
            setTurnMessage('')
            setCurrentNum(originalNum)
            setTie(false);
        }
        console.log(`original num ${originalNum}`)
        console.log(`player 1 :  ${player1Win}`)
       console.log(`player 2 : ${player2Win}`)
        
    return (
        <div>
            <h1 className='text-center text-info my-5'>{turn? turn: 'Tic Tac Toe '}</h1>
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='text-center'>
                <div className='gridWidth mx-auto'>
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((index) => (
                        <button
                            className="p-4 ms-0 bg-warning rounded-2 my-1 text-black"
                            onClick={() => check(index - 1)}
                            key={index}
                        >
                            {cells[index - 1] === null ?
                                <h1 className='p-2'></h1> :
                                <div>
                                    {cells[index - 1] ?
                                          <img src='https://cdn-icons-png.flaticon.com/128/1055/1055183.png' width='30' height='30' /> :
                                         <img src='https://cdn-icons-png.flaticon.com/128/1828/1828665.png' height='30' width='30' /> 
                                    }
                                </div>
                            }
                        </button>
                    ))}
                </div>
                {bool && (
                    <div className="w-100 text-center my-5">
                        <h1 className='text-warning fs-3'>Congratulations ! {currentNum===1? <h1 className='fs-3'>{player1} Win The Match</h1> : <h1 className='fs-3'>{player2} Win The Match</h1> }</h1>   
                    </div>
                )}
                 {tie && (
                     <div className='text-warning fs-3 my-3'>
                                <h1>Match Tie</h1>
                            </div>
                    )}
            </div>
        </div>
        <button type="button" class="btn btn-outline-warning align-items-center fs-5 px-5 my-3 rounded mx-auto d-block text-decoration-none" onClick={Reset} >Reset</button>
        <Link to='/' className="text-decoration-none" >
         <button type="button" class="btn btn-outline-warning align-items-center fs-5 px-5 rounded mx-auto d-block text-decoration-none" >New Game</button>
     </Link>
    </div>
    );
}
