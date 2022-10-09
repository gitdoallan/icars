import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Registration, NotFound, Store, Logout,
  BikeDetails, ReservationDetails, Reservations, Admin,
} from 'pages';

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
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
