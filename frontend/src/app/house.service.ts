import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { House } from './models/house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  
  constructor(private socket: Socket) { }
  houses = this.socket.fromEvent<House[]>('houses');
  currentHouse = this.socket.fromEvent<House>('house');  
  
  getHouse(id: string) {
    this.socket.emit('getHouse', id);
  }

}
