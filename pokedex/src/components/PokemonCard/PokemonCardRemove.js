import * as React from 'react';
import { goToDetailsPage } from '../../Router/coordinator';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Global/GlobalStateContext';
import { AlignText, Button, CardContainer, CardFooter, CardMedia } from './styled';


export default function PokemonCardRemove(props) {

  const {setPage, pokedexCart, setPokedexCart } = React.useContext(GlobalContext);

  const navigate = useNavigate();

  const goDetails = (id) => {
    
    setPage('Voltar')
    goToDetailsPage(navigate, id)

  }

  const remPokedex = (id) => {

      let newPokedex = pokedexCart.filter((item) => {
          return item.id !== id
      })

      setPokedexCart(newPokedex);

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
        <Button onClick={() => remPokedex(props.id)}>Remover da Pokedex</Button>
        <Button onClick={() => goDetails(props.id)}>Ver detalhes</Button>
      </CardFooter>
    </CardContainer>
  );
}