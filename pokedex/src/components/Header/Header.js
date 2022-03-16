import * as React from 'react';
import { Box } from '@mui/system';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Global/GlobalStateContext';
import { HeaderButton, HeaderButton2 } from './styled';
import { changeButton, removeAddPokedex } from './requests';

export default function Header() {

//Pegando alguns estados globais para serem usados
  const {page, setPage, currentPage, buttonOfDetails, idDetails, pokedexCart, setPokedexCart, dataDetails} = React.useContext(GlobalContext);

  //O navigate serve para redirecionar as páginas
  const navigate = useNavigate();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <HeaderButton color='inherit' onClick={() => changeButton(navigate, currentPage, setPage)}>{page}</HeaderButton>
          <Typography variant="h6" color="inherit" component="div" sx={{ m: 'auto' }}>
            {currentPage}
          </Typography>
          {/* //Verificando se o buttonOfDetails está true, se sim mostra o botão e se não, não mostra */}
        {buttonOfDetails ? <HeaderButton2 onClick={() => removeAddPokedex(idDetails, navigate, pokedexCart, setPokedexCart, dataDetails)}>Adicionar/Remover da Pokedex</HeaderButton2> : null}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}