import { WaterTransport } from './waterTransport';

export class Lodka extends WaterTransport {
  constructor(name: string, speed: number, capacity: number, extra: boolean) {
    super(name, speed, capacity, extra);
  }

  override displayInfo(): string {
    return super.displayInfo() + `, Веслова: ${this.extra ? 'Так' : 'Ні'}`;
  }
}
