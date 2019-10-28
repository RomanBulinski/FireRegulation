import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hor-button-group',
  templateUrl: './hor-button-group.component.html',
  styleUrls: ['./hor-button-group.component.scss']
})
export class HorButtonGroupComponent implements OnInit {

  switcher = { ZLI:false, ZLII:false, ZLIII:false, ZLIV:false, ZLV:false};

  typyZL: string;
  @Output() messageEventZL = new EventEmitter<string>();
  sendZLType() {
    this.messageEventZL.emit(String(this.typyZL));
  }

  constructor() { }
 
  ngOnInit() {
  }

  switchButtons(voteType: string) {
    if (voteType == "ZLI") {
      this.switcher = { ZLI:true, ZLII:false, ZLIII:false, ZLIV:false, ZLV:false};
      this.typyZL ="ZLI";
      this.sendZLType();
    }
    if (voteType == "ZLII") {
      this.switcher = { ZLI:false, ZLII:true, ZLIII:false, ZLIV:false, ZLV:false};
      this.typyZL ="ZLII";
      this.sendZLType();
    }
    if (voteType == "ZLIII") {
      this.switcher = { ZLI:false, ZLII:false, ZLIII:true, ZLIV:false, ZLV:false};
      this.typyZL ="ZLIII";
      this.sendZLType();
    }
    if (voteType == "ZLIV") {
      this.switcher = { ZLI:false, ZLII:false, ZLIII:false, ZLIV:true, ZLV:false};
      this.typyZL ="ZLIV";
      this.sendZLType();
    }
    if (voteType == "ZLV") {
      this.switcher = { ZLI:false, ZLII:false, ZLIII:false, ZLIV:false, ZLV:true};
      this.typyZL ="ZLV";
      this.sendZLType();
    }
  }

  getFromSwitcherValueByKey(key: string) {
    return this.switcher[key];
  }

  

}
