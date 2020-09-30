import React from 'react';
import 'tachyons'
import './Card.css'



//stateless functional component
const Card=(props)=>{
    return (
        <div className="myDim o-50 br-100 grow  bg-gold baskerville dib ma4 pa4 tc pointer bw2 shadow-5">
           
            <img src={`https://robohash.org/mylkitty${props.id}/set_set4?size=100x100`} alt='kitty'/> 
            <h5>{props.name}</h5>

        </div>
    )
}


export default Card;