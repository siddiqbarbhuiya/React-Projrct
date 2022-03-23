import React from "react";
import CharacterListItem from "./CharacterListItem";

const CharacterList = ({ items }) => {
    return ( 
        <section className="cards">
            {
                items.map((item) =><CharacterListItem item={ item } key={ item.char_id } /> )
            }
        </section>
     );
}
 
export default CharacterList;