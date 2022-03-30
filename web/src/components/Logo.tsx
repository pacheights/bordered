import styled from 'styled-components';

export function Logo() {
  const Icon = (
    <PhotoContainer>
      <Picture />
    </PhotoContainer>
  );

  const Title = (
    <TitleContainer>
      <C8>Bordered</C8>
    </TitleContainer>
  );

  return (
    <LogoContainer>
      {Title}
      {Icon}
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  margin-top: 15px; ;
`;

const TitleContainer = styled.h1`
  font-family: Helvetica, Arial, 'Noto Sans', sans-serif !important;
  font-weight: bold;
  letter-spacing: 0.8px;
  font-size: 48px;
  margin-right: 8px;
`;

const C8 = styled.span`
  color: rgb(255, 56, 93);
`;

const PhotoContainer = styled.div`
  height: 0.39in;
  width: 0.34in;
  padding-top: 0.04in;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid lightgray;
`;

const Picture = styled.div`
  height: 0.24in;
  width: 0.24in;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #271a2c;
`;
