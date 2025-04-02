export abstract class WaterTransport {
    constructor(
      public name: string,
      public speed: number,
      public capacity: number,
      public extra: any
    ) {
      if (speed < 0 || capacity < 0) {
        throw new Error("Швидкість та місткість мають бути додатними");
      }
    }
  
    isFastest: boolean = false;
    getSpeed(): number {
      return this.speed;
    }
  
    displayInfo(): string {
      return `Назва: ${this.name}, Швидкість: ${this.speed} км/год, Місткість: ${this.capacity} осіб`;
    }
  }
  