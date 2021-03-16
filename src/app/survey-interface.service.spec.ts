import { TestBed } from '@angular/core/testing';

import { SurveyInterfaceService } from './survey-interface.service';

describe('SurveyInterfaceService', () => {
  let service: SurveyInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
