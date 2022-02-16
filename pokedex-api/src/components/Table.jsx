import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import getPokemonsAPI from '../services/pokemonAPI';
import FilterName from './FilterName';
import Header from './Header';

function Table() {
  const { setPokemonNames } = useContext(AppContext);
  const { pokemon, setPokemon } = useContext(AppContext);

  useEffect(() => {
    async function returnDataAPI() {
      const returnAPI = await getPokemonsAPI();
      setPokemonNames(returnAPI);
      setPokemon(returnAPI)
    }
    returnDataAPI();
  }, [setPokemonNames, setPokemon]);

  return (
    <div className="container-table">
      <Header />
      <table className="table-pokedex">
        <tbody>
          { pokemon.map((pokemon) => (
            <tr key={pokemon.name}>
              <td>{pokemon.name}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );

}

export default Table;
