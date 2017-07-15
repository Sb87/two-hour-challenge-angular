import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule, IMyDateModel } from 'mydatepicker';

import { ImageGalleryComponent } from './image-gallery.component';
import { RoverGalleryComponent } from '../rover-gallery/rover-gallery.component';
import { ImageService } from '../image.service';
import { FakeImageService } from '../image.service.fake';

describe('ImageGalleryComponent', () => {
  let component: ImageGalleryComponent;
  let fixture: ComponentFixture<ImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ImageGalleryComponent,
        RoverGalleryComponent
      ],
      providers: [
        { provide: ImageService, useClass: FakeImageService },
      ],
      imports: [
        FormsModule,
        MyDatePickerModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should allow selecting a date', () => {
    const compiled = fixture.debugElement.nativeElement as HTMLElement;

    expect(component.date).toBeUndefined();
    (compiled.querySelector('.btnpicker') as HTMLButtonElement).click();
    (compiled.querySelector('.daycell.currmonth') as HTMLButtonElement).click();
    expect(component.date).toBeDefined();
    expect((component.date as IMyDateModel).jsdate).toBeDefined();
  });
});
