import { KitchenAppliance } from './KitchenAppliance';

export class Toaster extends KitchenAppliance {
    slotCount: number;

    constructor(name: string, power: number, weight: number, slotCount: number) {
        super(name, power, weight);
        if (slotCount <= 0) throw new Error('Error! Unacceptable number of slots')
        this.slotCount = slotCount;
    }

    override displayInfo() {
        return (super.displayInfo() + `\nКількість слотів: ${this.slotCount}`);
    }
}