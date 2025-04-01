export abstract class WaterTransport {
    constructor(
      public name: string,
      public speed: number,
      public capacity: number
    ) {}
  
    isFastest: boolean = false;
    // Метод для отримання швидкості
    getSpeed(): number {
      return this.speed;
    }
  
    // Метод для відображення інформації
    displayInfo(): string {
      return `Назва: ${this.name}, Швидкість: ${this.speed} км/год, Місткість: ${this.capacity} осіб`;
    }
  }
  