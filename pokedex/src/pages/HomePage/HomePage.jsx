import React, { useContext } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GridCards } from "./Styled";
import { GlobalContext } from "../../Global/GlobalStateContext";
import useRequestData from "../../Hooks/useRequestData";
import { BaseURL } from "../../constants/urls";


export default function HomePage() {

    const [data, dataDetails] = useRequestData([], `${BaseURL}pokemon/`);
    
    const renderPokemons = dataDetails && dataDetails.map((item) => {
           
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
        <div>
            <GridCards>
            {renderPokemons}
            </GridCards>
       </div>
    )
}