import { Key, useState } from "react";



export default function GameBoard({onSelectSquare , board}: any){
    return (
        <div className="flex justify-center mt-6">
        <ol className="space-y-2">
           {board.map((row: any[],rowIndex: Key | null | undefined)=> (
            <li key={rowIndex} >
                <ol className="grid grid-cols-3 gap-2">
                    {row.map((playerSymbol,colIndex) => (
                        <li key={colIndex}>
                            <button onClick={()=>onSelectSquare(rowIndex,colIndex)}  className="w-16 h-16 bg-gray-200 hover:bg-gray-300 rounded text-2xl font-bold flex items-center justify-center" disabled= {playerSymbol!==null}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
           ))} 
        </ol>
        </div>
    )
}