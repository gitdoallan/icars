import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { BikesCard } from 'components/Cards';
import { BikesCardSkeleton } from 'components/Skeletons';
import { getAllFilteredBikes, getAllFilters } from 'api';

import {
  DatePickerFilter, BikeRatingFilter, BikeColorFilter, StoreLocationFilter,
} from 'components/Filters';

import * as S from './styles';

export function Store() {
  const [bikesList, setBikesList] = useState([]);
  const [status, setStatus] = useState({ status: false });
  const [filterList, setFilterList] = useState({ rating: 0 });
  const { filters } = useSelector((state) => state);
  const skeletonArray = Array.from(Array(6).keys());

  useEffect(() => {
    getAllFilteredBikes(filters)
      .then(setBikesList)
      .catch((error) => setStatus({ status: true, message: error.message, type: 'error' }));
  }, [filters]);

  useEffect(() => {
    getAllFilters()
      .then(setFilterList)
      .catch((error) => setStatus({ status: true, message: error.message, type: 'error' }));
  }, []);

  console.log(filterList);

  return (
    <>
      <Header />
      <S.Title>Bike Listings</S.Title>
      <div>
        <BikeRatingFilter />
        <BikeColorFilter bikeColors={filterList.bikeColors} />
        <StoreLocationFilter storeLocation={filterList.storeLocations} />
        <DatePickerFilter />
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
