import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, IonCardContent,
  IonContent, IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton 
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonCardContent, IonItem, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, HeaderComponent, ExploreContainerComponent],
})
export class Tab2Page {
  numbers: number[] = [];
  count: number = 0;

  calculate(a1: any, b1: any) {
    try {
      let a = parseInt(a1, 10);
      let b = parseInt(b1, 10);

      // Валідація введення
      if (isNaN(a) || isNaN(b) || a > b) {
        throw new Error('Невірний діапазон чисел!');
      }

      // Знаходимо числа, що відповідають умові
      this.numbers = [];
      for (let i = a; i <= b; i++) {
        if (i % 2 === 0 && i % 3 === 2) {
          this.numbers.push(i);
        }
      }

      this.count = this.numbers.length;
    } catch (error) {
      this.numbers = [];
      this.count = 0;
      console.log(error);
    }
  }

  constructor() {}
}
