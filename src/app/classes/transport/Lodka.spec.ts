import { Lodka } from './Lodka';

describe('Lodka class', () => {
  it('should create an instance of Lodka', () => {
    const lodka = new Lodka('Lodka', 15, 4, true);
    expect(lodka).toBeTruthy();
    expect(lodka.name).toBe('Lodka');
    expect(lodka.speed).toBe(15);
    expect(lodka.capacity).toBe(4);
    expect(lodka.extra).toBe(true);
  });

  it('should throw error if speed or capacity is negative', () => {
    expect(() => new Lodka('Lodka', -15, 4, true)).toThrowError('Швидкість та місткість мають бути додатними');
  });

  it('should throw error if speed or capacity is negative', () => {
    expect(() => new Lodka('Lodka', 15, -4, true)).toThrowError('Швидкість та місткість мають бути додатними');
  });

  it('should return correct displayInfo', () => {
    const lodka = new Lodka('Lodka', 15, 4, true);
    expect(lodka.displayInfo()).toBe('Назва: Lodka, Швидкість: 15 км/год, Місткість: 4 осіб, Веслова: Так');
  });
});
