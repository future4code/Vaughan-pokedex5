import * as React from 'react';
import { Box } from '@mui/system';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToPokedex } from '../../Router/coordinator';
import { GlobalContext } from '../../Global/GlobalStateContext';
import { Button } from '@mui/material';
import { HeaderButton } from './styled';

export default function Header() {


  const {page, setPage, currentPage} = React.useContext(GlobalContext);
  
  // const { globalData } = React.useContext(GlobalContext);


  const navigate = useNavigate()

  const changeButton = () => {
    if(currentPage === "Lista de Pokémons"){
      setPage("Pokedex")
      goToPokedex(navigate)
    }
    else if(currentPage === "Pokedex"){
      setPage("Voltar para a lista")
      goToHomePage(navigate)
    }
    else if(currentPage === "Detalhes"){
      navigate(-1)
    }    
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <HeaderButton color='inherit' onClick={() => changeButton()}>{page}</HeaderButton>
          <Typography variant="h6" color="inherit" component="div" sx={{ m: 'auto' }}>
            {currentPage}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}