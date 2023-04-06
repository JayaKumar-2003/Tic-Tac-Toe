import React, { useState } from 'react';
import './TicTacToe.css';
const TicTacToe = () => {
    const [turn,SetTurn] = useState('x');
    const [cells,Setcells] = useState(Array(9).fill(''));
    const [winner,SetWinner] = useState();
    const checkForWinner = (squares)=>{
        let combos = {
            across :[
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down :[
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagonal:[
                [0,4,8],
                [2,4,6],
            ],
        };
        for( let combo in combos) {
            combos[combo].forEach((pattern)=>{
               if( 
                squares[pattern[0]]===''||
                squares[pattern[1]]===''||
                squares[pattern[2]]===''
               ) {

               }
               else if (squares[pattern[0]]=== squares[pattern[1]] &&
                squares[pattern[1]]=== squares[pattern[2]]
                ) {
                        SetWinner(squares[pattern[0]]);
               }
            });
        }
    }
    const handleClick = (nums) => {
        if(cells[nums] !=='') {
            alert('already clicked');
            return;
        }
        let squares = [...cells];
        if( turn === 'x') {
            squares[nums] = 'x';
            SetTurn('o');
        }
        else {
            squares[nums] = 'o';
            SetTurn('x');
        }
        checkForWinner(squares);
        Setcells(squares);
    };
    const handleRestart =() => {
        SetWinner(null);
        Setcells(Array(9).fill(''));
    };
    const Cell = ({nums}) => {
        return <td onClick={()=> handleClick(nums)}>{cells[nums]}</td>
    };
  return (
    <div className='container'>
        <h3>TIC TAC TOE</h3>
        <table>
            <p className='one'>Turn :{turn}</p>
            <tbody>
                <tr>
                    <Cell nums={0}></Cell>
                    <Cell nums={1}></Cell>
                    <Cell nums={2}></Cell>
                </tr>
                <tr>
                    <Cell nums={3}></Cell>
                    <Cell nums={4}></Cell>
                    <Cell nums={5}></Cell>
                </tr>
                <tr>
                    <Cell nums={6}></Cell>
                    <Cell nums={7}></Cell>
                    <Cell nums={8}></Cell>
                </tr>
            </tbody>
        </table>
        {winner &&
        (
            <>
            <p>{winner} is the winner !</p>
            <button onClick={()=>{handleRestart()}}>Play Again</button>
            </>

        )
        }
    </div>
  )
}

export default TicTacToe