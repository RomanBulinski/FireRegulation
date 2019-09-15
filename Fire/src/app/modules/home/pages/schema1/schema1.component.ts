import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schema1',
  templateUrl: './schema1.component.html',
  styleUrls: ['./schema1.component.scss']
})
export class Schema1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  zltype: string;
  heighttype: string;

  receiveZL($event) {
    this.zltype = $event;
    console.log(this.zltype);
  }

  receiveHeight($event) {
    this.heighttype = $event;
    console.log(this.heighttype);
  }


}
