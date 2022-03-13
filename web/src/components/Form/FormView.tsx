import { ReactElement } from 'react';
import styled from 'styled-components';
import { Photo, StateSelector, Title, Image } from '..';

interface FormViewProps {
  onPhotoUpload: (e: any, i: number) => void;
  addPhoto: () => void;
  imgs: Image[];
  deletePhoto: (i: number) => void;
}

export function FormView({
  onPhotoUpload,
  imgs,
  addPhoto,
  deletePhoto,
}: FormViewProps): ReactElement {
  const renderAddPhotoBtn = imgs.length < 2;
  return (
    <>
      <Title />
      <div id='form-container'>
        <Form id='form'>
          <Input name='to' className='input' type='text' placeholder='To' />
          <Input name='from' className='input' type='text' placeholder='From' />
          <TextArea
            className='textarea'
            placeholder='Personal note (handwritten)'
            maxLength={100}
            rows={3}
          />
          <Input
            name='address1'
            className='input'
            type='text'
            placeholder='Recipient Address'
          />
          <Input
            name='address2'
            className='input'
            type='text'
            placeholder='Unit, Apt, Suite'
          />
          <Input name='city' className='input' type='text' placeholder='City' />
          <GeoContainer>
            <StateSelector />
            <ZipInput
              name='zip'
              className='input'
              type='text'
              placeholder='Zip Code'
              maxLength={5}
            />
          </GeoContainer>
        </Form>

        <Photos className='photos-container'>
          {imgs.map((img, i) => (
            <div className='photo-container'>
              <Photo
                img={img}
                onPhotoUpload={(e) => onPhotoUpload(e, i)}
                i={i}
                onClickX={deletePhoto}
              />
            </div>
          ))}

          {renderAddPhotoBtn && (
            <button className='button  add-photo-btn' onClick={addPhoto}>
              <span className='icon is-small'>
                <i className='fas fa-plus'></i>
              </span>
            </button>
          )}
        </Photos>
      </div>
    </>
  );
}

const InputStyling = `margin-bottom: 15px;`;

const Input = styled.input`
  ${InputStyling}
`;

const TextArea = styled.textarea`
  ${InputStyling}
`;

const Photos = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Form = styled.form`
  margin-bottom: 24px;
`;

const GeoContainer = styled.div`
  display: flex;
`;

const ZipInput = styled.input`
  ${InputStyling};
  width: 100px;
  margin-left: 12px;
`;
