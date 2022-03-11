import * as React from 'react';
import { goToDetailsPage } from '../../Router/coordinator';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Global/GlobalStateContext';
import { AlignText, Button, CardContainer, CardFooter, CardMedia } from './styled';


export default function PokemonCard(props) {

  const {dataDetails, setPage, pokedexCart, setPokedexCart} = React.useContext(GlobalContext);

  const navigate = useNavigate();

  const goDetails = (id) => {

    setPage('Voltar')
    goToDetailsPage(navigate, id) 

  }

  const addPokedex = (id) => {
    for (let i = 0; i < dataDetails.length; i++) {
      if (dataDetails[i].id === id) {

        let newPokedex = [...pokedexCart, dataDetails[i]]

        setPokedexCart(newPokedex);

      }
    }
  }


  return (
    <CardContainer>
      <CardMedia
        component="img"
        height="200"
        src={props.img}
      />
      <AlignText>{props.name}</AlignText>
      <CardFooter>
        <Button onClick={() => addPokedex(props.id)}>Adicionar a pokedex</Button>
        <Button onClick={() => goDetails(props.id)}>Ver detalhes</Button>
      </CardFooter>
    </CardContainer>
  );
}