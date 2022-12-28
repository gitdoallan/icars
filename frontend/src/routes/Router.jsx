import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Store, CarDetails } from 'pages/Store';
import { Registration } from 'pages/Registration';
import { Reservations, ReservationDetails } from 'pages/Reservations';
import { Logout } from 'pages/Logout';
import { NotFound } from 'pages/NotFound';
import { AdminUserManager, CreateNewUser, EditUser } from 'pages/Admin/Users';
import { CreateNewCar, EditCar } from 'pages/Admin/Cars';
import { Account } from 'pages/Account';
import {
  Admin, Created, Users, Cars, Updated,
} from 'pages/Admin';

import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';

export function Router() {
  const { userInfo } = useSelector((state) => state);
  const isUser = userInfo?.id;
  const isManager = userInfo?.role === 'admin';
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(<PublicRouter isUser={isUser}><Registration /></PublicRouter>)}
        />
        <Route
          path="/store"
          element={(<PrivateRouter isUser={isUser}><Store /></PrivateRouter>)}
        />
        <Route
          path="/store/car/:id"
          element={<PrivateRouter isUser={isUser}><CarDetails /></PrivateRouter>}
        />
        <Route
          path="/reservations"
          element={<PrivateRouter isUser={isUser}><Reservations /></PrivateRouter>}
        />
        <Route
          path="/reservations/:id"
          element={<PrivateRouter isUser={isUser}><ReservationDetails /></PrivateRouter>}
        />
        <Route
          path="/account"
          element={<PrivateRouter isUser={isUser}><Account /></PrivateRouter>}
        />
        <Route
          path="/logout"
          element={<Logout />}
        />
        <Route
          path="/admin"
          element={<PrivateRouter isUser={isManager}><Admin /></PrivateRouter>}
        />
        <Route
          path="/admin/:type/new/:id"
          element={<PrivateRouter isUser={isManager}><Created /></PrivateRouter>}
        />
        <Route
          path="/admin/:type/updated/:id"
          element={<PrivateRouter isUser={isManager}><Updated /></PrivateRouter>}
        />
        <Route
          path="/admin/users"
          element={<PrivateRouter isUser={isManager}><Users /></PrivateRouter>}
        />
        <Route
          path="/admin/user/:id/update"
          element={<PrivateRouter isUser={isManager}><EditUser /></PrivateRouter>}
        />
        <Route
          path="/admin/user/:id"
          element={<PrivateRouter isUser={isManager}><AdminUserManager /></PrivateRouter>}
        />
        <Route
          path="/admin/user/new/"
          element={<PrivateRouter isUser={isManager}><CreateNewUser /></PrivateRouter>}
        />
        <Route
          path="/admin/cars"
          element={<PrivateRouter isUser={isManager}><Cars /></PrivateRouter>}
        />
        <Route
          path="/admin/car/:id/update"
          element={<PrivateRouter isUser={isManager}><EditCar /></PrivateRouter>}
        />
        <Route
          path="/admin/car/new"
          element={<PrivateRouter isUser={isManager}><CreateNewCar /></PrivateRouter>}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
