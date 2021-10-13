import { Form } from './components/Form';
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
      <Title>Vignette</Title>
      <Form />
    </Container>
  );
};

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-family: sans-serif;
  color: darkblue;
`;

export default App;
