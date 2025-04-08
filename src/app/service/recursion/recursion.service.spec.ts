import { TestBed } from '@angular/core/testing';
import { RecursionService } from './recursion.service';


describe('RecurtionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду значення х = 0.1 та у = 0.0997', () => {
    const x = 0.1;
    const expectedY = 0.0997;
    const y1 = service.getRecursion(x);
    expect(y1.toFixed(4)).toBe(expectedY.toFixed(4));
  });
});
