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
    //O for pega todas as informações do id do card clicado, assim sendo igual ele joga na variavél da pokédex
    for (let i = 0; i < dataDetails.length; i++) {
      if (dataDetails[i].id === id) {

        //Fazemos uma cópia aqui para adicionar um novo pokémons
        let newPokedex = [...pokedexCart, dataDetails[i]]
        //O set adiciona o novo array com os pokémons atualizados
        setPokedexCart(newPokedex);

      }
    }
  }


  return (
    //Imagem do card do pokémon
    <CardContainer>
      <CardMedia
        component="img"
        height="200"
        src={props.img}
      />
      <AlignText>{props.name}</AlignText>
      <CardFooter>
        {/* //Ele ao ser clicado verifica o id do pokémon */}
        <Button onClick={() => addPokedex(props.id)}>Adicionar a pokedex</Button>
        <Button onClick={() => goDetails(props.id)}>Ver detalhes</Button>
      </CardFooter>
    </CardContainer>
  );
}