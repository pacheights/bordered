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
    <div id='form-container'>
      <form>
        <Title />
        <label className='label' htmlFor='to'>
          To
        </label>
        <Input
          id='to'
          name='to'
          className='input'
          type='text'
          placeholder='First Last'
        />
        <label className='label' htmlFor='from'>
          From
        </label>
        <Input
          id='from'
          name='from'
          className='input'
          type='text'
          placeholder='First Last'
        />
        <label className='label' htmlFor='arrival'>
          Arrival Date
        </label>
        <div>
          <Input
            id='arrival'
            name='arrival'
            className='input'
            type='date'
            min={today}
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
      </form>
      <PhotoContainer>
        <Photo img={img} />
      </PhotoContainer>
    </div>
  );
}

const Input = styled.input`
  margin-bottom: 15px;
`;

const PhotoContainer = styled.div`
  margin-top: 90px;
`;
