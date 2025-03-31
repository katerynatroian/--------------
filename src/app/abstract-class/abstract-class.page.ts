import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle, IonItem, IonCardHeader, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { KitchenAppliance } from './Abstract/KitchenAppliance';
import { Factory } from './Abstract/Factory';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCard, IonCardHeader, IonItem, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class AbstractClassPage implements OnInit {
  
  ngOnInit() {
    this.load()
  }
  maxPower: number = 0;
  maxPowerName: string = '';
  data: any = [];
  appliances: KitchenAppliance[] = [];
  url = 'https://api.jsonbin.io/v3/b/67d9b7a68561e97a50eebeaf';
  
  async load() {
    this.data = [];
    this.appliances = [];
    fetch(this.url)
    .then((res)=> res.json())
    .then((json)=> {
      this.data = json;
      this.data = this.data.record;
      let i = 0;
      while(this.data[i]!=undefined){
        let currentAppliance = Factory.developKitchenAppliance(
          this.data[i]['name'],
          this.data[i]['power'],
          this.data[i]['weight'],
          this.data[i]['slotCount'] ?? this.data[i]['bladeCount']
        );
        this.getMaxPower(currentAppliance.power, currentAppliance.name)
        this.appliances.push(currentAppliance);
        ++i;
      }
    });
  }

  getMaxPower(currentPower: number, name: string){
    if (currentPower > this.maxPower){
      this.maxPower = currentPower;
      this.maxPowerName = name;
    }
  }

  isMaxPower(appliance: KitchenAppliance): boolean {
    return appliance.name === this.maxPowerName;
  }

  
  constructor() { }

}
