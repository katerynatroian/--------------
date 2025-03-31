import { IonHeader, IonToolbar, IonContent, IonMenu, IonTitle, IonMenuToggle,IonList, IonItem } from '@ionic/angular/standalone';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonTitle, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonContent, IonMenuToggle, IonList, IonItem],
})
export class AppComponent {
  constructor() {}
}
