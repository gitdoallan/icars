import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import * as S from './styles';

export function Store() {
  return (
    <>
      <Header />
      <S.Title>Bike Listings</S.Title>
      <Footer />
    </>
  );
}
