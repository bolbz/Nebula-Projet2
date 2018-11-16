import { TestBed } from '@angular/core/testing';

import { DescribeService } from './describe.service';

describe('DescribeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescribeService = TestBed.get(DescribeService);
    expect(service).toBeTruthy();
  });
});
