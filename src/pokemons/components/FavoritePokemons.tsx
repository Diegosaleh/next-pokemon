'use client'

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid"
import { useState, useEffect } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { selectFavoritePokemons } from "@/store/pokemons/pokemonsSelector";
 // Importa el selector memoizado

export const FavoritePokemons = () => {
    // Usa el selector memoizado
    const favoritePokemons = useAppSelector(selectFavoritePokemons);
    const [pokemons, setPokemons] = useState(favoritePokemons);
    
    // Actualiza los pokemons favoritos cada vez que cambien
    useEffect(() => {
        setPokemons(favoritePokemons);
    }, [favoritePokemons]);

    return (
        <>
        {
         pokemons.length === 0
          ?  (<NoFavorites /> )
          :  <PokemonGrid  pokemons={pokemons}  />  
        }
        </>
    );
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"/>
      <span className="text-2xl">No hay favoritos</span>
    </div>
  );
}
