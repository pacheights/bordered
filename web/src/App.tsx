import { Form } from './components';
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
      <Form />
    </Container>
  );
};

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export default App;
