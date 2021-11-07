export enum PhotoBrand {
  Polaroid = 'polaroid',
  FujiFilm = 'fujifilm',
}

export interface IBrandDimensions {
  [brand: string]: {
    container: {
      height: number;
      width: number;
      borderTop: number;
    };
    picture: {
      height: number;
      width: number;
    };
  };
}

// in inches
export const BrandDimensions: IBrandDimensions = {
  polaroid: {
    container: {
      height: 4.1,
      width: 4,
      borderTop: 0.25,
    },
    picture: {
      height: 2.9,
      width: 3.5,
    },
  },
  fujifilm: {
    container: {
      height: 3.4,
      width: 2.8,
      borderTop: 0.2,
    },
    picture: {
      height: 2.4,
      width: 2.4,
    },
  },
};
