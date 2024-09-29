import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { SimplePokemon } from '@/pokemons';

// Este selector obtiene el estado de los pokemones
const selectPokemonsState = (state: RootState) => state.pokemons;

// Este selector memoiza los valores del estado de pokemones
export const selectFavoritePokemons = createSelector(
  [selectPokemonsState],
  (pokemonsState: { favorites: {[key: string] : SimplePokemon }}) => {
    // Devuelve un array con los pokemones favoritos
    return Object.values(pokemonsState.favorites);
  }
);