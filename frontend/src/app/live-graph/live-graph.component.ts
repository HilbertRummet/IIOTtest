import { Component, OnInit, Input } from '@angular/core';
import { House } from '../models/house';
import { HouseService} from '../house.service'
//import 'rxjs/add/observable/interval';
const maxDataPoints =100;
@Component({
  selector: 'app-live-graph',
  templateUrl: './live-graph.component.html',
  styleUrls: ['./live-graph.component.css']
})
export class LiveGraphComponent implements OnInit {
  private  _house;
  private _key = "";
  data :any[];

  constructor() { 
  }

  ngOnInit() {
  }

  
  @Input()
  set house(house: House) {
    this._house = house;
    this.data = [];
    this.house.rooms.forEach(r=>this.data.push({name:r.name,series:[]}));
    setInterval(this.updateData.bind(this), 2000);
  }
  get house(): House{ 
    return this._house
  };
  @Input()
  set key(key: string) {
    this._key = key;
  }
  get key(): string{ 
    return this._key;
  };

 
   updateData ( ){
    this._house.rooms.forEach(r=>{
      if(r[this.key]){
        let room = this.data.find(d=>d.name==r.name);
        if(room){
          if(room.series.length >maxDataPoints)
            room.series.shift();
          room.series.push({name :new Date(), value:r[this.key]});
        }
      }
    });
    
    this.data=[...this.data];
  }
  
  
  
    view: any[] = [550, 280];
  
    // options for the chart
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Number';
    showYAxisLabel = true;
    timeline = false;
  
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
  
    // line, area
    autoScale = true;
  
  }
  
