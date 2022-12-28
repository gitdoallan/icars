import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { StatusMessages } from 'components/StatusMessages';
import { CarsCard } from 'components/Cards';
import { CarsCardSkeleton } from 'components/Skeletons';
import { getAllFilteredCars, getAllFilters } from 'api';

import {
  DatePickerFilter, CarRatingFilter, CarColorFilter, StoreLocationFilter, CarModelFilter,
} from 'components/Filters';

import * as S from './styles';

export function Store() {
  const [carsList, setCarsList] = useState();
  const [status, setStatus] = useState({ status: false });
  const [filterList, setFilterList] = useState({ rating: 0 });
  const { filters } = useSelector((state) => state);
  const skeletonArray = Array.from(Array(6).keys());

  useEffect(() => {
    getAllFilteredCars(filters)
      .then(setCarsList)
      .catch(({ response }) => setStatus({ status: true, message: response.data.message, type: 'error' }));
  }, [filters]);

  useEffect(() => {
    getAllFilters()
      .then(setFilterList)
      .catch(({ response }) => setStatus({ status: true, message: response.data.message, type: 'error' }));
  }, []);

  return (
    <>
      <Header />
      <S.Title>Car Listings</S.Title>
      <S.FiltersContainer>
        <DatePickerFilter size="small" />
        <CarRatingFilter />
        <CarColorFilter carColors={filterList.carColors} />
        <StoreLocationFilter storeLocation={filterList.storeLocations} />
        <CarModelFilter carModels={filterList.carModels} />
      </S.FiltersContainer>
      <StatusMessages {...status} />
      <S.StoreContainer>
        {
          carsList?.map((car) => (<CarsCard key={car.id} {...car} />))
          || skeletonArray.map((e) => (<CarsCardSkeleton key={e} />))
        }
      </S.StoreContainer>
      <Footer />
    </>
  );
}
