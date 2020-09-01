import { TestBed } from '@angular/core/testing';

import { NgxImgKrumpService } from './ngx-img-krump.service';

describe('NgxImgKrumpService', () => {
  let service: NgxImgKrumpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImgKrumpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
