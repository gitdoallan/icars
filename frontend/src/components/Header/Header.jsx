import { useSelector } from 'react-redux';
import * as S from './styles';
import { VisitorHeader } from './VisitorHeader';
import { LoggedHeader } from './LoggedHeader';

export function Header() {
  const { userInfo } = useSelector((state) => state);

  return (
    <S.Header>
      {userInfo.isLogged ? <LoggedHeader /> : <VisitorHeader />}
    </S.Header>
  );
}
