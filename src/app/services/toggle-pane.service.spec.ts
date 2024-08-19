import { TestBed } from '@angular/core/testing';

import { TogglePaneService } from './toggle-pane.service';

describe('TogglePaneService', () => {
  let service: TogglePaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TogglePaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
