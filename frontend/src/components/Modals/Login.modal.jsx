import { useState } from 'react';
import {
  Backdrop, Box, Modal, Fade,
} from '@mui/material';
import { LoginForm } from 'components/Forms';
import * as S from './styles';

export function LoginModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <S.ModalBtn onClick={handleOpen}>Login</S.ModalBtn>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={S.modalBox}>
            <LoginForm />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
