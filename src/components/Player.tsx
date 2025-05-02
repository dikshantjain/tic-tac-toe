import { useState } from "react";
export function Player({name,symbol}:any){
    const [isEditing , setIsEditing]= useState(false);

    function handleEditClick(){
        setIsEditing(true);
    }

    let playerName = <span>{name}</span>;

    if(isEditing){
        playerName=(
        <input
        type="text"
        required
        className="w-24 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
        );
    }
    return(
        <li className="flex items-center space-x-2">
              <span className='inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg shadow text-gray-800 font-medium'>
                {playerName}
              <span>{symbol}</span>
              </span> 
              <button onClick={handleEditClick}>Edit</button>
            </li>
    )
}