/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  const [pokemonAll, setPokemonAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const api = "https://pokeapi.co/api/v2/pokemon?limit=24";
  const pokemonApi = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      const pokemonArray = data.results;

      const finalPokemonData = pokemonArray.map(async (pokemonArrData) => {
        const pokemonDataFetch = await fetch(pokemonArrData.url);
        const data = await pokemonDataFetch.json();
        return data;
      });
      const finalData = await Promise.all(finalPokemonData);
      setPokemonAll(finalData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    pokemonApi();
  }, []); // Empty dependency array ensures this effect runs only once

  //   search filtered data
  const filteredValue = pokemonAll.filter((currPokemon) => {
    return currPokemon.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log(filteredValue);

  //   loading state show
  if (loading) {
    return (
      <div className="container-[100%] bg-blue-50">
        <div className="container mx-auto flex items-center justify-center h-[100vh]">
          <h1 className="font-bold text-4xl">loading........</h1>
        </div>
      </div>
    );
  }
  //   error state show
  if (error) {
    return (
      <div className="container-[100%] bg-blue-50">
        <div className="container mx-auto flex items-center justify-center h-[100vh]">
          <h1 className="font-bold text-4xl">{error.message}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container-[100%] bg-blue-50 py-6 min-h-[100vh] ">
      <div className="container mx-auto py-4 text-center sm:px-10 px-16">
        <h1 className="text-center font-bold my-5">Catch pokemons</h1>
        <input
          type="text"
          placeholder="Search to catch pokemons...."
          className="px-4 py-2 outline-none bg-white border-b-2 border-gray-600 mt-4 mb-6 max-w-[300px] w-full rounded-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-3">
          {filteredValue.map((pokemon) => {
            return <PokemonCard data={pokemon} key={pokemon.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
