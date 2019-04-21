import { TestBed } from '@angular/core/testing';

import { CalcBmiService } from './calc-bmi.service';

describe('CalcBmiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcBmiService = TestBed.get(CalcBmiService);
    expect(service).toBeTruthy();
  });
});
