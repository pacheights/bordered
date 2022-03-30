import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Photo } from '../components';
import { endpoint } from '../endpoint';

interface PhotosRes {
  photos: PhotoObj[];
}

interface PhotoObj {
  img1: string;
}

export const PhotoWall = () => {
  const [photos, setPhotos] = useState([] as PhotoObj[]);

  useEffect(() => {
    fetch(`${endpoint}/photos`)
      .then((res) => res.json())
      .then(({ photos }: PhotosRes) => {
        console.log(photos);
        setPhotos(photos);
      });
  }, []);

  return (
    <>
      <h3 className='title is-3'>Photo Wall</h3>
      <PhotoWallContainer className='photo-wall'>
        {photos.map((photo) => (
          <Photo img={photo.img1} />
        ))}
      </PhotoWallContainer>
    </>
  );
};

const PhotoWallContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .photo {
    margin-right: 12px;
    margin-bottom: 12px;
  }
`;
