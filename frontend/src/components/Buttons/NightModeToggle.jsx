import { IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode } from 'redux/slices';
import { MoonToggle, SunToggle } from 'assets/svg';

export function NightModeToggle() {
  const { darkMode } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <IconButton
      onClick={() => dispatch(setDarkMode({ active: !darkMode.active, forced: true }))}
      aria-label="Dark mode toggler"
      color={!darkMode.active ? 'primary' : 'secondary'}
    >
      {!darkMode.active ? <MoonToggle /> : <SunToggle />}
    </IconButton>
  );
}
