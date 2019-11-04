import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zl',
  templateUrl: './zl.component.html',
  styleUrls: ['./zl.component.scss']
})
export class ZlComponent implements OnInit {

  public buildingType: string;
  public selectedZL: String;
  public selectedHeight: String;

  public valueTable ={ ZLI_N:false, ZLII_N:false, ZLIII_N:false, ZLIV_N:false, ZLV_N:false,
    ZLI_SW:false, ZLII_SW:false, ZLIII_SW:false, ZLIV_SW:false, ZLV_SW:false,
    ZLI_W:false, ZLII_W:false, ZLIII_W:false, ZLIV_W:false, ZLV_W:false,
    ZLI_WW:false, ZLII_WW:false, ZLIII_WW:false, ZLIV_WW:false, ZLV_WW:false }

  setAllFalseInTable(){
    this.valueTable ={ ZLI_N:false, ZLII_N:false, ZLIII_N:false, ZLIV_N:false, ZLV_N:false,
      ZLI_SW:false, ZLII_SW:false, ZLIII_SW:false, ZLIV_SW:false, ZLV_SW:false,
      ZLI_W:false, ZLII_W:false, ZLIII_W:false, ZLIV_W:false, ZLV_W:false,
      ZLI_WW:false, ZLII_WW:false, ZLIII_WW:false, ZLIV_WW:false, ZLV_WW:false }
  }

  getValueFromTable(value: string){
    return this.valueTable[value]
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  }

  @Output()  messageEventBuildingType = new EventEmitter<string>();

  sendBT() {
    this.messageEventBuildingType.emit(String(this.buildingType));
  }

  public onHeightChange(val: string) {
    this.selectedHeight = val;
    this.setBuildingType() 
    this.setAllFalseInTable()
    this.setValueInTable(this.buildingType)
    this.sendBT()
  }

  public onZLChange(val: string) {
    this.selectedZL = val;
    this.setBuildingType() 
    this.setAllFalseInTable()
    this.setValueInTable(this.buildingType)
    this.sendBT()
  }

  public setBuildingType() {
    this.buildingType =this.selectedZL+ "_"+this.selectedHeight;
  }

  setValueInTable(passInfo: string){
    this.valueTable[passInfo]=true;
  }




}
