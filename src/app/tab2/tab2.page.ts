import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonItem, IonCard, IonCardContent, IonCardTitle, IonInput } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonLabel, IonItem, IonCard, IonCardContent, IonCardTitle, IonContent, IonInput, HeaderComponent,  CommonModule, FormsModule]
})

export class Tab2Page {
  a!: number;
  b!: number;
  numbers: number[] = [];
  count: number = 0;

  calculate() {
    this.numbers = [];
    this.count = 0;
    for (let i = this.a; i <= this.b; i++) {
      if (i % 8 === 7 && this.isFirstDigitEven(i)) {
        this.numbers.push(i);
        this.count++;
      }
    }
  }

  isFirstDigitEven(num: number): boolean {
    let firstDigit = parseInt(num.toString()[0]);
    return firstDigit % 2 === 0;
  }
}
