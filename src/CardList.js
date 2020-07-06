import React from 'react';
import Card from './Card';

const cardList = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default cardList;