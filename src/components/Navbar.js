import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext"

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext)

  const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

  return (
    <nav>
      <div>
        <img alt="logo-pokeapi" src={logoImg} className="navbar-img">
        </img>
      </div>
      <div className="fav-text">
        Favoritos: {favoritePokemons.length} ❤️
      </div>
      <div className="pokeapi-anchor">
        <a href="https://pokeapi.co/">PokeAPI</a>
      </div>
    </nav>
  )
}

export default Navbar;