import { TestBed } from '@angular/core/testing';
import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('Табулювання значення х = 0.1 та у = 0.9983', () => {
    let x = 0.1;
    let y = 0.9983;
    let xy = service.getTab();
    let y1: number | undefined = 5;
    y1 = xy.y[xy.x.indexOf(x.toFixed(2))];
    if (y1 !== undefined) {
      expect(y.toFixed(4)).toBe(y1.toFixed(4));
    }
  });
});
