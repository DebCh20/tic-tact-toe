import React from "react";
import Blocks from "./Blocks.jsx";
import {useState} from "react";

function Rows(){
  const [state, setState] = useState(Array(9).fill(null));
  const [blockFill, setBlockFill]= useState('X');
  function changeBlockState(index){
    if (state[index] === null) {
      const newState = [...state]; // Create a copy of the state array
      newState[index] = blockFill; // Update the value at the specified index
      setState(newState); // Update the state with the new array
      setBlockFill(blockFill === 'X' ? 'O' : 'X'); // Switch the blockFill value
    }
    console.log('clicked', index)
  }
  return(
    <>
     <div className="rows">
       <Blocks value={state[0]} onClick={()=>changeBlockState(0)}/>
       <Blocks value={state[1]} onClick={()=>changeBlockState(1)}/>
       <Blocks value={state[2]} onClick={()=>changeBlockState(2)}/>
     </div>
     <div className="rows">
       <Blocks value={state[3]} onClick={()=>changeBlockState(3)}/>
       <Blocks value={state[4]} onClick={()=>changeBlockState(4)}/>
       <Blocks value={state[5]} onClick={()=>changeBlockState(5)}/>
     </div>
     <div className="rows">
       <Blocks value={state[6]} onClick={()=>changeBlockState(6)}/>
       <Blocks value={state[7]} onClick={()=>changeBlockState(7)}/>
       <Blocks value={state[8]} onClick={()=>changeBlockState(8)}/>
     </div>
    </> 
  )
};

export default Rows;