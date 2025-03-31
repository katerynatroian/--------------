import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, AlertController, LoadingController, IonCardTitle, IonCard, IonCardHeader, IonLabel, IonItem, IonCardContent, IonList } from '@ionic/angular/standalone';
import { schedule } from '../class/schedule';
import { scheduleRec } from '../class/scheduleRec';
import { HeaderComponent } from '../header/header.component';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [IonList, IonCardContent, IonItem, IonLabel, IonCardHeader, IonCard, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})

export class CloudPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef; 
  toDoList = new schedule();

  dataurl = 'https://api.jsonbin.io/v3/b/67c9624aacd3cb34a8f5eb07 ';
  loading: any;
  linechart: any;


lineChartMethod() {
  if (this.linechart instanceof Chart) {
      this.linechart.destroy();
  }

  this.linechart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'bar',
      data: {
          // Дані по Осі X
          labels: this.toDoList.difficultyGroups.map((group) => group.difficulty.toString()),
          datasets: [
              {
                  label: 'Кількість справ за складністю',
                  borderColor: 'rgba(75,192,192,1)',
                  // Дані по Осі Y
                  data: this.toDoList.difficultyGroups.map((group) => group.count),
                  backgroundColor: 'rgba(153,102,255,0.2)',
              },
          ],
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Кількість справ',
                  },
                  ticks: {
                    stepSize: 1, 
                    precision: 0 
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Складність',
                  },
              },
          },
          plugins: {
              tooltip: {
                  callbacks: {
                      label: (tooltipItem) => {
                          const index = tooltipItem.dataIndex; 
                          const group = this.toDoList.difficultyGroups[index];
                          const titles = group.titles.join(', '); 
                          return [
                            `Кількість: ${group.count}`,
                            `Завдання: ${titles}`
                        ];
                      },
                      title: (tooltipItems) => {
                          const index = tooltipItems[0].dataIndex;
                          return `Складність: ${this.toDoList.difficultyGroups[index].difficulty}`;
                      }
                  }
              }
          }
      },
  });
}

  constructor(
    public loadingController: LoadingController,
    private alertController: AlertController
  ){
    Chart.register(...registerables)
  }

  async presentAlert(msg: string){
    const alert = await this.alertController.create({
      header: 'Помилка',
      message: msg,
      buttons: ['Ok'],

    });

    await alert.present();
  }

  async load(){
    this.loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Loading...',
    });

    await this.loading.present();
    let data: any = [];
    // Отримання даних асинхронно
    fetch(this.dataurl)
      .then((res) => res.json())
      .then((json) => {
        data = json;
        data = data.record;
        try {
          let i = 0;
          while (data[i] != undefined) {
              if (data[i].hasOwnProperty('difficulty')) {
                  this.toDoList.addscheduleRec(data[i] as scheduleRec);
              } else throw new Error('Error load file');
              i++;
          }
      } catch (e) {
          this.presentAlert('Помилка читання JSON');
          console.log((e as Error).message);
      }
      
      this.toDoList.groupByDifficulty();
      console.log(this.toDoList.difficultyGroups)
      this.lineChartMethod();
      this.loading.dismiss();
      });
  }

  ngOnInit() {
    // this.load();
    this.load().then(() => {
      console.log('Records after load:', this.toDoList);
  });
  }

  isTaskCompleted(record: scheduleRec){
    return record.isCompleted == true
  }
  isTaskNotCompleted(record: scheduleRec){
    return record.isCompleted == false
  }
}
