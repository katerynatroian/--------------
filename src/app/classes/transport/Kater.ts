import { WaterTransport } from './waterTransport';

export class Kater extends WaterTransport {
  constructor(name: string, speed: number, capacity: number, extra: string) {
    super(name, speed, capacity, extra);
  }

  override displayInfo(): string {
    return super.displayInfo() + `, Тип двигуна: ${this.extra}`;
  }
}
