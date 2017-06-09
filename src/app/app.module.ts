import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageService } from './image.service';
import { ImageOfTheDayComponent } from './image-of-the-day/image-of-the-day.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { RoverGalleryComponent } from './rover-gallery/rover-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageOfTheDayComponent,
    ImageGalleryComponent,
    RoverGalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
