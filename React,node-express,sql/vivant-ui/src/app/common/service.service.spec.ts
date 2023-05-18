import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ServiceService', () => {
  let service: ServiceService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceService]
    });
    service = TestBed.inject(ServiceService);
    httpMock = TestBed.get(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
