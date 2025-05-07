interface NameUrl {
  name: string;
  url: string;
}

interface AbilityDetail {
  ability: NameUrl;
  is_hidden: boolean;
  slot: number;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface GameIndex {
  game_index: number;
  version: NameUrl;
}

interface HeldItemVersionDetail {
  rarity: number;
  version: NameUrl;
}

interface HeldItem {
  item: NameUrl;
  version_details: HeldItemVersionDetail[];
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface VersionGroup {
  name: string;
  url: string;
}

interface MoveVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  order: number | null;
  version_group: VersionGroup;
}

interface MoveDetail {
  move: NameUrl;
  version_group_details: MoveVersionGroupDetail[];
}

interface SpriteOtherDreamWorld {
  front_default: string | null;
  front_female: string | null;
}

interface SpriteOtherHome {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface SpriteOtherOfficialArtwork {
  front_default: string | null;
  front_shiny: string | null;
}

interface SpriteOtherShowdown {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface SpriteOther {
  "dream_world": SpriteOtherDreamWorld;
  "home": SpriteOtherHome;
  "official-artwork": SpriteOtherOfficialArtwork;
  "showdown": SpriteOtherShowdown;
}

interface SpriteVersionGenerationI {
  "red-blue": {
    back_default: string | null;
    back_gray: string | null;
    back_transparent: string | null;
    front_default: string | null;
    front_gray: string | null;
    front_transparent: string | null;
  };
  "yellow": {
    back_default: string | null;
    back_gray: string | null;
    back_transparent: string | null;
    front_default: string | null;
    front_gray: string | null;
    front_transparent: string | null;
  };
}

interface SpriteVersionGenerationII {
  "crystal": {
    back_default: string | null;
    back_shiny: string | null;
    back_shiny_transparent: string | null;
    back_transparent: string | null;
    front_default: string | null;
    front_shiny: string | null;
    front_shiny_transparent: string | null;
    front_transparent: string | null;
  };
  "gold": {
    back_default: string | null;
    back_shiny: string | null;
    front_default: string | null;
    front_shiny: string | null;
    front_transparent: string | null;
  };
  "silver": {
    back_default: string | null;
    back_shiny: string | null;
    front_default: string | null;
    front_shiny: string | null;
    front_transparent: string | null;
  };
}

interface SpriteVersionGenerationIII {
  "emerald": {
    front_default: string | null;
    front_shiny: string | null;
  };
  "firered-leafgreen": {
    back_default: string | null;
    back_shiny: string | null;
    front_default: string | null;
    front_shiny: string | null;
  };
  "ruby-sapphire": {
    back_default: string | null;
    back_shiny: string | null;
    front_default: string | null;
    front_shiny: string | null;
  };
}

interface SpriteVersionGenerationIV {
  "diamond-pearl": {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  "heartgold-soulsilver": {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  "platinum": {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
}

interface SpriteVersionGenerationV {
  "black-white": {
    animated: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
}

interface SpriteVersionGenerationVI {
  "omegaruby-alphasapphire": {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  "x-y": {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
}

interface SpriteVersionGenerationVII {
  icons: {
    front_default: string | null;
    front_female: string | null;
  };
  "ultra-sun-ultra-moon": {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  "sun-moon": {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
}

interface SpriteVersionGenerationVIII {
  icons: {
    front_default: string | null;
    front_female: string | null;
  };
  "sword-shield": {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
}

interface SpriteVersionGenerationIX {
  "scarlet-violet": {
    front_default: string | null;
    front_shiny: string | null;
  };
}

interface SpriteVersions {
  "generation-i": SpriteVersionGenerationI;
  "generation-ii": SpriteVersionGenerationII;
  "generation-iii": SpriteVersionGenerationIII;
  "generation-iv": SpriteVersionGenerationIV;
  "generation-v": SpriteVersionGenerationV;
  "generation-vi": SpriteVersionGenerationVI;
  "generation-vii": SpriteVersionGenerationVII;
  "generation-viii": SpriteVersionGenerationVIII;
  "generation-ix": SpriteVersionGenerationIX;
}

interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: SpriteOther;
  versions: SpriteVersions;
}

interface StatDetail {
  base_stat: number;
  effort: number;
  stat: NameUrl;
}

interface TypeDetail {
  slot: number;
  type: NameUrl;
}

interface PastAbility {
  ability: NameUrl;
  is_hidden: boolean;
  slot: number;
}

interface PastType {
  slot: number;
  type: NameUrl;
}

export interface Pokemon {
  abilities: AbilityDetail[];
  base_experience: number;
  cries: Cries;
  forms: NameUrl[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  image: string;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveDetail[];
  name: string;
  order: number;
  past_abilities: PastAbility[];
  past_types: PastType[];
  species: NameUrl;
  sprites: Sprites;
  stats: StatDetail[];
  types: TypeDetail[];
  weight: number;
}