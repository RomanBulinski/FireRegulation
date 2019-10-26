import { Component, OnInit } from '@angular/core';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-schema1',
  templateUrl: './schema1.component.html',
  styleUrls: ['./schema1.component.scss']
})
export class Schema1Component implements OnInit {

  public isshowBudynkiZL: boolean = false;
  public isshowBudynkiPM: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  zltype: string;
  heighttype: string;
  buildingType: string;  

  receiveZL($event) {
    this.zltype = $event;
    this.buildingType = $event+"_"+this.heighttype;
    // console.log(this.zltype);
  }

  receiveHeight($event) {
    this.heighttype = $event;
    this.buildingType = this.zltype+"_"+$event;
    // console.log(this.heighttype);
  }

  getInfo(info:string){
    return info;
  }

  showBudynkiPMiIN(){
    if(this.isshowBudynkiPM == true){
      this.isshowBudynkiPM = false
    }else if(this.isshowBudynkiPM == false){
      this.isshowBudynkiPM = true
    }
  }

  showBudynkiZL(){
    if(this.isshowBudynkiZL == true){
      this.isshowBudynkiZL = false
    }else if(this.isshowBudynkiZL == false){
      this.isshowBudynkiZL = true
    }
  }






}
