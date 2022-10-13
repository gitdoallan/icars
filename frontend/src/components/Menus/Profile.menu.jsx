import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import gravatarUrl from 'gravatar-url';
import * as S from './styles';

export function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { userInfo } = useSelector((state) => state);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const gravatarImage = gravatarUrl(userInfo.email, { size: 40, default: 'mm' });

  return (
    <>
      <S.ProfileAvatar
        onClick={handleClick}
        aria-controls={open ? 'account-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
      >
        <S.Avatar src={gravatarImage} />
      </S.ProfileAvatar>
      <S.ProfileMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <S.MyAccount onClick={() => navigate('/account')}>My account</S.MyAccount>
        <Divider />
        {userInfo.role === 'admin' && (
          <Stack>
            <S.OrdersMenu onClick={() => navigate('/admin')}>Reservations</S.OrdersMenu>
            <S.UsersMenu onClick={() => navigate('/admin/users')}>Users</S.UsersMenu>
            <S.BikesMenu onClick={() => navigate('/admin/bikes')}>Bikes</S.BikesMenu>
          </Stack>
        )}
        <S.MyOrders onClick={() => navigate('/reservations')}>My Orders</S.MyOrders>
        <S.Logout onClick={() => navigate('/logout')}>Logout</S.Logout>
      </S.ProfileMenu>
    </>
  );
}
