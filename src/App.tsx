import { useState } from 'react';
import tictoe from './assets/tictoe.png';
import GameBoard from './components/GameBoard';
import { Player } from './components/Player';
import Log from './components/Log';
import { WINNING_COMBINATION } from './winning_coombination';
import GameOver from './components/Gameover';

const initialGameBoard : any= [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];
function deriveActivePlayer(gameTurns: any){
 
  let currentPlayer= 'X';

  if(gameTurns.length > 0 && gameTurns[0].player ==='X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [players , setPlayers]:any =useState({
    'X':'Player 1',
    'O':'Player 2'
  });
 const [gameTurns , setGameTurns]=useState<any[]>([]);
 let currentPlayer = deriveActivePlayer(gameTurns);
 let gameBoard = [...initialGameBoard.map((arr: any) => [...arr])];
 for (const turn of gameTurns){
     const {square , player} = turn;
     const {row , col}= square; 
 
     gameBoard[row][col]=player;
 }
 let winner=null;
 for(const combination of WINNING_COMBINATION){
  const firstSquareSymbol=gameBoard[combination[0].row][combination[0].col];
  const secondSquareSymbol=gameBoard[combination[1].row][combination[1].col];
  const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].col];

  if(firstSquareSymbol && firstSquareSymbol=== secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
    winner= players[firstSquareSymbol];
  }
 }

 const hasDraw = gameTurns.length ===9 && !winner;
 function handleOnSelectSquare(rowIndex: any,colIndex: any){
  setGameTurns((prevTurns) => {
   const currentPlayer = deriveActivePlayer(prevTurns);
    const updatedTurns = [
      {square: {row : rowIndex, col: colIndex}, player: currentPlayer }, ...prevTurns,];

    return updatedTurns;
  });
 }

 function handleRematch(){
  setGameTurns([]);
 }

 function handlePlayerNameChange(symbol: any , newName: any){
  setPlayers((prevPlayers: any) => {
    return {
      ...prevPlayers,
      [symbol]: newName
    }; 
  })
 }
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-600">
        Tic Tac Toe
      </h1>
      <img
        src={tictoe}
        alt="Tic Tac Toe"
        className="w-32 h-32 object-contain"
      />
      <main className='bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mx-auto mt-10'>
        <div className='flex justify-center'>
          <ol className="flex space-x-8 text-lg font-semibold text-gray-800">
            <Player name="Player 1" symbol="X" isPlayerActive = {currentPlayer==='X'} onChangeName={handlePlayerNameChange}></Player>
            <Player name= "Player 2" symbol="O" isPlayerActive ={
              currentPlayer==='O'} onChangeName = {handlePlayerNameChange}></Player>
          </ol>
        </div>
        <div className="relative mt-6">
  {(winner || hasDraw) && (
    <div className="absolute inset-0 flex items-center justify-center z-10 rounded-lg">
      <GameOver winner={winner} onRestart={handleRematch} />
    </div>
  )}
  <GameBoard onSelectSquare={handleOnSelectSquare} board={gameBoard} />
</div>

        <Log turns ={gameTurns}></Log> 
      </main>
    </div>
  )
}

export default App
