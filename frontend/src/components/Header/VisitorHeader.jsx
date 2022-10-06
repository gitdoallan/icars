import { NightModeToggle } from 'components/Buttons';
import { Logo } from 'assets/svg';
import { LoginModal } from 'components/Modals';
import * as S from './styles';

export function VisitorHeader() {
  return (
    <S.TopBarContainer>
      <Logo />
      <S.RightMenu>
        <S.SwitchThemeButton>
          <NightModeToggle />
        </S.SwitchThemeButton>
        <LoginModal />
      </S.RightMenu>
    </S.TopBarContainer>
  );
}
