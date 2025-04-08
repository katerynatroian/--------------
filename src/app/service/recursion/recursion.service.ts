import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy: number = 0;
  private xy = new Map();
  constructor(@Optional() private logService: LogService) {}
  
  getRecursion(x: number, n: number = 0, term: number = x, sum: number = 0): number {
    const min = 1e-12;
    if (Math.abs(term) < min) {
      return sum;
    }
    sum += term;
    n++;
    term = Math.pow(-1, n) * Math.pow(x, 2 * n + 1) / (2 * n + 1);
  
    return this.getRecursion(x, n, term, sum);
  }
  
  
  getTab(xn: number = -0.9, xk: number = 0.9, h: number = 0.1) {
    let x = xn;
    this.xy = new Map();
  
    while (x <= xk) {
      const y = this.getRecursion(x);
      this.xy.set(x.toFixed(2), y);
      if (this.logService) {
        this.logService.write('x = ' + x.toFixed(2) + ' | y = ' + y.toFixed(4));
      }
      x = +(x + h).toFixed(10); 
    }
  
    return this.xy;
  }
  
  
}
