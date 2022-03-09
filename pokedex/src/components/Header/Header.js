import * as React from 'react';
import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToPokedex } from '../../Router/coordinator';
import { useState } from 'react';


export default function Header({title, buttonFunction}) {
  const [page, setPage] = useState("Pokedex")
 

  const navigate = useNavigate()

  const changeButton = (navigate) => {
    switch(page){
      case "Pokedex":
        setPage("Voltar")
        return goToPokedex(navigate)
      case "Voltar":
        setPage("Pokedex") 
        return goToHomePage(navigate)
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <button onClick={() => changeButton(navigate)}>{page}</button>
          <Typography variant="h6" color="inherit" component="div" sx={{ m: 'auto' }}>
            Lista de Pokémons
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}