import { Header } from 'components/Header';
import { SignUpForm } from 'components/Forms';
import { Footer } from 'components/Footer';
import video from 'assets/icars_background_ad.mp4';
import * as S from './styles';

export function Registration() {
  const hideVideo = window.matchMedia('(max-width: 768px)');
  return (
    <>
      {!hideVideo.matches && (
        <S.BackgroundVideo autoPlay muted loop id="background_ad" src={video} />
      )}
      <Header />
      <SignUpForm />
      <Footer />
    </>
  );
}
