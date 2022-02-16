import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function FilterName() {
  const { pokemonNames } = useContext(AppContext);
  const { inputName, setInputName } = useContext(AppContext);
  const { setPokemon } = useContext(AppContext);

  function filterName(name) {
    const pokemonFilter = pokemonNames.filter((pokemon) => pokemon.name.includes(name));
    setPokemon(pokemonFilter);
  }

  function handleChange({ target: { value } }) {
    setInputName(value);
    filterName(value);
  }

  return (
    <div className="container-filter-name">
      <input
        className="input-filter-name"
        type="text"
        placeholder="Nome"
        onChange={ handleChange }
        value={ inputName }
      >
      </input>
    </div>
  );
}

export default FilterName;
