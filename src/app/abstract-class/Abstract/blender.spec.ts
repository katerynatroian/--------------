import { Blender } from "./blender"

describe('Blender testing', () => {
    let testBlender: Blender

    beforeEach(()=>
        testBlender = new Blender('Блендер YZ-3500', 500, 2, 4)
    )
    // Correct object 
    fit('Creating blender\'s class object', () =>{
        expect(testBlender).toBeTruthy();
    });

    // Incorrect name
    fit('Creating blender\'s class object without name', () =>{
        expect(() => new Blender('', 500, 2, 4)).toThrow(new Error('Error! Unacceptable name'));
    });

    // Incorrect power
    fit('Creating blender\'s class object with negative power', () =>{
        expect(() => new Blender('Блендер YZ-3500', -1, 2, 4)).toThrow(new Error('Error! Unacceptable power value'));
    });

    fit('Creating blender\'s class object with zero power', () =>{
        expect(() => new Blender('Блендер YZ-3500', 0, 2, 4)).toThrow(new Error('Error! Unacceptable power value'));
    });

    // Incorrect weight
    it('Creating blender\'s class object with negative weight', () =>{
        expect(() => new Blender('Блендер YZ-3500', 500, -2, 4)).toThrow(new Error('Error! Unacceptable weight'));
    });

    it('Creating blender\'s class object with zero weight', () =>{
        expect(() => new Blender('Блендер YZ-3500', 500, 0, 4)).toThrow(new Error('Error! Unacceptable weight'));
    });

    // Incorrect number of blades
    it('Creating blender\'s class object with the negative number of blades', () =>{
        expect(() => new Blender('Блендер YZ-3500', 500, 2, -4)).toThrow(new Error('Error! Unacceptable number of blades'));
    });
});