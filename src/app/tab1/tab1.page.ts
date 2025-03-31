import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonLabel, IonButton, IonItem, IonInput, IonCardContent, IonCardTitle, IonCard, } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonText, IonLabel, IonButton, IonItem, IonInput, IonCardContent, IonCardTitle, IonCard, HeaderComponent,  CommonModule, FormsModule],
})

export class Tab1Page {
  result: number | string = '';

  calculateSum(input1: any, input2: any, input3: any): void {
    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);
    let num3 = parseFloat(input3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      throw new Error('Введіть коректні дані');
    }

    const numbers = [num1, num2, num3];
    
    // Фільтруємо числа, які більше 10
    const filteredNumbers = numbers.filter(num => num > 10);
    
    // Обчислюємо їхню суму
    const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);

    // Перевіряємо, чи сума непарна
    if (sum % 2 !== 0) {
      // Обчислюємо суму квадратів
      const sumOfSquares = filteredNumbers.reduce((acc, num) => acc + num ** 2, 0);
      this.result = `Сума квадратів: ${sumOfSquares}`;
    } else {
      this.result = 'Сума парна, обчислення не проводиться';
    }
  }
}
