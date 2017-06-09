import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { RoverGalleryComponent } from './rover-gallery.component';
import { ImageService } from '../image.service';
import { FakeImageService } from '../image.service.fake';
import { Photo } from '../api-types';

describe('RoverGalleryComponent', () => {
  let component: RoverGalleryComponent;
  let fixture: ComponentFixture<RoverGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoverGalleryComponent],
      providers: [
        { provide: ImageService, useClass: FakeImageService },
      ],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get images', () => {
    component.rover = 'Curiosity';
    component.date = new Date();

    component.ngOnChanges();

    expect(component.photos).toBeDefined();
    const photos = component.photos as { [camera: string]: Photo[] };
    const keys = Object.keys(photos);
    expect(keys.length).toBeGreaterThan(0);
    expect(photos[keys[0]].length).toBeGreaterThan(0);
  });

  it('should show an error when there are no images', () => {
    component.rover = 'Opportunity';
    component.date = new Date();

    component.ngOnChanges();

    expect(component.photos).toBeNull();

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('no photos');
  });
});
