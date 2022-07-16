import { Photo } from '../../components';
import photo from './about.jpg';
import styled from 'styled-components';

export const About = () => {
  return (
    <div>
      <h3 className='title is-3'>About</h3>
      <FlexContainer className='about'>
        <Photo img={photo} />
        <div>
          <p className='subtitle'>
            Bordered was created to bring digital photos to life. They make
            great gifts too.
          </p>
          <p>
            We take so many photos with our phones and we don't look at them
            until we don't have service.
          </p>
          <br />
          <p>
            I believe the best photos in the world are the self developing
            photos made from instant film -- pioneered by Polaroid. Gone is the
            need for a darkroom, an ink printer, a laser printer, or a 1-hour
            photo.
          </p>
          <br />
          <p>
            If the revival of vinyl records says anything, then it seems we'd
            also cherish physical copies of our photos too.
          </p>
          <br />
          <p>
            Bordered was created by Pearson Buck, a software engineer based in
            California. Reach out to him to build apps for you (he's very
            talented).
          </p>
        </div>
      </FlexContainer>
    </div>
  );
};

const FlexContainer = styled.div`
  display: flex;
  .photo {
    margin-right: 16px;
  }
`;
