import React from 'react';
import './Scroll.css'

// a component which accept children (wrap a component)
const Scroll=(props)=>{
    return (
        //inline style accept style as js obj
        <div style={{overflow:'scroll',height:'500px'}} className='pa4 wrapper'>  
            {props.children}
        </div>
        
        )
};

export default Scroll;