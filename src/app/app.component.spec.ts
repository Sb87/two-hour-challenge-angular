import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance as AppComponent;
    expect(app).toBeTruthy();
  }));

  it(`should have an initial page`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance as AppComponent;
    expect(app.page).toEqual('iotd');
  }));

  it('should switch between pages', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance as AppComponent;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement as HTMLElement;

    (compiled.querySelector('#galleryBtn') as HTMLButtonElement).click();
    expect(app.page).toEqual('gallery');
    
    (compiled.querySelector('#iotdBtn') as HTMLButtonElement).click();
    expect(app.page).toEqual('iotd');
  }));
});
