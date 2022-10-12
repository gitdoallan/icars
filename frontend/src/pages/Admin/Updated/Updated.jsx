import { Header } from 'components/Header';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Footer } from 'components/Footer';

export function Updated() {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const cases = {
    bike: {
      title: 'Bike Updated',
      message: 'The bike has been updated successfully',
      link: `/store/bike/${id}`,
      linkText: 'View Bike',
      updateAnother: '/admin/bikes',
    },
    user: {
      title: 'User Updated',
      message: 'The user has been updated successfully',
      link: `/admin/user/${id}`,
      linkText: 'View User',
      updateAnother: '/admin/users',
    },
  };

  if (!cases[type]) navigate('/store');

  return (
    <>
      <Header />
      <h1>{cases[type].title}</h1>
      <p>{cases[type].message}</p>
      <Link to={cases[type].link}>{cases[type].linkText}</Link>
      {' | '}
      <Link to={cases[type].updateAnother}>Update Another</Link>
      <Footer />
    </>
  );
}
