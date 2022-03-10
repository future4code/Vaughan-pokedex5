import { createTheme } from '@mui/system';
import { primaryColor, secondaryColor } from './colors';


export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
});