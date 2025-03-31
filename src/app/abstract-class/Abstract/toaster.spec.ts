import { Toaster } from "./toaster";

describe('Toaster testing', () => {
    let testToaster: Toaster

    beforeEach(()=>
        testToaster = new Toaster('Тостер 712', 500, 2, 4)
    )
    // Correct object 
    fit('Creating toaster\'s class object', () =>{
        expect(testToaster).toBeTruthy();
    });

    // Incorrect name
    fit('Creating toaster\'s class object without name', () =>{
        expect(() => new Toaster('', 500, 2, 4)).toThrow(new Error('Error! Unacceptable name'));
    });

    // Incorrect power
    fit('Creating toaster\'s class object with negative power', () =>{
        expect(() => new Toaster('Тостер 712', -1, 2, 4)).toThrow(new Error('Error! Unacceptable power value'));
    });

    fit('Creating toaster\'s class object with zero power', () =>{
        expect(() => new Toaster('Тостер 712', 0, 2, 4)).toThrow(new Error('Error! Unacceptable power value'));
    });

    // Incorrect weight
    it('Creating toaster\'s class object with negative weight', () =>{
        expect(() => new Toaster('Тостер 712', 500, -2, 4)).toThrow(new Error('Error! Unacceptable weight'));
    });

    it('Creating toaster\'s class object with zero weight', () =>{
        expect(() => new Toaster('Тостер 712', 500, 0, 4)).toThrow(new Error('Error! Unacceptable weight'));
    });

    // Incorrect number of blades
    it('Creating toaster\'s class object with the negative number of slots', () =>{
        expect(() => new Toaster('Тостер 712', 500, 2, -4)).toThrow(new Error('Error! Unacceptable number of blades'));
    });

    it('Creating toaster\'s class object with the zero number of slots', () =>{
        expect(() => new Toaster('Тостер 712', 500, 2, 0)).toThrow(new Error('Error! Unacceptable number of blades'));
    });
});