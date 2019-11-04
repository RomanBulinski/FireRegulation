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
  showTextForE: Boolean = false;

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
    if (this.getValueFromResistanceTable( this.passInfo ) == "E"){
      this.setAllFalse()
      this.showTextForE = true;
    }
  }

  resistanceTable ={ ZLI_N:"D,C,B", ZLII_N:"D,C,B", ZLIII_N:"D,D,C", ZLIV_N:"D", ZLV_N:"C",
                      ZLI_SW:"B", ZLII_SW:"B", ZLIII_SW:"B", ZLIV_SW:"C", ZLV_SW:"B",
                      ZLI_W:"B", ZLII_W:"B", ZLIII_W:"B", ZLIV_W:"B", ZLV_W:"B",
                      ZLI_WW:"A", ZLII_WW:"A", ZLIII_WW:"A", ZLIV_WW:"A", ZLV_WW:"A",
                      Kond1_Q499:"E", N_Q499:"D", SW_Q499:"C", W_Q499:"B", WW_Q499:"B",
                      Kond1_Q501:"D", N_Q501:"D", SW_Q501:"C", W_Q501:"B", WW_Q501:"B",
                      Kond1_Q1001:"C", N_Q1001:"C", SW_Q1001:"C", W_Q1001:"B", WW_Q1001:"B",
                      Kond1_Q2001:"B", N_Q2001:"B", SW_Q2001:"B", W_Q2001:"*", WW_Q2001:"*",
                      Kond1_Q4001:"A", N_Q4001:"A", SW_Q4001:"A", W_Q4001:"*", WW_Q4001:"*" }

  getValueFromResistanceTable(value: string){
  return this.resistanceTable[value]
  }

  setAllFalse(){
    this.showTextForA = false;
    this.showTextForB = false;
    this.showTextForC = false;
    this.showTextForD = false;
    this.showTextForE = false;
  }


 


}
