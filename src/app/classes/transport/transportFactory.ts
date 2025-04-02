import { WaterTransport } from "./waterTransport";
import { Kater } from "./Kater";
import { Porom } from "./Porom";
import { Lodka } from "./Lodka";
import { transporNameMap } from "./transporName";


export class transportFactory {
    public static getTransport(name: string, speed: number, capacity: number, extra: any): WaterTransport {
        if (name == transporNameMap['Lodka']) return new Lodka(name, speed, capacity, extra);
        else if (name === transporNameMap['Kater']) return new Kater(name, speed, capacity, extra);
        else if (name === transporNameMap['Porom']) return new Porom(name, speed, capacity, extra);
        else throw new Error('Unknown transport');
    }
}
