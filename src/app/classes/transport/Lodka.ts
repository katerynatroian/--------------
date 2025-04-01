import { WaterTransport } from './waterTransport';

export class Lodka extends WaterTransport {
  constructor(name: string, speed: number, capacity: number, public isRowing: boolean) {
    super(name, speed, capacity);
  }

  override displayInfo(): string {
    return 'Лодка  | ' +super.displayInfo() + `, Веслова: ${this.isRowing ? 'Так' : 'Ні'}`;
  }
}
