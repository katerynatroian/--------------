import { Blender } from "./blender";
import { Toaster } from "./toaster";

export type KitchenApplianceName = 'Блендер' | 'Тостер' | 'Чайник';
export type KitchenApplianceNameMap = {
    [key: string]: KitchenApplianceName;
};

export const KitchenApplianceNameMap: KitchenApplianceNameMap = {
    Blender: 'Блендер',
    Toaster: 'Тостер',
    Kettle: 'Чайник'
} 
