import { TestBed } from '@angular/core/testing';

import { VideogameServicesService } from './videogame-services.service';

describe('VideogameServicesService', () => {
  let service: VideogameServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideogameServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
