import { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { BikesCard } from 'components/Cards';
import { BikesCardSkeleton } from 'components/Skeletons';
import { getAllFilteredBikes } from 'api';
import * as S from './styles';

export function Store() {
  const [bikesList, setBikesList] = useState();
  const [status, setStatus] = useState({ status: false });
  const [filter, setFilter] = useState({ rating: 0 });
  const skeletonArray = Array.from(Array(6).keys());

  useEffect(() => {
    getAllFilteredBikes(filter)
      .then((response) => (setBikesList(response)))
      .catch((error) => setStatus({ status: true, message: error.message, type: 'error' }));
  }, [filter]);

  return (
    <>
      <Header />
      <S.Title>Bike Listings</S.Title>
      <div>
        <h2>Filter by Rating</h2>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, rating: 0 }))}>All</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, rating: 1 }))}>1+</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, rating: 2 }))}>2+</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, rating: 3 }))}>3+</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, rating: 4 }))}>4+</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, rating: 5 }))}>5+</button>
      </div>

      <div>
        <h2>Filter by Location</h2>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, location: undefined }))}>All</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, location: 1 }))}>Location 1</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, location: 2 }))}>Location 2</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, location: 3 }))}>Location 3</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, location: 4 }))}>Location 4</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, location: 5 }))}>Location 5</button>
      </div>

      <div>
        <h2>Filter by ModelId</h2>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, model: undefined }))}>All</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, model: 1 }))}>Model 1</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, model: 2 }))}>Model 2</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, model: 3 }))}>Model 3</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, model: 4 }))}>Model 4</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, model: 5 }))}>Model 5</button>
      </div>

      <div>
        <h2>Filter by Color</h2>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, color: undefined }))}>All</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, color: 1 }))}>Color 1</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, color: 2 }))}>Color 2</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, color: 3 }))}>Color 3</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, color: 4 }))}>Color 4</button>
        <button type="button" onClick={() => setFilter((prev) => ({ ...prev, color: 5 }))}>Color 5</button>
      </div>

      <StatusMessages {...status} />
      <S.StoreContainer>
        {
          bikesList?.map((bike) => (<BikesCard key={bike.id} {...bike} />))
          || skeletonArray.map((e) => (<BikesCardSkeleton key={e} />))
        }
      </S.StoreContainer>
      <Footer />
    </>
  );
}
