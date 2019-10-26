import { Component, OnInit } from '@angular/core';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-schema1',
  templateUrl: './schema1.component.html',
  styleUrls: ['./schema1.component.scss']
})
export class Schema1Component implements OnInit {

  zltype: string;
  heighttype: string;
  buildingType: string; 
  public isshowBudynkiZL: boolean = false;
  public isshowBudynkiPM: boolean = false;
  public selectedVal: String;


  constructor() { }

  ngOnInit() {
    this.selectedVal='fffffff'
  }

  ngOnChanges() {
    
  }

  public onValChange(val: string) {
    this.selectedVal = val;
  }
  

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
