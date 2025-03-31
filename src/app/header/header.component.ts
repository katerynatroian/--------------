import { Component, OnInit, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButtons,IonContent, IonMenuButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, IonButtons,IonContent, IonMenuButton],
})
export class HeaderComponent  implements OnInit {
  @Input() name: string = 'Лабораторні работи';
  constructor() { }

  ngOnInit() {}

}
