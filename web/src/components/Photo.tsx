import { ReactElement } from 'react';
import styled from 'styled-components';
import { Image } from '.';

interface Props {
  onPhotoUpload?: (e: any) => void;
  img: Image;
  i?: number;
  onClickX?: (i: number) => void;
  to?: string;
  from?: string;
  timestamp?: string;
}

export function Photo({
  img,
  onPhotoUpload,
  i,
  onClickX,
  timestamp,
  to,
  from,
}: Props): ReactElement {
  const renderXbutton = i ? i > 0 : false;

  const handleDelete = () => {
    if (onClickX && i) {
      onClickX(i);
    }
  };

  return (
    <Container i={i || 0} className='photo'>
      <PhotoContainer>
        <Picture className='picture' img={img}>
          {onPhotoUpload && (
            <UploadContainer className='file' img={img}>
              <Label className='file-label' img={img}>
                <Input
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
              </Label>
            </UploadContainer>
          )}
        </Picture>
        {to && (
          <Meta>
            <div>
              <p>
                <em>To:</em> {to}
              </p>
              <p>
                <em>From:</em> {from}
              </p>
            </div>
            <div>
              <p>{formatDate(timestamp as string)}</p>
            </div>
          </Meta>
        )}
      </PhotoContainer>
      {renderXbutton && (
        <XButton className='delete' onClick={handleDelete}></XButton>
      )}
    </Container>
  );
}

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  var day = date.getDate();
  var month = date.getMonth() + 1; //Months are zero based
  var year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

type PictureStyleProps = {
  img: Image;
};

const Container = styled.div<{ i: number }>`
  margin-right: ${(props) => (props.i ? '-22px' : 0)};
  display: flex;
`;

const XButton = styled.button`
  margin-left: 4px;
`;

const PhotoContainer = styled.div`
  height: 3.9in;
  width: 3.4in;
  padding-top: 0.28in;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid lightgray;
`;

const Picture = styled.div<PictureStyleProps>`
  height: 2.95in;
  width: 2.95in;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('${(props) => props.img || ''}');
  background-color: ${(props) => (props.img ? '#271A2C' : '#c5c5c5')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-blend-mode: ${(props) => (props.img ? 'exclusion' : 'none')};
  filter: ${(props) =>
    props.img
      ? 'saturate(80%) contrast(100%) sepia(5%) brightness(110%)'
      : 'none'};
`;

const UploadContainer = styled.div<PictureStyleProps>`
  width: ${(props) => (props.img ? '100%' : 'auto')};
  height: ${(props) => (props.img ? '100%' : 'auto')};
  opacity: ${(props) => (props.img ? 0 : 1)};
`;

const Label = styled.label<PictureStyleProps>`
  width: ${(props) => (props.img ? '100%' : 'auto')};
  height: ${(props) => (props.img ? '100%' : 'auto')};
`;

const Input = styled.input`
  &:hover {
    cursor: pointer;
  }
`;

const Meta = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  width: 2.95in;
  margin-top: 4px;
`;
