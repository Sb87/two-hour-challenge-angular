import { Component, OnChanges } from '@angular/core';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  date?: IMyDateModel;
  datePickerOptions: IMyDpOptions;

  constructor() {
    const now = new Date();
    now.setDate(now.getDate() + 1);

    this.datePickerOptions = {
      width: '200px',
      dateFormat: 'mm/dd/yyyy',
      disableSince: { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() }
    };
  }
}
