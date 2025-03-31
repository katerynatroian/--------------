import { Kettle } from "./kettle";

describe('Kettle testing', () => {
    let testKettle: Kettle

    beforeEach(()=>
        testKettle = new Kettle('Чайник YA-2200', 300, 0.7, 4)
    )
    // Correct object 
    fit('Creating kettle\'s class object', () =>{
        expect(testKettle).toBeTruthy();
    });

    // Incorrect name
    fit('Creating kettle\'s class object without name', () =>{
        expect(() => new Kettle('', 300, 0.7, 4)).toThrow(new Error('Error! Unacceptable name'));
    });

    // Incorrect power
    fit('Creating kettle\'s class object with negative power', () =>{
        expect(() => new Kettle('Чайник YA-2200', -1, 2, 4)).toThrow(new Error('Error! Unacceptable power value'));
    });

    fit('Creating kettle\'s class object with zero power', () =>{
        expect(() => new Kettle('Чайник YA-2200', 0, 2, 4)).toThrow(new Error('Error! Unacceptable power value'));
    });

    // Incorrect weight
    it('Creating kettle\'s class object with negative weight', () =>{
        expect(() => new Kettle('Чайник YA-2200', 500, -2, 4)).toThrow(new Error('Error! Unacceptable weight'));
    });

    it('Creating kettle\'s class object with zero weight', () =>{
        expect(() => new Kettle('Чайник YA-2200', 500, 0, 4)).toThrow(new Error('Error! Unacceptable weight'));
    });

    // Incorrect number of blades
    it('Creating kettle\'s class object with the negative volume', () =>{
        expect(() => new Kettle('Чайник YA-2200', 500, 2, -4)).toThrow(new Error('Error! Unacceptable volume'));
    });

    it('Creating kettle\'s class object with the zero volume', () =>{
        expect(() => new Kettle('Чайник YA-2200', 500, 2, 0)).toThrow(new Error('Error! Unacceptable volume'));
    });
});