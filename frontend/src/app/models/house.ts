import {Room} from './room';
export class House {
    // Houses have addresses (mostly)
    address : string;
    // can be fun to show 
    imageUrl:String;
    name:String;
    id: string;
    rooms: Room[]
}