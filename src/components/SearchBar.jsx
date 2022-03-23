import React, { useState } from "react";
import icon from "../image/icon.png";

const SearchBar = ({setQuery}) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    setQuery(e.target.value);
  }

  return ( 
      <section className="search">
        <form>
        <img className="icon" src={ icon } alt="icon" />
          <input type="text" 
          name="search" 
          id="search"
          autoFocus
          value={ text }
          className="form-control"
          placeholder="Search Characters"
          onChange={ handleChange } />
        </form>
      </section>
   );
}
 
export default SearchBar;