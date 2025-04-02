import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WaterTransport } from '../classes/transport/waterTransport';
import { transportFactory } from '../classes/transport/transportFactory';
import { transporNameMap } from '../classes/transport/transporName';
import { IonContent, IonInput, IonItem, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonCard } from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent, IonCard, IonCardContent, IonCardTitle, IonCardHeader, 
    IonButton, IonItem, IonInput, IonContent, CommonModule, FormsModule
  ]
})
export class AbstractClassPage implements OnInit {
  transports: WaterTransport[] = [];
  fastestCount: number = 5; 
  dataUrl = 'assets/transport.json';

  async loadTransports() {
    try {
      const response = await fetch(this.dataUrl);
      const json = await response.json();

      this.transports = json.waterTransport.map((data: any) =>
        transportFactory.getTransport(
          transporNameMap[data.name],
          data.speed,
          data.capacity,
          data.extra
        )
      );
      
      this.findFastest(this.fastestCount); 
    } catch (error) {
      console.error("Помилка завантаження транспорту:", error);
    }
  }

  findFastest(n: any) {
    const count = Number(n) || 1;
  
    const fastest = [...this.transports]
      .sort((a, b) => b.getSpeed() - a.getSpeed())
      .slice(0, count);
  
    this.transports.forEach(tr => tr.isFastest = fastest.includes(tr));
  }  
  
  ngOnInit(): void {
    this.loadTransports();
  }
}