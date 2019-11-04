import { Component, OnInit } from '@angular/core';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-schema1',
  templateUrl: './schema1.component.html',
  styleUrls: ['./schema1.component.scss']
})
export class Schema1Component implements OnInit {

  public buildingType: string;
  public isshowBudynkiZL: boolean = false;
  public isshowBudynkiPM: boolean = false;
  public selectedVal: String;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  public onValChange(val: string) {
    this.selectedVal = val;
  }
  
  receiveZL($event) {
    this.buildingType = $event;
  }

  receivePM($event) {
    this.buildingType = $event;
  }


  getInfo(info:string){
    return info;
  }

  showBudynkiPMiIN(){
    if(this.isshowBudynkiPM == false){
      this.isshowBudynkiPM = true
      this.isshowBudynkiZL = false
    }
  }

  showBudynkiZL(){
    if(this.isshowBudynkiZL == false){
      this.isshowBudynkiZL = true
      this.isshowBudynkiPM  = false
    }
  }

}
