import { useState } from "react";
export function Player({name,symbol,isPlayerActive}:any){
    
    const [isEditing , setIsEditing]= useState(false);
    const [playerName,setPlayerName]= useState(name);

    function handleEditClick(){
        setIsEditing((editing: any) => !editing );
    }
    function handleOnChange(event:any){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span>{playerName}</span>;

    if(isEditing){
        editablePlayerName=(
        <input
        type="text"
        required 
        value ={playerName}
        onChange={handleOnChange}
        className="w-24 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
        );
    }

    const highlightStyle = isPlayerActive
    ? "bg-yellow-200 ring-2 ring-yellow-400"
    : "bg-gray-100";
    
    return(
        <li className="flex items-center space-x-2">
              <span className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg shadow text-gray-800 font-medium transition-all duration-300 ${highlightStyle}`}>
                {editablePlayerName}
              <span>{symbol}</span>
              </span> 
              <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </li>
    )
}