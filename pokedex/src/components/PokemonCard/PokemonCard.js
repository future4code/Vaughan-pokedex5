import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


export default function PokemonCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardActions>
        <Button size="small" variant={"contained"}>Adicionar a Pokedex</Button>
        <Button size="small" variant={"contained"}>Ver detalhes</Button>
      </CardActions>
    </Card>
  );
}