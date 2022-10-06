import { Box, AppBar, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import propTypes from 'prop-types';
import { MainContainer } from 'themes/styles';

export const Header = ({ children }) => {
  const theme = useTheme();
  return (
    <Box height="100%" overflow="hidden" width="100%">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.topbar,
        }}
        elevation={1}
      >
        {children}
        <Divider />
      </AppBar>
    </Box>
  );
};

export const TopBarContainer = ({ children }) => (
  <MainContainer paddingY={{ xs: 1 / 2, sm: 1 }} maxWidth={{ md: '1100px' }}>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      {children}
    </Box>
  </MainContainer>
);

export const RightMenu = ({ children }) => (
  <Box display="flex" alignItems="center">
    {children}
  </Box>
);

export const SwitchThemeButton = ({ children }) => (
  <Box marginRight="1rem">
    { children }
  </Box>
);

TopBarContainer.propTypes = {
  children: propTypes.node.isRequired,
};

RightMenu.propTypes = {
  children: propTypes.node.isRequired,
};

SwitchThemeButton.propTypes = {
  children: propTypes.node.isRequired,
};

Header.propTypes = {
  children: propTypes.node.isRequired,
};
