import { useEffect, useState } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useDispatch } from 'react-redux';
import { clearUserInfo } from 'redux/slices';
import { logoutUser } from 'api';

export function Logout() {
  const dispatch = useDispatch();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = async () => {
    dispatch(clearUserInfo());
    await logoutUser();
    setIsLoggedOut(true);
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <>
      <Header />
      {isLoggedOut
        ? (
          <>
            <h1>You&apos;re logged out</h1>
            <p>Come back soon!</p>
          </>
        )
        : <h1>Logging out...</h1>}
      <Footer />
    </>
  );
}
