import { TestBed } from '@angular/core/testing';

import { DemoResolverService } from './demo-resolver.service';

describe('DemoResolverService', () => {
  let service: DemoResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
