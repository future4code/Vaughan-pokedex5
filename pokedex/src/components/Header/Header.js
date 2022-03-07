import * as React from 'react';
import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Lista de Pokémons
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}