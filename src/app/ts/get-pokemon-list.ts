import { API_POKEMON_ENDPOINT } from "../constants/enpoints";
import { PokemonIndex } from "../interfaces/pokemon-index.interface";

export const getPokemonList = async (limit: number = 151, offset: number = 0): Promise<PokemonIndex[]> => {
  try {
    const response = await fetch(`${API_POKEMON_ENDPOINT}?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error(`Error fetching Pokemon list: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results.map((pokemon: any, idx: number) => ({
      ...pokemon,
      id: idx + 1 + offset,
      index: (idx + 1 + offset).toString().padStart(3, '0'),
      image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(idx + 1 + offset).toString().padStart(3, '0')}.png`,
    }));
  } catch (error) {
    console.error("Error fetching Pokemon list:", error);
    throw new Error("Failed to fetch Pokemon list");
  }
}