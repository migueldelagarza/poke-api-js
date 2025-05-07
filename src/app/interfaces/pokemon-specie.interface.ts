interface NameUrl {
  name: string;
  url: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: NameUrl;
  version: NameUrl;
}

interface FormDescription {
  description: string;
  language: NameUrl;
}

interface PalParkEncounter {
  [key: string]: any;
}

interface PokedexNumber {
  entry_number: number;
  pokedex: NameUrl;
}

interface Variety {
  is_default: boolean;
  pokemon: NameUrl;
}

export interface PokemonSpecie {
  base_happiness: number;
  capture_rate: number;
  color: NameUrl;
  egg_groups: NameUrl[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: NameUrl | null;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: FormDescription[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: NameUrl;
  }[];
  generation: NameUrl;
  growth_rate: NameUrl;
  habitat: string | null;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    language: NameUrl;
    name: string;
  }[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: NameUrl;
  varieties: Variety[];
}