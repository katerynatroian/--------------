import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private logService: LogService) {}

  getSeries(x: number) {
    let sum = 0, term = x, n = 0;
    const min = 1e-12;
    
    while (Math.abs(term) > min) {
      sum += term;
      n++;
      term = Math.pow(-1, n) * Math.pow(x, 2 * n + 1) / (2 * n + 1);
    }
      return sum;
  }

  getTab(xn: number = -0.9, xk: number = 0.9, h: number = 0.1) {
    let x = xn, y = 0.0;

    while (x <= xk) {
      y = this.getSeries(x);
      this.xy.set(x.toFixed(2), y);
      if (this.logService)
        this.logService.write('x = ' + x.toFixed(2) + ' | y = ' + y.toFixed(4));
      x = +(x + h).toFixed(10);
    }
    return this.xy;
  }
}
