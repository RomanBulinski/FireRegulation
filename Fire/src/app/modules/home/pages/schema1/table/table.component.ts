import { Component, OnInit, Input } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCheckboxModule} from '@angular/material/checkbox';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  valueTable ={ ZLI_N:false, ZLII_N:false, ZLIII_N:false, ZLIV_N:false, ZLV_N:false,
                ZLI_SW:false, ZLII_SW:false, ZLIII_SW:false, ZLIV_SW:false, ZLV_SW:false,
                ZLI_W:false, ZLII_W:false, ZLIII_W:false, ZLIV_W:false, ZLV_W:false,
                ZLI_WW:false, ZLII_WW:false, ZLIII_WW:false, ZLIV_WW:false, ZLV_WW:false }

  getValueFromTable(value: string){
     return this.valueTable[value]
  }
  
  @Input() passInfo: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.setAllFalseInTable()
    this.setValueInTable(this.passInfo)
    // console.log(this.passInfo)
  }

  setValueInTable(passInfo: string){
    this.valueTable[passInfo]=true;
  }

  setAllFalseInTable(){
    this.valueTable ={ ZLI_N:false, ZLII_N:false, ZLIII_N:false, ZLIV_N:false, ZLV_N:false,
      ZLI_SW:false, ZLII_SW:false, ZLIII_SW:false, ZLIV_SW:false, ZLV_SW:false,
      ZLI_W:false, ZLII_W:false, ZLIII_W:false, ZLIV_W:false, ZLV_W:false,
      ZLI_WW:false, ZLII_WW:false, ZLIII_WW:false, ZLIV_WW:false, ZLV_WW:false }
  }


}
