const getPokemonsAPI = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
  const responseJson = await response.json();
  return responseJson.results;
};

export default getPokemonsAPI;
