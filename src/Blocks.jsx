import React from "react";
import Rows from "./Rows";
import {useState} from "react";

function Blocks({value, onClick}){    
  return(
    <>
     <div className="block" value={value} onClick={onClick}>  
        {value}  
      </div>     
    </> 
  )
};

export default Blocks;