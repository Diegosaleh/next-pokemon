import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

/*
    {
        '1': { id: 1, name: 'bulbasaur' },
        '2': { id: 2, name: 'ivysaur' },
        '3': { id: 3, name: 'venusaur ' },

    } 

*/

interface PokemonState {
    favorites: {[key: string]: SimplePokemon},
}

// const getInitialState = (): PokemonState => {

    // if( typeof localStorage === 'undefined' ) return {};
    // const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
    // return favorites;
// }

const initialState: PokemonState = {
    favorites: {},
    // ...getInitialState(),
    // '1': { id: '1', name: 'bulbasaur' },
    // '3': { id: '3', name: 'venusaur' },
}

const Slice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons( state, action: PayloadAction<{ [key: string]: SimplePokemon}> ) {
        state.favorites = action.payload
    },

    toggleFavorite( state, action: PayloadAction<SimplePokemon> ) {
        const pokemon = action.payload;
        const { id } = pokemon;

        if ( !!state.favorites[id] ) {
            delete state.favorites[id];
            // return;
        } else {
            state.favorites[id] = pokemon;
        }

        localStorage.setItem( 'favorite-pokemons', JSON.stringify( state.favorites ) );
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = Slice.actions;

export default Slice.reducer;