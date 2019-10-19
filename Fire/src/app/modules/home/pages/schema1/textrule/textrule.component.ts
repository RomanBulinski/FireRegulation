import { Component, OnInit, Input  } from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material';

@Component({
  selector: 'app-textrule',
  templateUrl: './textrule.component.html',
  styleUrls: ['./textrule.component.scss']
})
export class TextruleComponent implements OnInit {

  @Input() passInfo: string;

  showTextForA: Boolean = false;
  showTextForB: Boolean = false;
  showTextForC: Boolean = false;
  showTextForD: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if (this.getValueFromResistanceTable( this.passInfo ) == "A"){
      this.setAllFalse()
      this.showTextForA = true;
    } 
    if (this.getValueFromResistanceTable( this.passInfo ) == "B"){
      this.setAllFalse()
      this.showTextForB = true;
    } 
    if (this.getValueFromResistanceTable( this.passInfo ) == "C"){
      this.setAllFalse()
      this.showTextForC = true;
    } 
    if (this.getValueFromResistanceTable( this.passInfo ) == "D"){
      this.setAllFalse()
      this.showTextForD = true;
    }
  }

  resistanceTable ={ ZLI_N:"D,C,B", ZLII_N:"D,C,B", ZLIII_N:"D,D,C", ZLIV_N:"D", ZLV_N:"C",
                      ZLI_SW:"B", ZLII_SW:"B", ZLIII_SW:"B", ZLIV_SW:"C", ZLV_SW:"B",
                      ZLI_W:"B", ZLII_W:"B", ZLIII_W:"B", ZLIV_W:"B", ZLV_W:"B",
                      ZLI_WW:"A", ZLII_WW:"A", ZLIII_WW:"A", ZLIV_WW:"A", ZLV_WW:"A" }

  getValueFromResistanceTable(value: string){
  return this.resistanceTable[value]
  }

  setAllFalse(){
    this.showTextForA = false;
    this.showTextForB = false;
    this.showTextForC = false;
    this.showTextForD = false;
  }


 


}
