import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HouseService} from '../house.service'
import { House } from '../models/house';
@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent  implements OnInit, OnDestroy {
  houses: Observable<House[]>;
  selected: House;
  
  private _houseSub: Subscription;

  constructor(private houseService: HouseService) { 
  }

  ngOnInit() {
    this.houses = this.houseService.houses;
    
  }
  
  select(house){
     this.houseService.getHouse(this.selected.id);
     this.selected = house;
     this._houseSub = this.houseService.currentHouse.subscribe(house => {if(house&&this.selected){ this.selected.rooms = house.rooms}});
  }


  ngOnDestroy() {
    this._houseSub.unsubscribe();
  }
}
