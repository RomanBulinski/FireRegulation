import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.scss']
})
export class PmComponent implements OnInit {

  public selectedVal: String;

  constructor() { }

  ngOnInit() {
  }

  public onValChange(val: string) {
    this.selectedVal = val;
  }

}
