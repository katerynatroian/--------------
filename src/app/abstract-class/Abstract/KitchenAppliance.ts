
export abstract class KitchenAppliance {
    name: string;
    power: number;
    weight: number;

    constructor(name: string, power: number, weight: number) {
        if (name == '') throw new Error('Error! Unacceptable name')
        if (power <= 0) throw new Error('Error! Unacceptable power value')
        if (weight <= 0) throw new Error('Error! Unacceptable weight')
        this.name = name;
        this.power = power;
        this.weight = weight;
    }

    getPower(): number {
        return this.power;
    }

    displayInfo() {
        return (`Назва: ${this.name}\nПотужність: ${this.power} Вт\nВага: ${this.weight} кг`);
    }
}



