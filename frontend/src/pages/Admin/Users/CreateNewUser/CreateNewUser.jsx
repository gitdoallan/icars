import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { CreateNewUserForm } from 'components/Forms';

export function CreateNewUser() {
  return (
    <>
      <Header />
      <CreateNewUserForm />
      <Footer />
    </>
  );
}
