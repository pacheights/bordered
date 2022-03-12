import styled from 'styled-components';

interface Props {
  onSelect: (num: number) => void;
  numPhotos: number;
}

export const NumPhotos = ({ onSelect, numPhotos }: Props) => {
  const allowedNumberOfPhotos = [1, 2];
  const handleClick = (e: any) => {
    e.preventDefault();
    onSelect(parseInt(e.target.name));
  };

  return (
    <>
      <label className='label'>Number of photos</label>
      <ButtonContainer>
        {allowedNumberOfPhotos.map((num) => {
          const classNames = ['button'];
          if (num === numPhotos) classNames.push('is-info');
          return (
            <button
              name={`${num}`}
              className={classNames.join(' ')}
              onClick={handleClick}
              key={num}
            >
              {num}
            </button>
          );
        })}
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  button {
    min-width: 42px;
    max-width: 42px;
    height: 38px;
    margin-right: 8px;
  }
`;
