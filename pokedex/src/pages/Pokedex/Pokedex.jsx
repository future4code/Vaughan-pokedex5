import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PokemonCardRemove from "../../components/PokemonCard/PokemonCardRemove";
import { GlobalContext } from "../../Global/GlobalStateContext";
import { goToDetailsPage } from "../../Router/coordinator";
import { GridPokedex } from "./Styled";


export default function Pokedex() {

    const {page, setPage, pokedexCart, currentPage,setCurrentPage} = React.useContext(GlobalContext);

    const navigate = useNavigate();

    useEffect(() =>{
        setCurrentPage('Pokedex')

    }, [])

    const goDetails = () => {
    
        setPage('Voltar')
        localStorage.setItem('page', 'pokedex');
        goToDetailsPage(navigate)
    
      }


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
        <h1>Pokedex</h1>
        {renderPokedex.length === 0 ? <h1>Sua Pokedex Esta Vazia</h1> : renderPokedex}
        </GridPokedex>

    )
}