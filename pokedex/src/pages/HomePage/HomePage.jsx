import React, { useContext, useEffect } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import { GridCards } from "./Styled";
import { GlobalContext } from "../../Global/GlobalStateContext";



export default function HomePage() {

    //Aqui são os estados globais que acessamos a partir do useContext
    const {pokedexCart, dataDetails, setCurrentPage, setPage, setButtonOfDetails} = useContext(GlobalContext);

    //Ele está setando o título que aparecerá tanto Header quanto no botão
    useEffect(() =>{
        //Seta a página atual
        setCurrentPage('Lista de Pokémons')
        //Seta o botão do Header
        setPage('Pokedex')
        //Seta o botão de adicionar e remover pokémons
        setButtonOfDetails(false);
    }, [])
    
    //Pega os ids dos pokémons da pokédex e faz uma lista aqui com eles
    let ids = pokedexCart && pokedexCart.map((item) =>{return item.id});

    const renderPokemons = dataDetails && dataDetails.filter((item) => {

                     return !ids.includes(item.id)  //Faz o filtro pra renderizar pokémons que não estão na pokedéx

    }).map((item) => {
           
        return (
            //Card que tem a imagem(sprite) e o nome(name) dos pokémons
            <PokemonCard
               key={crypto.randomUUID()}
               img={item.sprites.other.dream_world.front_default}
               name={item.name}
               id={item.id}
            />
        )

    });

    return (
        
            //Lista dos pokémons renderizados
            <GridCards>
            {renderPokemons}
            </GridCards>
      
    )
}