import { Router } from 'routes';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode } from 'redux/slices';
import { getTheme } from 'themes';
import { checkCurrentTheme } from 'utils';
import { Container } from 'themes/styles';

export function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { darkMode } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (prefersDarkMode && !darkMode.active && !darkMode.forced) {
      dispatch(setDarkMode({ active: true, forced: false }));
    }
  }, []);

  const currentTheme = checkCurrentTheme(darkMode);

  return (
    <ThemeProvider theme={getTheme(currentTheme)}>
      <Container>
        <CssBaseline />
        <Router />
      </Container>
    </ThemeProvider>
  );
}
