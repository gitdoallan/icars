import {
  Box, IconButton, Tooltip, Menu, MenuItem, ListItemIcon, Avatar as MUIAvatar,
} from '@mui/material';
import {
  History, Logout as MUILogout, Wallet,
} from '@mui/icons-material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import GroupIcon from '@mui/icons-material/Group';

export const ProfileAvatar = ({ children, ...rest }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
    <Tooltip title="Profile Menu">
      <IconButton
        size="small"
        sx={{ ml: 2 }}
        aria-haspopup="true"
        {...rest}
      >
        {children}
      </IconButton>
    </Tooltip>
  </Box>
);

export const Avatar = ({ children, ...rest }) => (
  <MUIAvatar sx={{ width: 32, height: 32 }} {...rest}>{children}</MUIAvatar>
);

export const ProfileMenu = ({ children, ...rest }) => (
  <Menu
    id="account-menu"
    PaperProps={{
      elevation: 0,
      sx: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1,
        },
        '&:before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: 'background.paper',
          transform: 'translateY(-50%) rotate(45deg)',
          zIndex: 0,
        },
      },
    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    {...rest}
  >
    {children}
  </Menu>
);

export const MyAccount = ({ children, ...rest }) => (
  <MenuItem {...rest}>
    <Avatar />
    {' '}
    {children}
  </MenuItem>
);

export const MyOrders = ({ children, ...rest }) => (
  <MenuItem {...rest}>
    <ListItemIcon>
      <History fontSize="small" />
    </ListItemIcon>
    {children}
  </MenuItem>
);

export const CarsMenu = ({ children, ...rest }) => (
  <MenuItem {...rest}>
    <ListItemIcon>
      <DirectionsCarIcon fontSize="small" />
    </ListItemIcon>
    {children}
  </MenuItem>
);

export const OrdersMenu = ({ children, ...rest }) => (
  <MenuItem {...rest}>
    <ListItemIcon>
      <Wallet fontSize="small" />
    </ListItemIcon>
    {children}
  </MenuItem>
);

export const UsersMenu = ({ children, ...rest }) => (
  <MenuItem {...rest}>
    <ListItemIcon>
      <GroupIcon fontSize="small" />
    </ListItemIcon>
    {children}
  </MenuItem>
);

export const Logout = ({ children, ...rest }) => (
  <MenuItem {...rest}>
    <ListItemIcon>
      <MUILogout fontSize="small" />
    </ListItemIcon>
    {children}
  </MenuItem>
);
