import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zl-button',
  templateUrl: './zl-button.component.html',
  styleUrls: ['./zl-button.component.scss']
})
export class ZlButtonComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() buttonOn: boolean;

  constructor() { }

  ngOnInit() {
  }

  changeColor() {
    if (this.buttonOn == true) {
      this.buttonOn = false;
    } else if (this.buttonOn == false) {
      this.buttonOn = true;
    }
  }
  
}
