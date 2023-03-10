import {
  Box, Grid, Typography, TextField as MUITextField, Link as MUILink, Select as MUISelect,
} from '@mui/material';
import MUILoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Container } from 'themes/styles';
import { useTheme } from '@mui/material/styles';

export const Form = ({ children, ...rest }) => {
  const theme = useTheme();
  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
      alignSelf="center"
      marginTop={4}
    >
      <Container
        maxWidth={600}
        bgcolor={theme.palette.background.paper}
        boxShadow={theme.shadows[3]}
        borderRadius={theme.shape.borderRadius}
        sx={{
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          filter: 'opacity(0.85)',
        }}
      >
        <form {...rest}>
          {children}
        </form>
      </Container>
    </Box>
  );
};

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

export const UploadContainer = ({ children }) => (
  <Box display="flex">
    {children}
  </Box>
);

export const LabelUpload = ({ children }) => (
  <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
    {children}
  </Typography>
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

export const Link = ({ children, ...rest }) => (
  <MUILink
    color="primary"
    underline="none"
    {...rest}
  >
    {children}
  </MUILink>
);

export const Select = ({ children, ...rest }) => (
  <MUISelect
    fullWidth
    {...rest}
  >
    {children}
  </MUISelect>
);

export const Agreement = ({ children }) => (
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
      <Box>
        <Typography variant="subtitle2">
          {children}
        </Typography>
      </Box>
    </Box>
  </Grid>
);

export const LoadingButton = ({ children, ...rest }) => (
  <Grid item xs={12}>
    <Box display="flex">
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
