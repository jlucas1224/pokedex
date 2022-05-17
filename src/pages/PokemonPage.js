import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import { getPokemonData, getPokemons, searchPokemon } from '../api';
import PokeballLoading from "../components/PokeballLoading";
import Pokemon from "../components/Pokemon";

const favoritesKey = "f"
const PokemonPage = () => {
   
    const { id } = useParams();
  
    const [pokemon, setPokemon] = useState("pikachu")
    const [pokemonData, setPokemonData] = useState([])
    const [pokemonType, setPokemonType] = useState("")
   
    const getPokemon = async () => {
        const toArray = []
        try {
           const url = `https://pokeapi.co/api/v2/pokemon/${id}` 
           const res = await axios.get(url)
           toArray.push(res.data)
           setPokemonData(toArray)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return(
        <>
           <div>
           {pokemonData.map((data, index) => {
               return (
                   <div key={index}>
                       <div className="pokemon-page-top">
                            <h1 className="pokemon-page-name">{data.name}</h1>
                            <h1 className="pokemon-page-number">Nº{data.id.toString().padStart(3, '0')}</h1>
                       </div>
                       <div className="pokemon-page-image-container">
                       <img alt={data.name} src={data.sprites.other.dream_world.front_default} className="pokemon-page-image" />
                       </div>
                   </div>
               )
            })}
           </div>
        </>
    )
}

export default PokemonPage