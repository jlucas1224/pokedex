import React, {useContext} from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../contexts/favoriteContexts";

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props
    const firstType = pokemon.types.map(typeInfo => typeInfo.type.name)[0]
    const className = "pokemon-card "+firstType
    const onHeartClcik = () =>{
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name)? "💖": "🖤"
    return(
        
        <div className={className}>
            
            <div className="pokemon-image-container">
            <Link to={`pokemon/${pokemon.id}`} style={{ textDecoration: 'none' }}><img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image" />
            </Link>
            </div>
            <div className="card-body">
                <div className="card-top">
                <Link to={`pokemon/${pokemon.id}`} style={{ textDecoration: 'none' }}><h3>{pokemon.name}</h3></Link>
                    <div className="pokemon-number">#{pokemon.id.toString().padStart(3, '0')}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        
                        {pokemon.types.map((type, index) => {
                            return(
                                <div key={index} className="pokemon-type-text" >
                                   {type.type.name}
                                </div>
                            )
                        })}
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClcik} >
                        {heart}
                    </button>
                </div>
            </div> 
       
        </div>
        
    )
}

export default Pokemon