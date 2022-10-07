import { useEffect } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useDispatch } from 'react-redux';
import { clearUserInfo } from 'redux/slices';
import { logoutUser } from 'api';

export function Logout() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(clearUserInfo());
    await logoutUser();
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <>
      <Header />
      <h1>You&apos;re logged out</h1>
      <p>Come back soon!</p>
      <Footer />
    </>
  );
}
