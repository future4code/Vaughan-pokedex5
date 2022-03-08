import React from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import useRequestData from "../../Hooks/useRequestData";
import { BaseURL } from "../../constants/urls";
import { GridCards } from "./Styled";


export default function HomePage() {

    const [data, dataDetails] = useRequestData([], `${BaseURL}pokemon/`);
    


    const renderPokemons = dataDetails && dataDetails.map((item) => {
           
        return (
            <PokemonCard
               img={item.sprites.other.dream_world.front_default}
               name={item.name}
            />
        )

    });

    console.log(data);

    return (
        <div>
            <GridCards>
            {renderPokemons}
            </GridCards>
       </div>
    )
}