import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverGalleryComponent } from './rover-gallery.component';

describe('RoverGalleryComponent', () => {
  let component: RoverGalleryComponent;
  let fixture: ComponentFixture<RoverGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoverGalleryComponent ]
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
});
