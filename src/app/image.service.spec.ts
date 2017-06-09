import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ImageService } from './image.service';
import { MarsPhotosResponse, Photo } from './api-types';
import mockData from './image.service.mock-data';

describe('ImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ImageService,
        Http,
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
      ]
    });
  });

  it('should be created', inject([ImageService], (service: ImageService) => {
    expect(service).toBeTruthy();
  }));

  it('should get the latest images', fakeAsync(inject([ImageService, ConnectionBackend], (service: ImageService, backend: MockBackend) => {
    backend.connections.subscribe((connection: MockConnection) => {
      const expectedUrlPrefix = 'https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?earth_date=';
      expect(connection.request.url).toContain(expectedUrlPrefix);
      connection.mockRespond(new Response(
        new ResponseOptions({ status: 200, body: mockData })
      ));
    });

    const images = service.getLatestImages('Curiosity');
    tick();

    let photos: Photo[] | undefined;
    images.subscribe(resp => {
      photos = resp;
    })
    expect(photos).toBeDefined();
    expect((photos as Photo[]).length).toBeGreaterThan(0);
  })));
});
