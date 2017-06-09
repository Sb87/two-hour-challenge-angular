import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MarsPhotosResponse, Photo, RoverName } from '../api-types';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-of-the-day',
  templateUrl: './image-of-the-day.component.html',
  styleUrls: ['./image-of-the-day.component.css']
})
export class ImageOfTheDayComponent implements OnInit {
  photo: Photo;
  rover: RoverName = 'Curiosity';

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getIOTD();
  }

  getIOTD(date?: Date) {
    // TODO: get pictures from other rover? Curiosity is the only one with current pictures
    this.imageService.getLatestImages(this.rover).subscribe(photos => {
      const index = Math.floor(Math.random() * photos.length);
      this.photo = photos[index];
    });
  }
}
