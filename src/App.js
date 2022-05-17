import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar.js';
import Searchbar from './components/Searchbar';
import Pokedex from './components/pokedex';
import { getPokemonData, getPokemons, searchPokemon } from './api';
import { FavoriteProvider } from './contexts/favoriteContexts';
import PokemonPage from './pages/PokemonPage';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';

const favoritesKey = "f"
function App() {
  return (
     <Router>
       <Routes>
          <Route path='/pokedex' exact strict element={
          <HomePage></HomePage>}
          />
          <Route path='/pokedex/pokemon/:id' exact strict element={
          <PokemonPage></PokemonPage>}
          />
       </Routes>
     </Router>
  );
}

export default App;
