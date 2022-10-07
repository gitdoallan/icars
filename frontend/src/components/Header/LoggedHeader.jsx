import { NightModeToggle } from 'components/Buttons';
import { ProfileMenu } from 'components/Menus';
import { Logo } from 'assets/svg';
import * as S from './styles';

export function LoggedHeader() {
  return (
    <S.TopBarContainer>
      <Logo />
      <S.RightMenu>
        <S.SwitchThemeButton>
          <NightModeToggle />
        </S.SwitchThemeButton>
        <ProfileMenu />
      </S.RightMenu>
    </S.TopBarContainer>
  );
}
