import { Component, OnInit, Input } from '@angular/core';

import { MarsPhotosResponse, Photo, RoverName } from '../api-types';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-rover-gallery',
  templateUrl: './rover-gallery.component.html',
  styleUrls: ['./rover-gallery.component.css']
})
export class RoverGalleryComponent implements OnInit {
  @Input() rover: RoverName;

  photos: { [camera: string]: Photo[] };
  camera: string;
  cameras: string[];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.imageService.getLatestImages(this.rover).subscribe(photos => {
      this.photos = {};
      photos.forEach(photo => {
        const cameraPhotos = this.photos[photo.camera.full_name] || (this.photos[photo.camera.full_name] = []);
        cameraPhotos.push(photo);
      });
      this.cameras = Object.keys(this.photos);
      this.camera = this.cameras[0];
    });
  }
}
