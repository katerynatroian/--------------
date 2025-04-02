import { Kater } from './Kater';

describe('Kater class', () => {
  it('should create an instance of Kater', () => {
    const kater = new Kater('Kater', 30, 6, 'Diesel');
    expect(kater).toBeTruthy();
    expect(kater.name).toBe('Kater');
    expect(kater.speed).toBe(30);
    expect(kater.capacity).toBe(6);
    expect(kater.extra).toBe('Diesel');
  });

  it('should return correct displayInfo', () => {
    const kater = new Kater('Kater', 30, 6, 'Diesel');
    expect(kater.displayInfo()).toBe('Назва: Kater, Швидкість: 30 км/год, Місткість: 6 осіб, Тип двигуна: Diesel');
  });
});
