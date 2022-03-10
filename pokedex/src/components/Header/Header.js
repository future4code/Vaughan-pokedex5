import * as React from 'react';
import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToPokedex } from '../../Router/coordinator';
import { GlobalContext } from '../../Global/GlobalStateContext';


export default function Header() {


  const {page, setPage} = React.useContext(GlobalContext);
  
  // const { globalData } = React.useContext(GlobalContext);


  const navigate = useNavigate()

  const changeButton = () => {

    switch(page){
      case "Pokedex":
        setPage("Voltar Para a Lista")
        return goToPokedex(navigate)
      case "Voltar Para a Lista":
        setPage("Pokedex") 
        return goToHomePage(navigate)
      case 'Voltar':
        if(localStorage.getItem('page') === 'home'){
          setPage('Pokedex')
          return navigate(-1)
        }    
        setPage('Voltar Para a Lista')
        return navigate(-1)
    }

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <button onClick={() => changeButton()}>{page}</button>
          <Typography variant="h6" color="inherit" component="div" sx={{ m: 'auto' }}>
            Lista de Pokémons
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}