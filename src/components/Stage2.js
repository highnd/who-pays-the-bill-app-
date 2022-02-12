import React from 'react'
import { useContext } from 'react'
import { myContext } from '../context/FileC'
import "./stages.css"

function Stage2() {

     const context = useContext(myContext)
    return (
        <>
           <div className={"resultPage"}>
                 
                 <h3>the looser is :</h3>
                 <div className={'looser'}>{context.state.result}</div>
                  
           </div>
           <div className="container-button">
              
             <button onClick={()=>context.reset()} className="s-button">START OVER</button>
             <button onClick={()=>context.findlooser()} className="re-button">GET NEW LOOSER</button>
           </div>
        </>
    )
}

export default Stage2
