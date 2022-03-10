import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { goToDetailsPage } from '../../Router/coordinator';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Global/GlobalStateContext';


const CardAction = styled.div`
 width: 100%;
 height: 100px;


`
const CardContainer = styled.div`
  border: 1px solid #66a3ff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px black;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  
  
  /* margin-bottom: 10px;
  margin-left: 10px; */
`;

const ButtonStyled = styled.div`
flex-direction: column;
  align-items: center;
  justify-content: center;

 

`

const CardMedia = styled.img`
width: 80%;
height: 200px;
`;

const AlignText = styled.h3`
text-align: center;
font-weight: bold;
font-size: 1em;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export default function PokemonCard(props) {

  const {page, dataDetails, setPage, pokedexCart, setPokedexCart, buttonAddRem} = React.useContext(GlobalContext);

  const navigate = useNavigate();

  const goDetails = (id) => {
    
    setPage('Voltar')
    localStorage.setItem('page', 'home');
    goToDetailsPage(navigate, id)

  }

  const addPokedex = (id) => {
       for(let i = 0; i < dataDetails.length; i++){
         if(dataDetails[i].id === id){

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
      <CardAction>
        <Button size="small" variant={"contained"} onClick={() => addPokedex(props.id)}>Adicionar a Pokedex</Button>
        <Button size="small" variant={"contained"} onClick={() => goDetails(props.id)}>Ver detalhes</Button>
      </CardAction>
    </CardContainer>
  );
}