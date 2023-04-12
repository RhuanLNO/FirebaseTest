import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Grid} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
  },
});

const navBar:React.FC = () => {
  return(
      <Grid container>
        <AppBar position="static" sx={{bgcolor: '#55286F'}}>
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#E5DCC5' }}>
              RageQuit Membros Teste
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
  )
}

export default navBar;
