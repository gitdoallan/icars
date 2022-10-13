import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { BikesCard } from 'components/Cards';
import { listAllBikes } from 'api';

export function Bikes() {
  const [bikes, setBikes] = useState([]);
  const [status, setStatus] = useState({ status: false });
  useEffect(() => {
    listAllBikes()
      .then((response) => setBikes(response))
      .catch(({ response }) => setStatus({ status: true, message: response.data.message, type: 'error' }));
  }, []);

  return (
    <>
      <Header />
      <h1>Bikes</h1>
      <StatusMessages {...status} />
      <Link to="/admin/bike/new">Create new bike</Link>
      {' '}
      {bikes.map((bike) => (
        <BikesCard key={bike.id} {...bike} />
      ))}
      <Footer />
    </>
  );
}
