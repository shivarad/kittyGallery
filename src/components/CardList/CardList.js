import React from 'react';
import Card from '../Card/Card';



const CardList=({CATS})=>{

    const renderCards=CATS.map(cat=> <Card key={cat.id} id={cat.id} name={cat.username}  />);

    return(
    <div>
        {renderCards}
    </div>

    )
}

export default CardList;