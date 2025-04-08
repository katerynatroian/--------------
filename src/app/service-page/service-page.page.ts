import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonInput, IonItem, IonButton, IonList, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { TabService } from '../service/tab/tab.service';
import { SeriesService } from '../service/series/series.service';
import { RecursionService } from '../service/recursion/recursion.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.page.html',
  styleUrls: ['./service-page.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonButton, IonItem, IonInput, IonCard, IonCardContent, IonCardTitle, HeaderComponent, IonCardHeader, IonContent, CommonModule, FormsModule]
})
export class ServicePagePage implements OnInit {
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput: string[] = [];
  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recurcionService: RecursionService
  ) { 
    Chart.register(...registerables)
  }

  xx: string[] = [];
  yySer: number[] = [];
  yyRec: number[] = [];
  yyTab: number[] = [];

  @ViewChild('lineCanvas') private lineCanvas ?: ElementRef;
  lineChart: any;
  lineChartMake() {
    if(this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Табулювання',
            data: this.yyTab,
            fill: false,
            borderColor: 'salmon',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 2,
            spanGaps: false,
          },
          {
            label: 'Рекурсія',
            data: this.yyRec,
            fill: false,
            borderColor: '#123456',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 4,
            spanGaps: false,
          },
          {
            label: 'Ряд',
            data: this.yySer,
            fill: false,
            borderColor: 'aqua',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 6,
            spanGaps: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            suggestedMin: 0,
            title: {
              display: true,
              text: 'X',
            },
            ticks: {
              stepSize: 0.001,
            },
          },
          y: {
            title: {
              display: true,
              text: 'Y',
            },
            ticks: {
              stepSize: 0.001,
            },
          },
        },
      },
    });
  }

  ras(xn: any, xk: any, h: any) {
    try {
      let xn1 = parseFloat(xn),
        xk1 = parseFloat(xk),
        h1 = parseFloat(h);
      this.xx = [];
      this.yyTab = [];
      console.log('Табулювання');
      let obj = this.tabService.getTab(xn1, xk1, h1);
      this.xx = obj.x;
      this.yyTab = obj.y;
      console.log('Ряд');
      this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
      console.log('Рекурсія');
      this.xyRecursion = this.recurcionService.getTab(xn1, xk1, h1);
      this.input();
      this.lineChartMake();
    } catch {}
  }

  input() {
    this.yySer = new Array();
    this.yyRec = new Array();
    this.xyInput = [];
    this.xx.forEach((value, index) => {
      let s = '';
      let y : number = 0;
      y = this.yyTab[index];
      s = y.toFixed(4) + ' ';
      y = this.xySeries.get(value);
      this.yySer.push(y);
      s = s + y.toFixed(4);
      y = this.xyRecursion.get(value);
      this.yyRec.push(y);
      s = s + ' ' + y.toFixed(4);
      console.log(s);
      this.xyInput.push(s);
    })
  }

  ngOnInit() {
  }
}
