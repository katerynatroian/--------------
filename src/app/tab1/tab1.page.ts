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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonCardContent, IonItem, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, HeaderComponent, ExploreContainerComponent],
})
export class Tab1Page {
  result: number = 0;

  calculate(a1: any, b1: any, c1: any) {
    try {
      let a = parseFloat(a1),
          b = parseFloat(b1),
          c = parseFloat(c1);

      // Валідація введення
      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new Error('Parameter is not a number!');
      }

      // Перевіряємо, чи всі числа більші за 5
      if (a > 5 && b > 5 && c > 5) {
        this.result = a + b + c;
      } else {
        // Обчислюємо добуток цифр чисел
        let digits = [...a.toString(), ...b.toString(), ...c.toString()]
          .filter(char => char >= '0' && char <= '9') // Видаляємо знаки "-", ".", інші символи
          .map(Number);
        
        let product = digits.reduce((acc, num) => acc * num, 1);

        // Перевіряємо, чи сума цифр добутку непарна
        let sumOfDigits = product.toString()
          .split('')
          .map(Number)
          .reduce((acc, num) => acc + num, 0);

        this.result = sumOfDigits % 2 !== 0 ? product : 0;
      }
    } catch (error) {
      this.result = 0;
      console.log(error);
    }
  }

  constructor() {}
}
