import { KitchenAppliance } from "./KitchenAppliance";
import { KitchenApplianceNameMap } from "./KitchenApplianceName";
import { Toaster } from "./toaster";
import { Blender } from "./blender";

export class Factory {
    public static developKitchenAppliance(name: string, power: number, weight: number, parameter: number): KitchenAppliance {
        if(name.includes(KitchenApplianceNameMap['Toaster'])) return new Toaster(name, power, weight, parameter);
        else if (name.includes(KitchenApplianceNameMap['Blender'])) return new Blender(name, power, weight, parameter);
        else throw new Error('Unknown appliance!')
    }
}