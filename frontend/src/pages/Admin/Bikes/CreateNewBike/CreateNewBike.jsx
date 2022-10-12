import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { CreateNewBikeForm } from 'components/Forms';

export function CreateNewBike() {
  return (
    <>
      <Header />
      <CreateNewBikeForm />
      <Footer />
    </>
  );
}
