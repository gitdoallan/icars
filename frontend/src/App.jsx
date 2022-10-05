import { Router } from 'routes';
import { useEffect } from 'react';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode } from 'redux/slices';
import * as S from 'themes/styles/';

export function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { darkMode } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (prefersDarkMode && !darkMode.active && !darkMode.forced) {
      dispatch(setDarkMode({ active: true, forced: false }));
    }
  }, []);

  return (
    <S.Container>
      <CssBaseline />
      <Router />
    </S.Container>
  );
}
