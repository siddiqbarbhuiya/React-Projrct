import NavBar from "./components/NavBar";
import CharacterList from "./components/CharacterList";
import SearchBar from "./components/SearchBar";
import { useEffect, useState } from "react";
import axios from "./components/api";
import Spinner from "./components/Spinner";


const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");


  useEffect(() => {
    const fetchItems = async () =>{
      const results = await axios.get(`/characters?name=${query}`);
      setItems(results.data);
      setLoading(false);
      console.log(results);
    };
    fetchItems()
  },[query]);
  return ( 
    <div className="app">
      <NavBar />
      <SearchBar setQuery= {(query) => setQuery(query) } />
      { loading ? <Spinner /> : <CharacterList items={ items } />}
    </div>
   );
}
 
export default App;
