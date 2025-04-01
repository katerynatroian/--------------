import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WaterTransport } from '../classes/transport/waterTransport';
import { Kater } from '../classes/transport/Kater';
import { Lodka } from '../classes/transport/Lodka';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonList, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent, IonLabel, IonList, IonCard, IonCardContent, IonCardTitle, IonCardHeader, 
    IonButton, IonItem, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule
  ]
})
export class AbstractClassPage implements OnInit {
  transports: WaterTransport[] = [];
  fastestCount: number = 5; 

  async loadTransports() {
    try {
      const response = await fetch('assets/transport.json');
      const json = await response.json();

      this.transports = json.waterTransport.map((data: any) => {
        return data.type === "Катер"
          ? new Kater(data.name, data.speed, data.capacity, data.engineType)
          : new Lodka(data.name, data.speed, data.capacity, data.isRowing);
      });

      this.findFastest(this.fastestCount); 
    } catch (error) {
      console.error("Помилка завантаження транспорту:", error);
    }
  }

  findFastest(n: any) {
    const count = Number(n) || 1;
  
    // Сортуємо за швидкістю
    const fastest = [...this.transports]
      .sort((a, b) => b.getSpeed() - a.getSpeed())
      .slice(0, count);
  
    // Позначаємо найшвидші
    this.transports.forEach(tr => tr.isFastest = fastest.includes(tr));
  }  
  
  ngOnInit(): void {
    this.loadTransports();
  }
}
