import { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import getPokemonsAPI from '../services/pokemonAPI';
import getPokemonsImagesAPI from '../services/pokemonImagesAPI';
import Header from './Header';

function Table() {
  const { setPokemonNames } = useContext(AppContext);
  const { pokemon, setPokemon } = useContext(AppContext);
  const { pokemonImages, setPokemonImages } = useContext(AppContext);

  useEffect(() => {
    async function returnDataAPI() {
      const returnAPI = await getPokemonsAPI();
      setPokemonNames(returnAPI);
      setPokemon(returnAPI)
    }
    returnDataAPI();
  }, [setPokemonNames, setPokemon]);

  async function renderDetails(indice) {
    const returnAPI = await getPokemonsImagesAPI(indice)
    setPokemonImages(returnAPI);
  }

  return (

    <div className="container-table">
      <Header />
      <table className="table-pokedex">
        <tbody>
          {pokemon.map((pokemon, indice) => (
            <tr key={pokemon.name}>
              <td onClick={() => renderDetails(indice + 1)}>{pokemon.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      { pokemonImages ? (
        <div className="container-image">
          <img src={pokemonImages} alt="Imagem do Pokemon" />
        </div>
      )
    : <div></div>
    }
    </div>
  );
}

export default Table;
