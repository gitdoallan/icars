import propTypes from 'prop-types';
import { Button } from '@mui/material';

export const ModalBtn = ({ children, ...rest }) => (
  <Button
    variant="contained"
    color="primary"
    component="a"
    size="large"
    {...rest}
  >
    {children}
  </Button>
);

export const modalBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

ModalBtn.propTypes = {
  children: propTypes.node.isRequired,
};
