import { Pokemon } from './pokemon.interface';

export interface ApiResponse {
  success: boolean;
  data: Pokemon;
  error?: string | null;
}
