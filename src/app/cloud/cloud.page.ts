import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClient } from '@angular/common/http'; 
import { Chart, registerables } from 'chart.js';
import { LoadingController, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonList, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';
import { Book } from '../classes/books/book';
import { BookList } from '../classes/books/book_list';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonCard, IonCardContent, IonCardTitle, HeaderComponent, IonCardHeader, IonButton, IonItem, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HttpClientModule]
})
export class CloudPage implements OnInit {
  @ViewChild('barCanvas') private barCanvas?: ElementRef;

  books = new BookList();
  overdueBooks: Book[] = [];
  onTimeBooks: Book[] = [];
  dataUrl = 'assets/books.json'; // Шлях до файлу JSON з даними
  loading: any;
  barChart: any;

  constructor(
    public loadingController: LoadingController,
    private alertController: AlertController,
    private http: HttpClient
  ) { 
    Chart.register(...registerables);
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msg,
      buttons: ['Ok'],
    });
    await alert.present();
  }

  // Завантаження даних з JSON
  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Loading...',
    });
    await this.loading.present();

    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        let data = json.record;
        try {
          data.forEach((item: any) => {
            if (item.hasOwnProperty('issueDate') && item.hasOwnProperty('termDays')) {
              this.books.addBook(new Book(item.code, item.readerId, new Date(item.issueDate), item.termDays));
            } else throw new Error('Invalid book data');
          });
        } catch (e) {
          this.presentAlert('Error reading JSON');
          console.log((e as Error).message);
        }

        // Розділення на прострочені і вчасно
        const { overdue, onTime } = this.books.splitBooksByDueDate(new Date());
        this.overdueBooks = overdue;
        this.onTimeBooks = onTime;

        // Побудова графіку
        this.drawBarChart();
        this.loading.dismiss();
      });
  }

  // Побудова графіка
  drawBarChart() {
    if (this.barChart instanceof Chart) {
      this.barChart.destroy();
    }

    const readerCounts: { [key: string]: number } = {};
    this.books.books.forEach(book => {
      readerCounts[book.readerId] = (readerCounts[book.readerId] || 0) + 1;
    });

    this.barChart = new Chart(this.barCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: Object.keys(readerCounts),
        datasets: [{
          label: 'Кількість книг у читачів',
          data: Object.values(readerCounts),
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      }
    });
  }

  ngOnInit() {
    this.load();
  }
}
