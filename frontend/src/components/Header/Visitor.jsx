import { NightModeToggle } from 'components/Buttons';
import * as S from './styles';

export function Visitor() {
  return (
    <S.TopBarContainer>
      <span>Logo</span>
      <S.RightMenu>
        <S.SwitchThemeButton>
          <NightModeToggle />
        </S.SwitchThemeButton>
        <span>LoginModal</span>
      </S.RightMenu>
    </S.TopBarContainer>
  );
}
