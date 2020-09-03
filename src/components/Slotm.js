import React from 'react';
import './Slotm.css';

const Emoji = (props) =>{
    // let x = "😀";      //we can add emojis on windows10 like (window tab + semicolon(;))
    // let y = "😀";
    // let z = "🎅";
 
    let x= props.x;       //  OR we can write let {x, y, z}=props;
    let y= props.y;
    let z= props.z;

    if((x === y) && (y === z)){
        return(
            <>
            <div className="main">
               <h1>{x} {y} {z}</h1>
               <h1>This is Matching</h1><br/><br/>
               <hr/><br/>
            </div>
            </>
        );
    }
    else{
        return(
            <>
            <div className="main">
               <h1>{x} {y} {z}</h1>
               <h1>This is Not Matching</h1><br/><br/>
               <hr/>
            </div>
            </>);
    }
}

function Slotm() {
    return(
    <div className="section">
        <h1 className="heading">🎰 Welcome to Slot Machin Game 🎰 </h1>

        <div className="content">
        <Emoji x="😍" y="😇" z="♥"/>
        <Emoji x="💖" y="💖" z="💖"/>
        <Emoji x="🥰" y="😗" z="😘"/>
        </div>
    </div>
  
    );
};
export default Slotm;