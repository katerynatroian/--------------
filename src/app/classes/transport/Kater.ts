import { WaterTransport } from './waterTransport';

export class Kater extends WaterTransport {
  constructor(name: string, speed: number, capacity: number, public engineType: string) {
    super(name, speed, capacity);
  }

  override displayInfo(): string {
    return 'Катер | ' + super.displayInfo() + `, Тип двигуна: ${this.engineType}`;
  }
}
