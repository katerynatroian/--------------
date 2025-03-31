import { Component } from '@angular/core';
import { IonContent, IonInput, IonHeader, IonTitle, IonToolbar, IonCardContent, IonItem, IonLabel, IonButton, IonText, IonCard, IonCardTitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonCardTitle, IonCard, IonText, IonButton, IonLabel, IonItem, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, HeaderComponent, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HeaderComponent, IonInput,  CommonModule, FormsModule],
  
})

export class Tab3Page {
  n!: number;
  matrix: number[][] = [];
  filteredNumbers: number[] = [];

  generateMatrix() {
    this.matrix = [];
    this.filteredNumbers = [];
    for (let i = 0; i < this.n; i++) {
      let row: number[] = [];
      for (let j = 0; j < this.n; j++) {
        let num = Math.floor(Math.random() * 100);
        row.push(num);
        if (i % 2 === 1 && num < 50) {
          this.filteredNumbers.push(num);
        }
      }
      this.matrix.push(row);
    }
  }
}
