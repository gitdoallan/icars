import { Header } from 'components/Header';
import { useParams, useNavigate } from 'react-router-dom';
import { Footer } from 'components/Footer';
import * as S from 'components/Cards/styles';

export function Created() {
  const { type, id } = useParams();
  const navigate = useNavigate();

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
            <S.Title>{cases[type].title}</S.Title>
            <S.Text>{cases[type].message}</S.Text>
            <S.DetailsPage onClick={() => navigate(cases[type].link)}>
              {cases[type].linkText}
            </S.DetailsPage>
            {' '}
            <S.DetailsPage onClick={() => navigate(cases[type].createAnother)}>
              Create Another
            </S.DetailsPage>
          </>
        )
        : <S.Title>Not Found</S.Title>}
      <Footer />
    </>
  );
}
