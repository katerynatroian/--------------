import { TestBed } from '@angular/core/testing';
import { RecursionService } from './recursion.service';
import { LogService } from '../logger/log.service';

describe('RecurtionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
