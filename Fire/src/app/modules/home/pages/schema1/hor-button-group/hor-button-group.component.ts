import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hor-button-group',
  templateUrl: './hor-button-group.component.html',
  styleUrls: ['./hor-button-group.component.scss']
})
export class HorButtonGroupComponent implements OnInit {

  // buttonOn = false;
  switcher = { ZLI:false, ZLII:false, ZLIII:false, ZLIV:false, ZLV:false};

  constructor() { }
 
  ngOnInit() {
  }

  switchButtons(voteType: string) {
    if (voteType == "ZLI") {
      this.switcher = { ZLI:true, ZLII:false, ZLIII:false, ZLIV:false, ZLV:false};
    }
    if (voteType == "ZLII") {
      this.switcher = { ZLI:false, ZLII:true, ZLIII:false, ZLIV:false, ZLV:false};
    }
    if (voteType == "ZLIII") {
      this.switcher = { ZLI:false, ZLII:false, ZLIII:true, ZLIV:false, ZLV:false};
    }
    if (voteType == "ZLIV") {
      this.switcher = { ZLI:false, ZLII:false, ZLIII:false, ZLIV:true, ZLV:false};
    }
    if (voteType == "ZLV") {
      this.switcher = { ZLI:false, ZLII:false, ZLIII:false, ZLIV:false, ZLV:true};
    }
  }

  getFromSwitcherValueByKey(key: string) {
    return this.switcher[key];
  }

  // changeButtonColor(){
  //   if (this.buttonOn == true) {
  //     this.buttonOn = false;
  //   } else if (this.buttonOn == false) {
  //     this.buttonOn = true;
  //   }
  // }




}
