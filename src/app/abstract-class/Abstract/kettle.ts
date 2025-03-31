import { KitchenAppliance } from "./KitchenAppliance";

export class Kettle extends KitchenAppliance {
    volume: number;

    constructor(name: string, power: number, weight: number, volume: number) {
        super(name, power, weight);
        if (volume <= 0) throw new Error('Error! Unacceptable volume of kettle')
        this.volume = volume;
    }

    override displayInfo() {
        return (super.displayInfo() + `\nОб'єм: ${this.volume} літрів`);
    }
}