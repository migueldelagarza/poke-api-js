import { API_POKEMON_ENDPOINT } from "../constants/enpoints";
import { Pokemon } from "../interfaces/pokemon.interface";
import { ApiResponse } from "../interfaces/api-response.interface";
import UNDISCOVERED from "../constants/undiscoveredPokemon";

export const getPokemon = async (id: number | string): Promise<ApiResponse> => {
  if (typeof id !== 'number' && typeof id !== 'string') {
    throw new Error('Invalid id type. Expected number or string.');
  }
  try {
    const pokemon = await fetchPokemon(id);
    const data = {
      ...pokemon,
      image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id.toString().padStart(3, '0')}.png`
    };
    return { success: true, data, error: null };
  } catch (error) {
    console.error(`Error fetching Pokemon with id ${id}:`, error);
    return { success: false, data: UNDISCOVERED, error: error as Error };
  }
};

async function fetchPokemon(id: number | string): Promise<Pokemon> {
  const response = await fetch(`${API_POKEMON_ENDPOINT}${id}`);
  if (!response.ok) {
    throw new Error(`Error fetching Pokemon with id ${id}: ${response.statusText}`);
  }
  const data = await response.json() as Pokemon;
  return data;
}