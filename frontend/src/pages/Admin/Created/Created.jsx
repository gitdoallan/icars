import { Header } from 'components/Header';
import { useParams, Link } from 'react-router-dom';
import { Footer } from 'components/Footer';

export function Created() {
  const { type, id } = useParams();

  const cases = {
    bike: {
      title: 'Bike Created',
      message: 'Your bike has been created successfully',
      link: `/store/bike/${id}`,
      linkText: 'View Bike',
      createAnother: '/admin/bike/new',
    },
    user: {
      title: 'User Created',
      message: 'The user has been created successfully',
      link: `/admin/user/${id}`,
      linkText: 'View User',
      createAnother: '/admin/user/new',
    },
  };

  return (
    <>
      <Header />
      {cases[type]
        ? (
          <>
            <h1>{cases[type].title}</h1>
            <p>{cases[type].message}</p>
            <Link to={cases[type].link}>{cases[type].linkText}</Link>
            {' | '}
            <Link to={cases[type].createAnother}>Create Another</Link>
          </>
        )
        : <h1>Not Found</h1>}
      <Footer />
    </>
  );
}
