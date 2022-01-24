import styled from 'styled-components';

export function Title() {
  return (
    <TitleContainer>
      <ColorOne>Vi</ColorOne>
      <ColorTwo>gn</ColorTwo>
      <ColorThree>et</ColorThree>
      <ColorFour>te</ColorFour>
    </TitleContainer>
  );
}

const TitleContainer = styled.h1`
  font-family: Helvetica, Arial, 'Noto Sans', sans-serif !important;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 48px;
  margin-top: 15px;
`;

const ColorOne = styled.span`
  color: #ec5f5f;
`;

const ColorTwo = styled.span`
  color: #e2a3a3;
`;

const ColorThree = styled.span`
  color: #3786ac;
`;

const ColorFour = styled.span`
  color: #542344;
`;
