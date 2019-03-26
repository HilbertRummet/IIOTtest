import { Component, OnInit,Input } from '@angular/core';
import { House } from '../models/house';
import { HouseService} from '../house.service'
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})

export class HouseComponent implements OnInit {
  private _house;

  constructor(private houseService: HouseService) {  }
  @Input()
  set house(house: House) {
    this._house = house;
    console.log(this._house);
  }
  get house(): House{ return this._house};


  ngOnInit() {
  }

}
