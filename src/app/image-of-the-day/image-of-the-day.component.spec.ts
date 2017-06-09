import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOfTheDayComponent } from './image-of-the-day.component';

describe('ImageOfTheDayComponent', () => {
  let component: ImageOfTheDayComponent;
  let fixture: ComponentFixture<ImageOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageOfTheDayComponent ]
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
});
