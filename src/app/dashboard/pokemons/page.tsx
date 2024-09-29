import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Listado de Pokemons',
  description: 'Listado de los primeros 150 pokemones',
 };
 

const  getPokemon = async ( limit = 20, offset = 0):Promise<SimplePokemon[]> => {
  const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then( res => res.json());

  const pokemons = data.results.map( pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))

  // throw new Error('Este es un error que no deberia de suceder')

  return pokemons
} 



export default async function PokemonsPage() {

  const pokemons = await getPokemon(151)

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Listado de Pokemons <small className="text-blue-300">estático </small> </span>
      
      <PokemonGrid pokemons={pokemons}/>

    </div>
  );
}