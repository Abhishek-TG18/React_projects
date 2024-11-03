import { useEffect, useState } from "react";
import axios from "axios";
import "./PokemonList.css";
import Pokemon from "../pokemon/pokemon";

function PokemonList() {
    const [isloading, setLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);
    const[ pokedex_URL,setURL] =useState( "https://pokeapi.co/api/v2/pokemon");


    const [nextUrl , setNxetUrl] = useState('');
    const [prevtUrl , setprevUrl] = useState('');
    async function downloadPokemon() {
        setLoading(true)
        try {
            const response = await axios.get(pokedex_URL);
            const pokemonres = response.data.results;
            setNxetUrl(response.data.next)
            setprevUrl(response.data.previous)

            // Get detailed data for each Pokemon in parallel
            const pokemonResultPromise = pokemonres.map((pookie) => axios.get(pookie.url));
            const pokemonData = await Promise.all(pokemonResultPromise);
            console.log(pokemonData);

            // Extract and set data to the state
            const res = pokemonData.map((res) => {
                const pokemon = res.data

                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                    types: pokemon.types

                }

            }
            );
            console.log(res);
            setPokemonList(res);
            setLoading(false);
        } catch (error) {
            console.error("Error downloading Pokemon data:", error);
        }
    }

    useEffect(() => {
        downloadPokemon();

    }, [pokedex_URL]);

    return (
        <div className="pokemonList-wrapper">
            <h1>Pokemon List</h1>
            <div className="pokemon-wrapper">
                {isloading ? "Loading......." : pokemonList.map((pokemon) => (
                    <Pokemon name={pokemon.name} image={pokemon.image} key={pokemon.id} />
                ))}
            </div>
            <div className="controls">
                <button disabled={prevtUrl == null} onClick={()=> setURL(prevtUrl)} > Prev</button>
                <button disabled={nextUrl == null} onClick={()=> setURL(nextUrl)}> Next</button>
            </div>

        </div>
    );
}

export default PokemonList;
