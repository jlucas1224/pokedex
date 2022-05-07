import React, {useContext} from "react"
import FavoriteContext from "../contexts/favoriteContexts"

const NavBar = () => {
    const {favoritePokemons} = useContext(FavoriteContext)
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <img 
                alt="pokeapi-logo"
                src={logoImg}
                className="navbar-img"> 
                </img>
            </div>
            {/* 
            =====================FAVORITES POKEMON=========================
            <div>{favoritePokemons.length}💖</div> 
            */} 
        </nav>
    )
}

export default NavBar