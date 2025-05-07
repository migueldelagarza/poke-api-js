import { API_POKEMON_SPECIES_ENDPOINT} from "../constants/enpoints";
import { PokemonSpecie } from "../interfaces/pokemon-specie.interface";

export const getPokemonSpecie = async (id: number | string): Promise<PokemonSpecie> => {
  try {
    const pokemon = await fetchSpecie(id);
    return pokemon;
  } catch (error) {
    console.error(`Error fetching specie with id ${id}:`, error);
    throw new Error(`Failed to fetch specie with id ${id}`);
  }
};

async function fetchSpecie(id: number | string): Promise<PokemonSpecie> {
  const response = await fetch(`${API_POKEMON_SPECIES_ENDPOINT}${id}`);
  if (!response.ok) {
    throw new Error(`Error fetching specie with id ${id}: ${response.statusText}`);
  }
  const data = await response.json() as PokemonSpecie;
  return data;
}