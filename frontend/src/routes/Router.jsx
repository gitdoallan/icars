import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Store, BikeDetails } from 'pages/Store';
import { Registration } from 'pages/Registration';
import { Reservations, ReservationDetails } from 'pages/Reservations';
import { Logout } from 'pages/Logout';
import { NotFound } from 'pages/NotFound';
import { AdminUserManager, CreateNewUser } from 'pages/Admin/Users';
import { CreateNewBike } from 'pages/Admin/Bikes';
import {
  Admin, Created, Users, Bikes,
} from 'pages/Admin';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/bike/:id" element={<BikeDetails />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/reservations/:id" element={<ReservationDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/user/:id" element={<AdminUserManager />} />
        <Route path="/admin/user/new/" element={<CreateNewUser />} />
        <Route path="/admin/bikes" element={<Bikes />} />
        <Route path="/admin/bike/new" element={<CreateNewBike />} />
        <Route path="/admin/:type/new/:id" element={<Created />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
