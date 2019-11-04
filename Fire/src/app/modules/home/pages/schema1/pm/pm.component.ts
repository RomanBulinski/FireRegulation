import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.scss']
})

export class PmComponent implements OnInit {

  public selectedHeight: String;
  public selectedQtype: String;
  public buildingType: string;

  constructor() { }

  ngOnInit() {
  }

  @Output() messageEventBuildingType = new EventEmitter<string>();

  sendBT() {
    this.messageEventBuildingType.emit(String(this.buildingType));
  }

  public onHeightChange(val: string) {
    this.selectedHeight = val;
    this.setBuildingType() 
    this.setAllFalseInPMTable()
    this.setValueInPMTable(this.buildingType)
    this.sendBT()
  }

  public onQtypeChange(val: string) {
    this.selectedQtype = val;
    this.setBuildingType();
    this.setAllFalseInPMTable() 
    this.setValueInPMTable(this.buildingType)
    this.sendBT()
  }

  public pMTable ={   Kond1_Q499:false, N_Q499:false, SW_Q499:false, W_Q499:false, WW_Q499:false,
                      Kond1_Q501:false, N_Q501:false, SW_Q501:false, W_Q501:false, WW_Q501:false,
                      Kond1_Q1001:false, N_Q1001:false, SW_Q1001:false, W_Q1001:false, WW_Q1001:false,
                      Kond1_Q2001:false, N_Q2001:false, SW_Q2001:false, W_Q2001:false, WW_Q2001:false,
                      Kond1_Q4001:false, N_Q4001:false, SW_Q4001:false, W_Q4001:false, WW_Q4001:false }

  public setAllFalseInPMTable(){
    this.pMTable ={  Kond1_Q499:false, N_Q499:false, SW_Q499:false, W_Q499:false, WW_Q499:false,
                          Kond1_Q501:false, N_Q501:false, SW_Q501:false, W_Q501:false, WW_Q501:false,
                          Kond1_Q1001:false, N_Q1001:false, SW_Q1001:false, W_Q1001:false, WW_Q1001:false,
                          Kond1_Q2001:false, N_Q2001:false, SW_Q2001:false, W_Q2001:false, WW_Q2001:false,
                          Kond1_Q4001:false, N_Q4001:false, SW_Q4001:false, W_Q4001:false, WW_Q4001:false }
  }

  public getValueFromPMTable(value: string){
    return this.pMTable[value]
  }

  public setBuildingType() {
    this.buildingType =this.selectedHeight+ "_"+this.selectedQtype;
  }

  setValueInPMTable(passInfo: string){
    this.pMTable[passInfo]=true;
  }





}
