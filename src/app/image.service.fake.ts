import mockData from './image.service.mock-data';
import { Observable } from 'rxjs';

import { MarsPhotosResponse, Photo, RoverName } from './api-types';

export class FakeImageService {
    getDailyImages(rover: RoverName, date: Date): Observable<Photo[]> {
        if (rover === 'Curiosity') {
            const data = JSON.parse(mockData) as MarsPhotosResponse;
            return Observable.from([data.photos]);
        } else {
            return Observable.from([[]]);
        }
    }

    getLatestImages(rover: RoverName): Observable<Photo[]> {
        return this.getDailyImages(rover, new Date());
    }
}
