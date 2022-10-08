import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { getBikeById } from 'api';

export function BikeDetails() {
  const [bike, setBike] = useState(null);
  const [status, setStatus] = useState({ status: false });

  const { id } = useParams();

  useEffect(() => {
    getBikeById(id)
      .then((response) => setBike(response))
      .catch(({ message }) => setStatus({ status: true, message, type: 'error' }));
  }, [id]);

  console.log(bike);

  return (
    <>
      <Header />
      {bike
        ? (
          <>
            <h1>BikeDetails</h1>
            <StatusMessages {...status} />
          </>
        )
        : (<span>Loading...</span>)}

      <Footer />
    </>
  );
}
