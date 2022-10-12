import { Link } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export function Bikes() {
  return (
    <>
      <Header />
      <h1>Bikes</h1>
      <Link to="/admin/bike/new">Create new bike</Link>
      <Footer />
    </>
  );
}
