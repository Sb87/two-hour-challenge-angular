import { Component, OnChanges, Input } from '@angular/core';

import { MarsPhotosResponse, Photo, RoverName } from '../api-types';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-rover-gallery',
  templateUrl: './rover-gallery.component.html',
  styleUrls: ['./rover-gallery.component.css']
})
export class RoverGalleryComponent implements OnChanges {
  @Input() rover: RoverName;
  @Input() date?: Date;

  photos: { [camera: string]: Photo[] } | null | undefined;
  camera?: string;
  cameras?: string[];

  constructor(private imageService: ImageService) { }

  ngOnChanges() {
    this.getImages();
  }

  getImages() {
    if (this.photos === null) {
      this.photos = undefined; // Clear "no photos" message
    }

    const observable = this.date
      ? this.imageService.getDailyImages(this.rover, this.date)
      : this.imageService.getLatestImages(this.rover);

    observable.subscribe(photosArray => {
      this.photos = {};
      const photos = this.photos;

      if (photosArray && photosArray.length > 0) {
        photosArray.forEach(photo => {
          const cameraPhotos = photos[photo.camera.full_name] || (photos[photo.camera.full_name] = []);
          cameraPhotos.push(photo);
        });
        this.cameras = Object.keys(photos);
        this.camera = this.cameras[0];
      }
      else {
        this.photos = null;
        this.cameras = undefined;
        this.camera = undefined;
      }
    });
  }
}
