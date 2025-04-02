import { transportFactory } from './transportFactory';
import { transporNameMap } from './transporName';
import { Lodka } from './Lodka';
import { Kater } from './Kater';
import { Porom } from './Porom';

describe('transportFactory', () => {
  it('should create a Lodka instance via factory', () => {
    const transport = transportFactory.getTransport(transporNameMap['Lodka'], 15, 4, true);
    expect(transport).toBeInstanceOf(Lodka);
    expect(transport.name).toBe('Lodka');
  });

  it('should create a Kater instance via factory', () => {
    const transport = transportFactory.getTransport(transporNameMap['Kater'], 30, 6, 'Diesel');
    expect(transport).toBeInstanceOf(Kater);
    expect(transport.name).toBe('Kater');
  });

  it('should create a Porom instance via factory', () => {
    const transport = transportFactory.getTransport(transporNameMap['Porom'], 25, 10, 3);
    expect(transport).toBeInstanceOf(Porom);
    expect(transport.name).toBe('Porom');
  });

  it('should throw error for unknown transport type', () => {
    expect(() => transportFactory.getTransport('UnknownType', 20, 5, 'Invalid')).toThrowError('Unknown transport');
  });
});
