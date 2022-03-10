import React, { useContext, useEffect } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GridCards } from "./Styled";
import { GlobalContext } from "../../Global/GlobalStateContext";



export default function HomePage() {

    const {pokedexCart, dataDetails, currentPage, setCurrentPage, setPage} = useContext(GlobalContext);

    useEffect(() =>{
        setCurrentPage('Lista de Pokémons')
        setPage('Pokedex')

    }, [])
    

    let ids = pokedexCart && pokedexCart.map((item) =>{return item.id});

    const renderPokemons = dataDetails && dataDetails.filter((item) => {

                     return !ids.includes(item.id)

    }).map((item) => {
           
        return (
            <PokemonCard
               key={crypto.randomUUID()}
               img={item.sprites.other.dream_world.front_default}
               name={item.name}
               id={item.id}
            />
        )

    });

    return (
        
            <GridCards>
            {renderPokemons}
            </GridCards>
      
    )
}