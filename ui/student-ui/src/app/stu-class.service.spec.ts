import { TestBed } from '@angular/core/testing';

import { StuClassService } from './stu-class.service';

describe('StuClassService', () => {
  let service: StuClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StuClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
