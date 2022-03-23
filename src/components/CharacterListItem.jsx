import React from "react";

const CharacterListItem = ({item}) => {
    return ( 
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={ item.img } alt="Chacracter" />
                </div>
                <div className="card-back">
                    <h1>{ item.name }</h1>
                    <ul>
                        <li>
                            <strong>Actor Name: </strong>{ item.portrayed }
                        </li>
                        <li>
                            <strong>Birthday: </strong>{ item.birthday }
                        </li>
                        <li>
                            <strong>Status: </strong>
                            <span style={ {color: item.status === "Alive" ? "green" : "red"} }>
                                <strong>{ item.status }</strong>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default CharacterListItem;