import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private xx: string[] = [];
  private yy: number[] = [];

  constructor(@Optional() private logService: LogService) {}
  getTab(xn: number = -0.9, xk: number = 0.9, h: number = 0.1) {
    let x = xn, y = 0.0;
    this.xx = [];
    this.yy = [];
    while (x <= xk) {
      y = 0.0;
      let terms = 10;
      for (let n = 0; n < terms; n++) {
        const term = Math.pow(-1, n) * Math.pow(x, 2 * n + 1) / (2 * n + 1);
        y += term;
      }
      this.xx.push(x.toFixed(2));
      this.yy.push(y);
      if (this.logService)
        this.logService.write('x = ' + x.toFixed(2) + ' | y = ' + y.toFixed(4));
      x = +(x + h).toFixed(10);
    }
    return { x: this.xx, y: this.yy };
  } 
}
