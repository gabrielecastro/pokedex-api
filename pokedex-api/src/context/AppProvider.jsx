import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [inputName, setInputName] = useState('');
  const [pokemonImages, setPokemonImages] = useState('');

  const contextValue = {
    pokemonNames,
    setPokemonNames,
    pokemon,
    setPokemon,
    inputName,
    setInputName,
    pokemonImages,
    setPokemonImages,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;