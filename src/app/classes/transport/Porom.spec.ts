import { Porom } from './Porom';

describe('Porom class', () => {
  it('should create an instance of Porom', () => {
    const porom = new Porom('Porom', 25, 10, 3);
    expect(porom).toBeTruthy();
    expect(porom.name).toBe('Porom');
    expect(porom.speed).toBe(25);
    expect(porom.capacity).toBe(10);
    expect(porom.extra).toBe(3);
  });

  it('should throw error if extra is negative', () => {
    expect(() => new Porom('Porom', 25, 10, -3)).toThrowError('Місткість машин має бути додатня');
  });

  it('should return correct displayInfo', () => {
    const porom = new Porom('Porom', 25, 10, 3);
    expect(porom.displayInfo()).toBe('Назва: Porom, Швидкість: 25 км/год, Місткість: 10 осіб, Місткість авто: 3 машин');
  });
});
