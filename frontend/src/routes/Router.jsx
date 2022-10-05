import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Registration, NotFound,
} from 'pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
