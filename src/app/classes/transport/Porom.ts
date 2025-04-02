import { WaterTransport } from './waterTransport';

export class Porom extends WaterTransport {
  constructor(name: string, speed: number, capacity: number, extra: number) {
    if (extra < 0) {
        throw new Error("Місткість машин має бути додатня");
      }
    super(name, speed, capacity, extra);
  }

  override getSpeed() {
    return this.speed;
  }

  override displayInfo(): string {
    return super.displayInfo() + `, Місткість авто: ${this.extra} машин`;
  }
}
