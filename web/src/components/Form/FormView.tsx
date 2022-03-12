import { ReactElement } from 'react';
import styled from 'styled-components';
import { NumPhotos, Photo, StateSelector, Title } from '..';

interface FormViewProps {
  onPhotoUpload: (e: any) => void;
  img: any;
  setNum: (num: number) => void;
  num: number;
}

export function FormView({
  onPhotoUpload,
  img,
  setNum,
  num,
}: FormViewProps): ReactElement {
  return (
    <>
      <Title />
      <div id='form-container'>
        <PhotoContainer>
          <Photo img={img} onPhotoUpload={onPhotoUpload} />
        </PhotoContainer>

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

const PhotoContainer = styled.div`
  margin-right: 24px;
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
