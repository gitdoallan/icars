import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useSelector } from 'react-redux';

export function Account() {
  const { userInfo } = useSelector((state) => state);

  return (
    <>
      <Header />
      <h1>Account</h1>
      <h2>Your account details:</h2>
      <p>
        Email:
        {' '}
        {userInfo.email}
      </p>
      <p>
        Role:
        {' '}
        {userInfo.role}
      </p>
      <Footer />
    </>
  );
}
