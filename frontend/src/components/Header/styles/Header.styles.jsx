import { Box, AppBar, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import propTypes from 'prop-types';

export function Header({ children }) {
  const theme = useTheme();
  return (
    <Box height="100%" overflow="hidden" width="100%">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.topbar,
        }}
        elevation={0}
      >
        {children}
        <Divider />
      </AppBar>
    </Box>
  );
}

Header.propTypes = {
  children: propTypes.node.isRequired,
};
