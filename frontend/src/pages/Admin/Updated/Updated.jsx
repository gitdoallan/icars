import { Header } from 'components/Header';
import { useParams, useNavigate } from 'react-router-dom';
import { Footer } from 'components/Footer';
import * as S from 'components/Cards/styles';

export function Updated() {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const cases = {
    car: {
      title: 'Car Updated',
      message: 'The car has been updated successfully',
      link: `/store/car/${id}`,
      linkText: 'View Car',
      updateAnother: '/admin/cars',
    },
    user: {
      title: 'User Updated',
      message: 'The user has been updated successfully',
      link: `/admin/user/${id}`,
      linkText: 'View User',
      updateAnother: '/admin/users',
    },
  };

  return (
    <>
      <Header />
      {cases[type]
        ? (
          <>
            <S.Title>{cases[type].title}</S.Title>
            <S.Text>{cases[type].message}</S.Text>
            <S.DetailsPage onClick={() => navigate(cases[type].link)}>
              {cases[type].linkText}
            </S.DetailsPage>
            {'  '}
            <S.DetailsPage onClick={() => navigate(cases[type].updateAnother)}>
              Update Another
            </S.DetailsPage>
          </>
        )
        : <S.Title>Not Found</S.Title>}
      <Footer />
    </>
  );
}
