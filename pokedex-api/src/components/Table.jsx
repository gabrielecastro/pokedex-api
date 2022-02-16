import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import getPokemonsAPI from '../services/pokemonAPI';

function Table() {
  const { pokemonNames, setPokemonNames } = useContext(AppContext);

  useEffect(() => {
    async function returnDataAPI() {
      const returnAPI = await getPokemonsAPI();
      setPokemonNames(returnAPI);
    }
    returnDataAPI();
  }, [setPokemonNames]);

  return (
    <div>
      <table>
        <tbody>
          { pokemonNames.map((pokemon) => (
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
