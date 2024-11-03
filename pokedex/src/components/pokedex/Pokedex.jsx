import PokemonList from "../PokemonList/PokemonList";
import Search from "../search/search";
import './pokedex.css'
function Pokedex(){

    return (
        <div className="pokedex-wrapper">
           <h1 id="headding"> Pokedex</h1>
            <Search />
            <PokemonList />
        </div>
    );
}

export default Pokedex;