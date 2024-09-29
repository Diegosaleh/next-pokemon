
import { FavoritePokemons } from "@/pokemons";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Favoritos',
  description: 'Listado de los primeros 150 pokemones',
 };


export default function PokemonsPage() {


  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokemons Favoritos <small className="text-blue-300">Global State </small> </span>
      
      <FavoritePokemons />

    </div>
  );
}

