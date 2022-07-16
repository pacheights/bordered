import styled from 'styled-components';
import { getFormDataValues } from '../utils';

export const Feedback = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    const body = getFormDataValues(fd);
    console.log(body);
  };

  return (
    <div>
      <h3 className='title is-3'>Feedback</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          name='from'
          className='input'
          type='text'
          placeholder='From'
          defaultValue=''
          required
        />
        <Input
          name='email'
          className='input'
          type='email'
          placeholder='Email'
          defaultValue=''
          required
        />
        <textarea
          name='note'
          className='textarea'
          placeholder='Feedback'
          maxLength={100}
          rows={3}
          required
        />
        <button className='is-danger button'>Submit</button>
      </Form>
    </div>
  );
};

const Styles = `width: 400px !important;
margin-bottom: 12px;`;

const Input = styled.input`
  ${Styles}
`;

const Form = styled.form`
  ${Styles}
  .button {
    margin-top: 12px;
  }
`;
