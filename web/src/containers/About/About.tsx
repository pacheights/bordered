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
            Bordered was created by Pearson Buck (@pbuqq) to bring our photos to
            life. They make great gifts too.
          </p>

          <p>
            We take so many photos with our phones that just sit in our camera
            rolls and are only looked through when we don't have service.
            Collectively, we've gotten so much better at taking photos of the
            world and the people around us.
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
            also cherish tangible representations of our photos too.
          </p>
          <br />
          <p>
            Pearson is a software engineer based in California. If you ever see
            him, ask for a photo and he'll print one for you on the house.
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
