import {
  Box, Grid, Typography, TextField as MUITextField, Link as MUILink,
} from '@mui/material';
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

export const FormSubtitle = ({ children }) => (
  <Typography variant="h6" component="h2" textAlign="center" gutterBottom>
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

export const InputGrid = ({ children }) => (
  <Grid item xs={12} md={6}>
    {children}
  </Grid>
);

export const LabelText = ({ children }) => (
  <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
    {children}
  </Typography>
);

export const TextField = ({ children, ...rest }) => (
  <MUITextField
    variant="outlined"
    fullWidth
    {...rest}
  >
    {children}
  </MUITextField>
);

export const SignUp = ({ children }) => (
  <Grid item container xs={12}>
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems={{ xs: 'stretched', sm: 'center' }}
      justifyContent="space-between"
      width="100%"
      maxWidth={600}
      margin="0 auto"
    >
      {children}
    </Box>
  </Grid>
);

export const Agreement = ({ children }) => (
  <Box marginBottom={{ xs: 1, sm: 0 }}>
    <Typography variant="subtitle2">
      {children}
    </Typography>
  </Box>
);

export const Link = ({ children, ...rest }) => (
  <MUILink
    color="primary"
    underline="none"
    {...rest}
  >
    {children}
  </MUILink>
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
