import styled from '@emotion/styled';

export const BackgroundVideo = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  background-size: cover;
  transition: 1s opacity;
  filter: blur(5px) brightness(0.8);
`;
