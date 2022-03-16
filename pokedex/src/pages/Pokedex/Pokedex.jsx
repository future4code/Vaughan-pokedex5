import React, { useEffect } from "react";
import PokemonCardRemove from "../../components/PokemonCard/PokemonCardRemove";
import { GlobalContext } from "../../Global/GlobalStateContext";
import { GridPokedex } from "./Styled";
import emptyPoke from '../../img/pokeEmpty.png'


export default function Pokedex() {

    const {setPage, pokedexCart,setCurrentPage, setButtonOfDetails} = React.useContext(GlobalContext);

    useEffect(() =>{
        setCurrentPage('Pokedex')
        setPage('Voltar para a lista')
        setButtonOfDetails(false)
    }, [])


      const renderPokedex = pokedexCart && pokedexCart.map((item) => {
          return(
              <PokemonCardRemove
                key={crypto.randomUUID()}
                img={item.sprites.other.dream_world.front_default}
                name={item.name}
                id={item.id}
              />
          )
      });


    return (
        <GridPokedex>
        {renderPokedex.length === 0 ? <p>Sua Pokedex Esta Vazia <img src={emptyPoke}/></p> : renderPokedex}
        </GridPokedex>

    )
}