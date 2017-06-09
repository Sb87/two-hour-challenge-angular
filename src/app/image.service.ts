import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { MarsPhotosResponse, Photo, RoverName } from './api-types';

const apiKey = 'aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';

// This is the most recent date that has photos for Opportunity as of 6/9/2017
const opportunityMaxDate = new Date(2017, 1, 22);

@Injectable()
export class ImageService {
  private cache: { [roverDate: string]: Photo[] } = {};

  constructor(private http: Http) { }

  getDailyImages(rover: RoverName, date: Date): Observable<Photo[]> {
    const dateString = this.getDateString(date);
    const cachedResponse = this.cache[rover + dateString];
    if (cachedResponse) {
      return Observable.from([cachedResponse]);
    }

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${dateString}&api_key=${apiKey}`;

    return this.http.get(url).map(response => {
      if (response.status === 200) {
        const photosResponse = response.json() as MarsPhotosResponse;
        this.cache[rover + dateString] = photosResponse.photos;
        return photosResponse.photos;
      }
      else {
        throw response.statusText;
      }
    });
  }

  private getDateString(date: Date): string {
    return date.toISOString().slice(0, 10);
  }

  getLatestImages(rover: RoverName): Observable<Photo[]> {
    return this.getYesterdaysImages(rover);
  }

  private getYesterdaysImages(rover: RoverName, date?: Date): Observable<Photo[]> {
    let yesterday = this.getPreviousDate(date);
    if (rover === 'Opportunity' && yesterday > opportunityMaxDate) {
      yesterday = opportunityMaxDate;
    }
    return this.getDailyImages(rover, yesterday).map(photos => {
      if (!photos || photos.length == 0) {
        return this.getYesterdaysImages(rover, yesterday);
      }
      // TODO: handle pagination
      return Observable.from([photos]);
    }).mergeAll();
  }

  private getPreviousDate(input?: Date): Date {
    const output = input ? new Date(input.getTime()) : new Date();
    output.setDate(output.getDate() - 1);
    return output;
  }
}
