import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ver-button-gropu',
  templateUrl: './ver-button-gropu.component.html',
  styleUrls: ['./ver-button-gropu.component.scss']
})
export class VerButtonGropuComponent implements OnInit {

  switcher = { N:false, SW:false, W:false, WW:false};


  typyHeight: string;
  @Output()  messageEventHeight = new EventEmitter<string>();
  sendHeightType() {
    this. messageEventHeight.emit(String(this.typyHeight));
  }


  constructor() { }

  ngOnInit() {
  }

  switchButtons(voteType: string) {
    if (voteType == "N") {
      this. switcher = { N:true, SW:false, W:false, WW:false};
      this.typyHeight ="N";
      this.sendHeightType();
    }
    if (voteType == "SW") {
      this. switcher = { N:false, SW:true, W:false, WW:false};
      this.typyHeight ="SW";
      this.sendHeightType();
    }
    if (voteType == "W") {
      this. switcher = { N:false, SW:false, W:true, WW:false};
      this.typyHeight ="W";
      this.sendHeightType();
    }
    if (voteType == "WW") {
      this. switcher = { N:false, SW:false, W:false, WW:true};
      this.typyHeight ="WW";
      this.sendHeightType();
    }
  }

  getFromSwitcherValueByKey(key: string) {
    return this.switcher[key];
  }

}
