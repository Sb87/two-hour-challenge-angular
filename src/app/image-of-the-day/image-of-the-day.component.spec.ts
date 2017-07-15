import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOfTheDayComponent } from './image-of-the-day.component';
import { ImageService } from '../image.service';
import { FakeImageService } from '../image.service.fake';

describe('ImageOfTheDayComponent', () => {
  let component: ImageOfTheDayComponent;
  let fixture: ComponentFixture<ImageOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageOfTheDayComponent],
      providers: [
        { provide: ImageService, useClass: FakeImageService },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have an image', () => {
    const img = (fixture.debugElement.nativeElement as HTMLElement).querySelector('img');
    expect(img).toBeDefined();
    expect((img as HTMLImageElement).src).toContain('mars.jpl.nasa.gov');
  });
});
