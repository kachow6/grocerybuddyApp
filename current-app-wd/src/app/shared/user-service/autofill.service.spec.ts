import { TestBed, inject } from '@angular/core/testing';

import { AutofillService } from './autofill.service';

describe('AutofillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutofillService]
    });
  });

  it('should be created', inject([AutofillService], (service: AutofillService) => {
    expect(service).toBeTruthy();
  }));
});
