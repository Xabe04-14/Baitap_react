import React,{useState} from "react";

 export default function ViduSetstate(){
    const[state,setState]=useState(0);
    return(
        <div>
            <h1>Current value: {state} </h1>
          <button onClick={()=>setState(state+1)}>+</button>
          <button onClick={()=>setState(state-1)}>-</button>

        </div>
    )
}
