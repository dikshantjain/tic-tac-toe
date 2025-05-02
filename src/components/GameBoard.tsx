import { Key, useState } from "react";

const initialGameBoard : any= [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

export default function GameBoard({onSelectSquare,activePlayerSymbol}:any){
const [gameBoard, setGameBoard] = useState(initialGameBoard);

function handleSelectSquare(rowIndex: any,colIndex: any){
    setGameBoard((prevGameBoard: any[])=> {
        const updatedBoard = [...prevGameBoard.map((innerArray: any) => [...innerArray])];
        updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
        return updatedBoard;

    })

    onSelectSquare();
}
    return (
        <div className="flex justify-center mt-6">
        <ol className="space-y-2">
           {gameBoard.map((row: any[],rowIndex: Key | null | undefined)=> (
            <li key={rowIndex} >
                <ol className="grid grid-cols-3 gap-2">
                    {row.map((playerSymbol,colIndex) => (
                        <li key={colIndex}>
                            <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}  className="w-16 h-16 bg-gray-200 hover:bg-gray-300 rounded text-2xl font-bold flex items-center justify-center">{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
           ))} 
        </ol>
        </div>
    )
}