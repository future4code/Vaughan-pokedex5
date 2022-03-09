import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #66a3ff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px black;
  width: 300px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const CardMedia = styled.img`
width: 100%;
height: 250px;
`;

const AlignText = styled.h3`
text-align: center;
`

export default function PokemonCard(props) {
  return (
    <CardContainer>
      <CardMedia
        component="img"
        height="200"
        src={props.img}
        />
      <AlignText>{props.name}</AlignText>
      <CardActions>
        <Button size="small" variant={"contained"}>Adicionar a Pokedex</Button>
        <Button size="small" variant={"contained"}>Ver detalhes</Button>
      </CardActions>
    </CardContainer>
  );
}