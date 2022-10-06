import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { shadows, palette } from './styles';

export const getTheme = (isDarkMode) => responsiveFontSizes(
  createTheme({
    palette: palette(isDarkMode),
    layout: {
      contentWidth: 1236,
    },
    shadows: shadows(isDarkMode),
    typography: {
      fontFamily: '"Inter", sans-serif',
      button: {
        textTransform: 'none',
        fontWeight: 'medium',
      },
    },
    zIndex: {
      appBar: 1200,
      drawer: 1300,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          label: {
            fontWeight: 600,
          },
          containedSecondary: isDarkMode ? {} : { color: 'white' },
        },
      },
    },
  }),
);
