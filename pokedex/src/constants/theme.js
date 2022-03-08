import { createTheme } from '@mui/system';
import { primaryColor } from './colors';


export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: primaryColor
    },
  },
});