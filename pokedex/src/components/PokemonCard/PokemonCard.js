import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


export default function PokemonCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={props.img}
        name={props.name}
        typography
      />
      <h3>{props.name}</h3>
      <CardActions>
        <Button size="small" variant={"contained"}>Adicionar a Pokedex</Button>
        <Button size="small" variant={"contained"}>Ver detalhes</Button>
      </CardActions>
    </Card>
  );
}