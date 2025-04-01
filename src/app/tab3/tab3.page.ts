import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonInput, IonItem, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonInput, IonItem, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, HeaderComponent],
})

export class Tab3Page {
  matrix: number[][] = [];
  maxOddRows: number[] = [];
  rowSums: number[] = [];

  generateMatrix(n1: any) {
    try {
      let n = parseInt(n1, 10);

      if (isNaN(n) || n <= 0) {
        throw new Error('N має бути додатним числом!');
      }

      this.matrix = [];
      this.maxOddRows = [];
      this.rowSums = [];

      for (let i = 0; i < n; i++) {
        let row = [];
        let sum = 0;
        for (let j = 0; j < n; j++) {
          let num = Math.floor(Math.random() * 21); // Генеруємо числа 0-20
          row.push(num);
          sum += num;
        }
        this.matrix.push(row);
        this.rowSums.push(sum);

        // Якщо рядок непарний (0, 2, 4...), шукаємо макс. елемент
        if (i % 2 === 0) {
          this.maxOddRows.push(Math.max(...row));
        }
      }

      console.log("Згенерована матриця:", this.matrix);
      console.log("Максимальні непарні рядки:", this.maxOddRows);
      console.log("Суми рядків:", this.rowSums);
    } catch (error) {
      this.matrix = [];
      this.maxOddRows = [];
      this.rowSums = [];
      console.log(error);
    }
  }

  constructor() {}
}
