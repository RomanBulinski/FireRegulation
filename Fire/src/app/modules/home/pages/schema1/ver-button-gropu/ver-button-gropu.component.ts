import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-button-gropu',
  templateUrl: './ver-button-gropu.component.html',
  styleUrls: ['./ver-button-gropu.component.scss']
})
export class VerButtonGropuComponent implements OnInit {

   // buttonOn = false;
   switcher = { N:false, SW:false, W:false, WW:false};

  constructor() { }

  ngOnInit() {
  }

  switchButtons(voteType: string) {
    if (voteType == "N") {
      this. switcher = { N:true, SW:false, W:false, WW:false};
    }
    if (voteType == "SW") {
      this. switcher = { N:false, SW:true, W:false, WW:false};
    }
    if (voteType == "W") {
      this. switcher = { N:false, SW:false, W:true, WW:false};
    }
    if (voteType == "WW") {
      this. switcher = { N:false, SW:false, W:false, WW:true};
    }
  }

  getFromSwitcherValueByKey(key: string) {
    return this.switcher[key];
  }

}
