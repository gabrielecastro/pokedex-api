const getPokemonsImagesAPI = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`);
  const responseJson = await response.json();
  return responseJson.sprites.front_default;
};

export default getPokemonsImagesAPI;
