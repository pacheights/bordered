import { ReactElement } from 'react';
import styled from 'styled-components';
import { Photo, Title } from '..';

interface FormViewProps {
  onPhotoUpload: (e: any) => void;
  img: any;
}

export function FormView({ onPhotoUpload, img }: FormViewProps): ReactElement {
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <Title />
      <div id='form-container'>
        <PhotoContainer>
          <Photo img={img} />
        </PhotoContainer>
        <Form>
          <Input
            id='to'
            name='to'
            className='input'
            type='text'
            placeholder='To'
          />
          <Input
            id='from'
            name='from'
            className='input'
            type='text'
            placeholder='From'
          />

          <div>
            <Input
              id='arrival'
              name='arrival'
              className='input'
              type='date'
              min={today}
              placeholder='Arrival Date'
            />
          </div>

          <div className='file'>
            <label className='file-label'>
              <input
                className='file-input'
                type='file'
                name='photo'
                accept='image/png, image/jpeg'
                onInput={onPhotoUpload}
              />
              <span className='file-cta'>
                <span className='file-icon'>
                  <i className='fas fa-upload'></i>
                </span>
                <span className='file-label'>Upload photo</span>
              </span>
            </label>
          </div>
        </Form>
      </div>
    </>
  );
}

const Input = styled.input`
  margin-bottom: 15px;
`;

const PhotoContainer = styled.div`
  margin-right: 24px;
  margin-bottom: 24px;
`;

const Form = styled.form`
  margin-bottom: 24px;
`;
