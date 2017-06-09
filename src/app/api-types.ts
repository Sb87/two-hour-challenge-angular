export type RoverName = 'Curiosity' | 'Opportunity';

export interface MarsPhotosResponse {
  photos: Photo[];
}

export interface Photo {
  id: number;
  sol: number;
  camera: {
    name: string;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {};
}
