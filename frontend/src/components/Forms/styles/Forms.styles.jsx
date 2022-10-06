import { Box, Grid, Typography } from '@mui/material';
import MUILoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Container } from 'themes/styles';

export const Form = ({ children, ...rest }) => (
  <Box
    position="relative"
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100%"
  >
    <Container maxWidth={600}>
      <form {...rest}>
        {children}
      </form>
    </Container>
  </Box>
);

export const FormTitle = ({ children }) => (
  <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
    {children}
  </Typography>
);

export const FormContainer = ({ children }) => (
  <Grid container spacing={4}>
    {children}
  </Grid>
);

export const Input = ({ children }) => (
  <Grid item xs={12}>
    {children}
  </Grid>
);

export const LoadingButton = ({ children, ...rest }) => (
  <Grid item xs={12}>
    <Box display="flex" justifyContent="center">
      <MUILoadingButton
        size="large"
        endIcon={<SendIcon />}
        loadingPosition="end"
        variant="contained"
        {...rest}
      >
        {children}
      </MUILoadingButton>
    </Box>
  </Grid>
);

export const LabelText = ({ children }) => (
  <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
    {children}
  </Typography>
);
