import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textrule',
  templateUrl: './textrule.component.html',
  styleUrls: ['./textrule.component.scss']
})
export class TextruleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resistanceTable ={ ZLI_N:"D,C,B", ZLII_N:"D,C,B", ZLIII_N:"D,D,C", ZLIV_N:"D", ZLV_N:"C",
                      ZLI_SW:"B", ZLII_SW:"B", ZLIII_SW:"B", ZLIV_SW:"C", ZLV_SW:"B",
                      ZLI_W:"B", ZLII_W:"B", ZLIII_W:"B", ZLIV_W:"B", ZLV_W:"B",
                      ZLI_WW:"A", ZLII_WW:"A", ZLIII_WW:"A", ZLIV_WW:"A", ZLV_WW:"A" }

  getValueFromResistanceTable(value: string){
  return this.resistanceTable[value]
  }

}
