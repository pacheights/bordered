import { PaymentElement } from '@stripe/react-stripe-js';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Photo, StateSelector, Image, Pricing } from '.';
import { getFormDataValues, PRICES } from '../utils';

interface FormViewProps {
  onPhotoUpload: (e: any, i: number) => void;
  addPhoto: () => void;
  imgs: Image[];
  deletePhoto: (i: number) => void;
  onFormSubmit: (fd: FormData) => void;
}

export function FormView({
  onPhotoUpload,
  imgs,
  addPhoto,
  deletePhoto,
  onFormSubmit,
}: FormViewProps): ReactElement {
  const numPhotos = imgs.length;
  const renderAddPhotoBtn = numPhotos < 2;
  const [step, setStep] = useState(0);
  const [fd] = useState(new FormData());

  const formSteps = [
    <Pricing />,
    <>
      <Input
        name='to'
        className='input'
        type='text'
        placeholder='To'
        defaultValue=''
        required
      />

      <Input
        name='address1'
        className='input'
        type='text'
        placeholder='Recipient Address'
        required
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
          required
        />
      </GeoContainer>
    </>,
    <>
      <Input name='from' className='input' type='text' placeholder='From' />
      <TextArea
        name='note'
        className='textarea'
        placeholder='Personal note (handwritten)'
        maxLength={100}
        rows={3}
      />
    </>,
    <>
      <Input
        className='checkbox'
        type='checkbox'
        id='photoWallConsent'
        name='photoWallConsent'
        value='true'
        defaultChecked
      />
      <label htmlFor='photoWallConsent'> Post my photo to the photo wall</label>
      <br />
    </>,
    <>
      <PaymentElement id='payment-element' />
      <br />
    </>,
  ];

  const formTitles = [
    'Instant film prints',
    'Who to send to?',
    "Who's this from?",
    'Show on photo wall?',
    'Payment details',
  ];

  const buttonText = [
    'Start Printing',
    'Continue',
    'Continue',
    'Continue',
    `Pay ${PRICES[numPhotos]}`,
  ];

  const handleNextButtonClick = (e: any) => {
    e.preventDefault();
    const form = e.target.parentNode as HTMLFormElement;
    const nextStep = step + 1;
    if (nextStep === formSteps.length) {
      return onFormSubmit(fd);
    }
    const data = getFormDataValues(new FormData(form));
    //@ts-ignore
    Object.keys(data).forEach((key) => fd.append(key, data[key]));
    return setStep(nextStep);
  };

  return (
    <div id='form-container'>
      <div id='form'>
        <h3 className='title is-3'>{formTitles[step]}</h3>
        <Form>
          {formSteps[step]}
          <input
            onClick={handleNextButtonClick}
            className='button is-danger'
            type='submit'
            value={buttonText[step]}
          />
        </Form>
      </div>

      <Photos className='photos-container'>
        {imgs.map((img, i) => (
          <div className='photo-container' key={i}>
            <Photo
              img={img}
              onPhotoUpload={(e) => onPhotoUpload(e, i)}
              i={i}
              onClickX={deletePhoto}
            />
          </div>
        ))}

        {renderAddPhotoBtn && (
          <button className='button add-photo-btn' onClick={addPhoto}>
            <span className='icon is-small'>
              <i className='fas fa-plus'></i>
            </span>
          </button>
        )}
      </Photos>
    </div>
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
