import propTypes from 'prop-types';
import { Box } from '@mui/material';
import { Container } from 'themes/components';

export function TopBarContainer({ children }) {
  return (
    <Container paddingY={{ xs: 1 / 2, sm: 1 }} maxWidth={{ md: '1100px' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        {children}
      </Box>
    </Container>
  );
}

export function RightMenu({ children }) {
  return (
    <Box display="flex" alignItems="center">
      {children}
    </Box>
  );
}

export function SwitchThemeButton({ children }) {
  return (
    <Box marginRight="1rem">
      { children }
    </Box>
  );
}

TopBarContainer.propTypes = {
  children: propTypes.node.isRequired,
};

RightMenu.propTypes = {
  children: propTypes.node.isRequired,
};

SwitchThemeButton.propTypes = {
  children: propTypes.node.isRequired,
};
