import { KitchenAppliance } from "./KitchenAppliance";
export class Blender extends KitchenAppliance {
    bladeCount: number;

    constructor(name: string, power: number, weight: number, bladeCount: number) {
        super(name, power, weight);
        if (bladeCount < 0) throw new Error('Error! Unacceptable number of blades')
        this.bladeCount = bladeCount;
    }

    override displayInfo() {
        return (super.displayInfo() + `\nКількість лез: ${this.bladeCount}`);
    }
}