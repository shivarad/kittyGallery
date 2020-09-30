import React from 'react';
import 'tachyons'
import './Searchbox.css';


const Searchbox=(props)=>{
    return(
        <div >
            <input type='search' placeholder='search...'
            className='pa2 ma1 ba  bg-light-yellow b-gold ' onChange={props.searchChange}/>
        </div>
    );
}

export default Searchbox;